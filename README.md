# Voxaro — B2B AI Voice Automation Platform for Automotive Businesses

> **"Your AI Calling Team. Built for Automotive Business."**  
> Smarter customer conversations. Faster follow-ups. More sales opportunities.

Voxaro is an enterprise-grade B2B conversational AI voice platform designed specifically for automobile manufacturers (OEMs), dealership groups, single dealerships, and automotive service networks.

---

## 1. Primary Value Proposition

Voxaro helps automotive businesses reduce repetitive customer-calling and call-centre costs by automating inbound reception and outbound follow-up calls with conversational AI agents, while maintaining transparent human escalation:

- **24/7 Inbound Reception:** Answers common inquiries about vehicle models, trims, opening hours, showroom locations, and basic promotional pricing without wait times.
- **Approved Outbound Follow-Ups:** Automatically contacts inbound digital leads, post-test-drive prospects, and scheduled maintenance cohorts.
- **Appointment Scheduling:** Locks test drives, VIP showroom consultations, and service bay reservations into existing team calendars.
- **Missed-Call Recovery:** Calls back customers whose calls were missed during peak showroom rush hours.
- **Voice CSAT & Feedback:** Collects post-delivery and post-service satisfaction ratings.
- **Guaranteed Human Handover:** Instantly transfers complex financial discussions, complaints, or sensitive inquiries to on-duty human staff.

---

## 2. Tech Stack

- **Frontend:** React 18 with TypeScript, Tailwind CSS, Lucide Icons
- **Interactive UI:**
  - Conversational speech simulation with real-time waveform visualization
  - 5 interactive automotive call scenarios (Test Drive, Vehicle Enquiry, Service Reminder, Lead Follow-Up, Customer Feedback)
  - Interactive ROI & Cost-Efficiency Calculator with multi-currency selector
  - Real-time command dashboard mockup with filters and SVG trend analytics
  - Accordion FAQ with 12 detailed questions and answers
  - Accessible modal dialogs for legal review (Privacy Policy and Terms of Service drafts)
  - Celebratory confetti triggers upon verified inquiry submission
- **Backend Server:** Node.js Express API
  - Rate limiting via `express-rate-limit` (prevents spam and abuse)
  - Server-side validation of all automotive lead fields
  - Persistent lead storage to `server/data/leads.json`
  - Vite HMR middleware integration in development & static serving in production
- **Production Build:** Vite 6 with code-splitting and asset optimization

---

## 3. Getting Started

### Prerequisites
- Node.js 18+ (tested on Node v20/v26)
- npm or pnpm

### Installation

```bash
# Install dependencies
npm install

# Start development server (serves frontend + backend on port 5000)
npm run dev
```

Visit `http://localhost:5000` in your browser.

---

## 4. Production Build & Deployment

```bash
# Build optimized client bundles
npm run build

# Start production server
npm start
```

### Deploying to Replit
1. Ensure the repo is pushed to your Replit workspace.
2. In the Replit `.replit` configuration, the run command is:
   ```toml
   run = "node server/index.js"
   entrypoint = "server/index.js"
   ```
3. Set the Replit webview port to `5000` (or leave default `$PORT`).
4. Replit will automatically start the Express server and serve the production Vite build with API routes active.

---

## 5. API Endpoints

### `GET /api/health`
System status, server timestamp, and environment details.

### `POST /api/demo-request`
Receives and validates enterprise lead inquiries.
- **Payload:**
  ```json
  {
    "fullName": "Marcus Vance",
    "businessEmail": "mvance@apexdealers.com",
    "companyName": "Apex Automotive Group",
    "jobTitle": "General Manager",
    "companyType": "Dealer Group",
    "monthlyCallVolume": "5,000 - 20,000 calls/mo",
    "mainInterest": "Both Inbound & Outbound",
    "currentChallenge": "Weekend lead follow-up lag",
    "consent": true
  }
  ```
- **Responses:**
  - `201 Created`: Form validated, saved with unique reference ID.
  - `400 Bad Request`: Field-specific error map.
  - `429 Too Many Requests`: Rate limit protection.

### `GET /api/leads`
Read-only inspection of recorded inquiries (protected by `ADMIN_SECRET_KEY` in production).

---

## 6. Environment Variables (`.env`)

See `.env.example`:
```env
PORT=5000
NODE_ENV=development

# Email notification dispatch (optional SMTP provider)
SMTP_HOST=
SMTP_PORT=587
SMTP_USER=
SMTP_PASS=
NOTIFICATION_RECIPIENT=leads@voxaro.ai

# Admin token for leads inspection
ADMIN_SECRET_KEY=voxaro_demo_secret_2026
```

---

## 7. Compliance & Ethical AI Principles

- **No Artificial Claims:** All metrics and dashboard figures are presented as illustrative simulations clearly labeled as demo data.
- **Human Collaboration:** Voxaro does not claim to eliminate human automotive sales or service staff; it automates repetitive low-level dialing to free staff for closing high-value deals.
- **Privacy & DNC:** Respects consent requirements, local calling hours, and do-not-call suppression registries.
