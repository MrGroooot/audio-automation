import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const app = express();
const PORT = process.env.PORT || 5000;
const isProduction = process.env.NODE_ENV === 'production';

// Trust proxy for rate limiter when deployed behind reverse proxy (e.g. Replit)
app.set('trust proxy', 1);

app.use(cors());
app.use(express.json({ limit: '1mb' }));

// Rate limiter for lead submission (max 10 submissions per 15 minutes per IP)
const demoSubmissionLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: {
    success: false,
    error: 'Too many requests from this IP. Please try again after 15 minutes or email contact@voxaro.ai directly.'
  },
  standardHeaders: true,
  legacyHeaders: false,
});

// Storage path for inquiries
const dataDir = path.join(__dirname, 'data');
const leadsFilePath = path.join(dataDir, 'leads.json');

// Ensure data directory exists
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}
if (!fs.existsSync(leadsFilePath)) {
  fs.writeFileSync(leadsFilePath, JSON.stringify([], null, 2), 'utf-8');
}

// Validation helpers
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return typeof email === 'string' && emailRegex.test(email.trim());
}

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'Voxaro Automotive AI Voice Platform API',
    environment: isProduction ? 'production' : 'development',
    timestamp: new Date().toISOString()
  });
});

// Demo / Contact Request Endpoint
app.post('/api/demo-request', demoSubmissionLimiter, async (req, res) => {
  try {
    const {
      fullName,
      businessEmail,
      companyName,
      jobTitle,
      companyType,
      monthlyCallVolume,
      mainInterest,
      currentChallenge,
      consent
    } = req.body;

    // Field validations
    const errors = {};

    if (!fullName || typeof fullName !== 'string' || fullName.trim().length < 2) {
      errors.fullName = 'Please enter your full name (at least 2 characters).';
    }

    if (!businessEmail || !isValidEmail(businessEmail)) {
      errors.businessEmail = 'Please provide a valid business email address.';
    }

    if (!companyName || typeof companyName !== 'string' || companyName.trim().length < 2) {
      errors.companyName = 'Please enter your company or dealership name.';
    }

    if (!jobTitle || typeof jobTitle !== 'string' || jobTitle.trim().length < 2) {
      errors.jobTitle = 'Please enter your role or job title.';
    }

    const validCompanyTypes = ['OEM', 'Dealer Group', 'Dealership', 'Service Network', 'Other'];
    if (!companyType || !validCompanyTypes.includes(companyType)) {
      errors.companyType = 'Please select a valid company type.';
    }

    const validCallVolumes = [
      'Under 1,000 calls/mo',
      '1,000 - 5,000 calls/mo',
      '5,000 - 20,000 calls/mo',
      '20,000 - 50,000 calls/mo',
      '50,000+ calls/mo'
    ];
    if (!monthlyCallVolume || !validCallVolumes.includes(monthlyCallVolume)) {
      errors.monthlyCallVolume = 'Please select your estimated monthly call volume.';
    }

    const validInterests = ['Inbound Calling', 'Outbound Calling', 'Both Inbound & Outbound', 'Unsure / Exploring'];
    if (!mainInterest || !validInterests.includes(mainInterest)) {
      errors.mainInterest = 'Please select your primary interest.';
    }

    if (consent !== true) {
      errors.consent = 'You must acknowledge consent to receive consultation regarding this inquiry.';
    }

    if (Object.keys(errors).length > 0) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed. Please correct the highlighted errors.',
        errors
      });
    }

    const newLead = {
      id: `lead_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      createdAt: new Date().toISOString(),
      fullName: fullName.trim(),
      businessEmail: businessEmail.trim().toLowerCase(),
      companyName: companyName.trim(),
      jobTitle: jobTitle.trim(),
      companyType,
      monthlyCallVolume,
      mainInterest,
      currentChallenge: currentChallenge ? currentChallenge.trim() : '',
      consent: true,
      status: 'pending_review',
      ip: req.ip || req.headers['x-forwarded-for'] || 'unknown',
    };

    // Read existing leads and append
    let leads = [];
    try {
      const fileData = fs.readFileSync(leadsFilePath, 'utf-8');
      leads = JSON.parse(fileData);
      if (!Array.isArray(leads)) leads = [];
    } catch (readErr) {
      console.warn('Could not read existing leads file, resetting to empty array:', readErr);
      leads = [];
    }

    leads.push(newLead);
    fs.writeFileSync(leadsFilePath, JSON.stringify(leads, null, 2), 'utf-8');

    // Email dispatch fallback / hook notification
    console.log(`[Voxaro API] New Qualified Lead Recorded: ${newLead.fullName} (${newLead.companyName} - ${newLead.companyType}) - Ref: ${newLead.id}`);

    // If an email webhook or SMTP is configured, handle here safely
    const hasEmailConfig = Boolean(process.env.SMTP_HOST && process.env.SMTP_USER);
    if (!hasEmailConfig) {
      console.log('[Voxaro API] Notice: SMTP environment variables not configured. Inquiries securely saved to database file.');
    }

    return res.status(201).json({
      success: true,
      message: 'Thank you! Your demo request has been received. A Voxaro automotive automation specialist will review your workflow requirements and reach out within 1 business day.',
      referenceId: newLead.id,
      lead: {
        id: newLead.id,
        fullName: newLead.fullName,
        companyName: newLead.companyName,
        createdAt: newLead.createdAt
      }
    });

  } catch (error) {
    console.error('[Voxaro API Error] Failed to process demo request:', error);
    return res.status(500).json({
      success: false,
      message: 'An unexpected internal error occurred while saving your request. Please try again or email us directly at contact@voxaro.ai.'
    });
  }
});

// Read-only endpoint for reviewing recent submissions in local dashboard/testing
app.get('/api/leads', (req, res) => {
  // Allow inspection with token or in non-production
  const authHeader = req.headers['x-admin-token'];
  const expectedToken = process.env.ADMIN_SECRET_KEY || 'voxaro_demo_secret_2026';

  if (isProduction && authHeader !== expectedToken) {
    return res.status(403).json({ success: false, error: 'Unauthorized' });
  }

  try {
    const fileData = fs.readFileSync(leadsFilePath, 'utf-8');
    const leads = JSON.parse(fileData);
    res.json({ success: true, count: leads.length, leads });
  } catch (e) {
    res.json({ success: true, count: 0, leads: [] });
  }
});

// Vite middleware for dev or static serving for prod
if (isProduction) {
  const distPath = path.join(projectRoot, 'dist');
  app.use(express.static(distPath));
  app.get('*', (req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
  });
} else {
  // Dynamically import Vite in development
  const { createServer: createViteServer } = await import('vite');
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'spa',
    root: projectRoot,
  });
  app.use(vite.middlewares);
}

app.listen(PORT, '0.0.0.0', () => {
  console.log(`\n======================================================`);
  console.log(`  VOXARO AUTOMOTIVE AI VOICE PLATFORM RUNNING`);
  console.log(`  Local URL:        http://localhost:${PORT}`);
  console.log(`  Environment:      ${isProduction ? 'Production' : 'Development (Vite HMR)'}`);
  console.log(`  API Health:       http://localhost:${PORT}/api/health`);
  console.log(`======================================================\n`);
});
