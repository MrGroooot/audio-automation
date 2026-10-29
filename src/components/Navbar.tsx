import React, { useState, useEffect } from 'react';
import { PhoneCall, Menu, X, ArrowRight, ShieldCheck, ChevronRight } from 'lucide-react';

interface NavbarProps {
  onOpenDemo: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDemo }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Solutions', href: '#solutions' },
    { name: 'Use Cases', href: '#use-cases' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Platform', href: '#platform' },
    { name: 'ROI Calculator', href: '#calculator' },
    { name: 'FAQ', href: '#faq' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-navy-950/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-electric-cyan rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-electric-blue to-electric-cyan flex items-center justify-center p-0.5 shadow-glow-cyan transition-transform group-hover:scale-105">
              <div className="w-full h-full bg-navy-950 rounded-[10px] flex items-center justify-center relative overflow-hidden">
                <span className="text-electric-cyan font-mono font-black text-lg tracking-wider">V</span>
                {/* Audio pulse bars on logo */}
                <div className="absolute right-1 bottom-1.5 flex items-end gap-0.5 h-3">
                  <div className="w-0.5 bg-electric-cyan h-2 rounded-full animate-pulse" />
                  <div className="w-0.5 bg-electric-blue h-3 rounded-full animate-pulse delay-75" />
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-xl tracking-tight text-white group-hover:text-slate-100 transition-colors">
                  VOXARO
                </span>
                <span className="text-[10px] uppercase font-mono font-semibold px-1.5 py-0.5 rounded bg-slate-800 text-electric-cyan border border-electric-cyan/30">
                  Automotive AI
                </span>
              </div>
              <span className="text-[11px] text-slate-400 block -mt-1 font-medium tracking-normal">
                Voice Automation Platform
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-electric-cyan transition-colors rounded-lg hover:bg-slate-800/40"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#demo"
              onClick={(e) => {
                e.preventDefault();
                onOpenDemo();
              }}
              className="relative group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-electric-blue to-electric-cyan hover:opacity-95 shadow-glow-cyan transition-all transform active:scale-95"
            >
              <PhoneCall className="w-4 h-4 text-white" />
              <span>Book a Demo</span>
              <ArrowRight className="w-4 h-4 text-white/80 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => onOpenDemo()}
              className="px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-electric-blue"
            >
              Demo
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-electric-cyan"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-800 bg-navy-950/95 backdrop-blur-xl px-4 pt-3 pb-6 animate-fadeIn">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="flex items-center justify-between px-3 py-2.5 text-base font-medium text-slate-300 hover:text-electric-cyan hover:bg-slate-800/50 rounded-lg"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </a>
            ))}
            <div className="pt-4 border-t border-slate-800/80 mt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDemo();
                }}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-electric-blue to-electric-cyan shadow-glow-cyan"
              >
                <PhoneCall className="w-5 h-5" />
                <span>Book a Demo</span>
              </button>
              <div className="flex items-center justify-center gap-2 mt-3 text-xs text-slate-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Automotive B2B Qualified Consultation</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
