import React, { useState, useEffect, useRef } from 'react';
import { X, ArrowRight, CheckCircle, AlertCircle } from 'lucide-react';

/* ─────────────────────────────────────────────────────────────────
   CONFIGURATION — update these two values after setup:
   1. APPS_SCRIPT_URL  →  paste your Google Apps Script web-app URL
   2. WHATSAPP_NUMBER  →  your WhatsApp number with country code (no +)
   ───────────────────────────────────────────────────────────────── */
export const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/REPLACE_WITH_YOUR_SCRIPT_ID/exec';
export const WHATSAPP_NUMBER = '919999999999'; // e.g. 919876543210

/* ─── TYPES ──────────────────────────────────────────────────────── */
interface Props {
  isOpen: boolean;
  enquiryType: string;
  onClose: () => void;
}

type Status = 'idle' | 'submitting' | 'success' | 'error';

/* ─── FIELD WRAPPER ──────────────────────────────────────────────── */
const Field: React.FC<{ label: string; error?: string; children: React.ReactNode }> = ({
  label, error, children,
}) => (
  <div>
    <label className="block text-[11px] font-bold text-slate-400 mb-1.5 uppercase tracking-wider">
      {label}
    </label>
    {children}
    {error && (
      <p className="mt-1 flex items-center gap-1 text-xs text-red-400">
        <AlertCircle className="w-3 h-3 flex-shrink-0" />{error}
      </p>
    )}
  </div>
);

/* ─── INPUT CLASSES ──────────────────────────────────────────────── */
const inputCls = (hasError: boolean) =>
  `w-full px-3.5 py-2 rounded-xl text-sm text-white placeholder-slate-600 outline-none transition-all duration-200 ${
    hasError
      ? 'border border-red-500/60 bg-red-500/10'
      : 'border border-white/10 bg-white/5 focus:border-[#00BFCB]/50 focus:bg-white/[0.08]'
  }`;

/* ─── SUCCESS VIEW ───────────────────────────────────────────────── */
const SuccessView: React.FC<{ name: string }> = ({ name }) => (
  <div className="text-center py-8 px-4">
    <div
      className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
      style={{ background: 'rgba(0,191,203,0.15)', border: '1px solid rgba(0,191,203,0.3)' }}
    >
      <CheckCircle className="w-8 h-8 text-[#00BFCB]" />
    </div>
    <h3 className="text-2xl font-extrabold text-white mb-2">
      Thank you, {name.split(' ')[0]}!
    </h3>
    <p className="text-slate-300 text-sm">We'll contact you shortly.</p>
    <p className="text-slate-500 text-xs mt-3 animate-pulse">
      Connecting you to WhatsApp…
    </p>
  </div>
);

/* ─── MAIN MODAL ─────────────────────────────────────────────────── */
const EnquiryModal: React.FC<Props> = ({ isOpen, enquiryType, onClose }) => {
  const [form, setForm] = useState({ name: '', phone: '', email: '', enquiry: enquiryType });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>('idle');
  const firstInputRef = useRef<HTMLInputElement>(null);

  /* Sync enquiry type and reset form when modal opens */
  useEffect(() => {
    if (isOpen) {
      setForm(f => ({ ...f, enquiry: enquiryType }));
      setStatus('idle');
      setErrors({});
      setTimeout(() => firstInputRef.current?.focus(), 80);
    }
  }, [enquiryType, isOpen]);

  /* Lock body scroll */
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  /* Close on Escape */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  /* ── Validation ── */
  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.phone.trim()) e.phone = 'Phone number is required';
    else if (!/^\+?[\d\s\-()+]{7,15}$/.test(form.phone.trim()))
      e.phone = 'Enter a valid phone number';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      e.email = 'Enter a valid email address';
    if (!form.enquiry.trim()) e.enquiry = 'Please describe your enquiry';
    return e;
  };

  /* ── Change handler ── */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
    if (errors[name]) setErrors(p => { const n = { ...p }; delete n[name]; return n; });
  };

  /* ── Submit ── */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }

    setStatus('submitting');
    try {
      const fd = new FormData();
      fd.append('timestamp', new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }));
      fd.append('name',     form.name.trim());
      fd.append('phone',    form.phone.trim());
      fd.append('email',    form.email.trim());
      fd.append('enquiry',  form.enquiry.trim());

      /* no-cors: response is opaque but data is written to the sheet */
      await fetch(APPS_SCRIPT_URL, { method: 'POST', mode: 'no-cors', body: fd });

      setStatus('success');

      /* WhatsApp redirect after 2.5 s */
      setTimeout(() => {
        const msg = encodeURIComponent(
          `Hi Karao.Digital! I'm ${form.name.trim()} and I'm interested in: ${form.enquiry.trim()}. Please reach me at ${form.phone.trim()} or ${form.email.trim()}.`
        );
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank');
        onClose();
      }, 2500);
    } catch {
      setStatus('error');
    }
  };

  if (!isOpen) return null;

  return (
    /*
     * Backdrop — overflow-y-auto so the panel is reachable on extremely
     * small screens where even 90 dvh is tight (e.g. landscape mobile).
     * items-end on mobile → bottom-sheet feel; items-center on sm+.
     */
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center
                 overflow-y-auto p-0 sm:p-6"
      style={{ background: 'rgba(2,6,23,0.88)', backdropFilter: 'blur(8px)' }}
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}
    >
      {/*
       * Panel — flex column so we can split scrollable body from sticky footer.
       * NO overflow-hidden on the outer shell (it would clip the scroll).
       * max-height uses dvh (dynamic viewport height) so the browser chrome
       * on mobile is accounted for; falls back to svh then vh.
       */}
      <div
        className="relative w-full sm:max-w-lg flex flex-col
                   rounded-t-3xl sm:rounded-3xl"
        style={{
          background: 'linear-gradient(135deg, #0f172a 60%, #1a1040 100%)',
          border: '1px solid rgba(0,191,203,0.2)',
          boxShadow: '0 0 100px rgba(0,191,203,0.12), 0 25px 60px rgba(0,0,0,0.6)',
          maxHeight: 'min(90dvh, 90svh, 90vh)',
        }}
      >
        {/* Glow accent — clipped to panel top-right, no overflow needed */}
        <div
          className="absolute top-0 right-0 w-64 h-64 pointer-events-none rounded-tr-3xl"
          style={{
            background: 'radial-gradient(circle at top right, rgba(0,191,203,0.12) 0%, transparent 70%)',
            overflow: 'hidden',
          }}
        />

        {/* Close button — sticky at top, always visible */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full flex items-center
                     justify-center text-slate-400 hover:text-white transition-colors"
          style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        {status === 'success' ? (
          <SuccessView name={form.name} />
        ) : (
          /*
           * Form is the flex column host so the submit footer stays outside
           * the scroll region and is always visible.
           */
          <form onSubmit={handleSubmit} noValidate className="flex flex-col min-h-0 flex-1">

            {/* ── Scrollable content ── */}
            <div className="flex-1 overflow-y-auto overscroll-contain px-5 pt-5 pb-2 sm:px-6 sm:pt-6 relative z-10">

              {/* Header */}
              <div className="mb-4 pr-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 mb-2.5 border border-white/10 bg-white/5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00BFCB] animate-pulse" />
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    Get In Touch
                  </span>
                </div>
                <h2 className="text-xl font-extrabold text-white leading-tight">
                  Let's build something{' '}
                  <span className="text-[#00BFCB]">great</span> together
                </h2>
              </div>

              {/* Fields */}
              <div className="space-y-3">
                <Field label="Full Name" error={errors.name}>
                  <input
                    ref={firstInputRef}
                    name="name"
                    type="text"
                    placeholder="Your full name"
                    value={form.name}
                    onChange={handleChange}
                    className={inputCls(!!errors.name)}
                  />
                </Field>

                <Field label="Phone Number" error={errors.phone}>
                  <input
                    name="phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={form.phone}
                    onChange={handleChange}
                    className={inputCls(!!errors.phone)}
                  />
                </Field>

                <Field label="Email Address" error={errors.email}>
                  <input
                    name="email"
                    type="email"
                    placeholder="you@company.com"
                    value={form.email}
                    onChange={handleChange}
                    className={inputCls(!!errors.email)}
                  />
                </Field>

                <Field label="Enquiry" error={errors.enquiry}>
                  <textarea
                    name="enquiry"
                    placeholder="Tell us what you're looking for…"
                    value={form.enquiry}
                    onChange={handleChange}
                    rows={2}
                    className={`${inputCls(!!errors.enquiry)} resize-none`}
                  />
                </Field>

                {status === 'error' && (
                  <div className="flex items-center gap-2 text-red-400 text-sm p-3 rounded-xl bg-red-500/10 border border-red-500/20">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    Something went wrong. Please try again.
                  </div>
                )}
              </div>
            </div>

            {/* ── Sticky submit footer — never scrolls away ── */}
            <div
              className="px-5 pt-3 pb-5 sm:px-6 sm:pb-6 flex-shrink-0 relative z-10"
              style={{
                borderTop: '1px solid rgba(255,255,255,0.06)',
                background: 'linear-gradient(to bottom, rgba(15,23,42,0.6) 0%, #0f172a 30%)',
              }}
            >
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-full
                           text-sm font-bold text-white transition-all duration-300
                           disabled:opacity-60 hover:brightness-110 active:scale-[0.98]"
                style={{
                  background: 'linear-gradient(90deg, #00BFCB 0%, #0098a6 100%)',
                  boxShadow: '0 0 30px rgba(0,191,203,0.25)',
                }}
              >
                {status === 'submitting' ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending…
                  </>
                ) : (
                  <>
                    Send Enquiry
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <p className="text-center text-slate-600 text-[10px] mt-2">
                By submitting, you agree to be contacted by Karao.Digital.
              </p>
            </div>

          </form>
        )}
      </div>
    </div>
  );
};

export default EnquiryModal;
