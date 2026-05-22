import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Reveal } from "@/components/Reveal";
import { Mail, MapPin, Send, Check, Loader2, AlertCircle, Phone, Clock } from "lucide-react";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function ContactPage() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);

  useEffect(() => { document.title = "Contact — Inzira Technologies"; }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus("sending");
    setError(null);
    try {
      if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
        throw new Error("Email service is not configured.");
      }
      const fd = new FormData(formRef.current);
      const name = String(fd.get("name") || "");
      const email = String(fd.get("email") || "");
      const org = String(fd.get("org") || "");
      const subject = String(fd.get("subject") || `New message from ${name}`);
      const message = String(fd.get("message") || "");

      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name, from_name: name, user_name: name,
          email, from_email: email, user_email: email, reply_to: email,
          org, company: org,
          subject, title: subject,
          message, user_message: message,
          to_name: "Inzira Technologies",
        },
        { publicKey: PUBLIC_KEY },
      );
      setStatus("sent");
      formRef.current.reset();
    } catch (err) {
      setStatus("error");
      setError(err?.text || err?.message || "Failed to send. Please try again.");
    }
  };

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <section className="mx-auto max-w-7xl px-6 pt-20 pb-16 grid lg:grid-cols-2 gap-12">
        <div className="animate-fade-in">
          <div className="text-xs uppercase tracking-widest text-accent">Get in touch</div>
          <h1 className="mt-3 font-display text-5xl md:text-7xl font-bold leading-[0.95]">
            Let's build <span className="text-gradient">something useful</span>.
          </h1>
          <p className="mt-6 max-w-lg text-lg text-muted-foreground">
            Whether you're a partner, investor, community, or institution — we'd love to hear
            how Inzira Technologies can collaborate with you.
          </p>
          <div className="mt-10 space-y-4">
            {[
              { icon: Mail, label: "Email", value: "hello@inzira.tech" },
              { icon: Phone, label: "Phone", value: "+250 788 000 000" },
              { icon: MapPin, label: "Office", value: "KG 9 Ave, Kigali Innovation City", sub: "Kigali, Rwanda" },
              { icon: Clock, label: "Hours", value: "Mon — Fri · 08:00 — 18:00 CAT" },
            ].map(({ icon: I, label, value, sub }, i) => (
              <Reveal key={label} delay={i * 90}>
                <div className="flex items-start gap-4">
                  <div className="grid place-items-center h-11 w-11 rounded-lg bg-secondary transition-transform hover:scale-110 hover:rotate-3">
                    <I className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
                    <div className="font-medium">{value}</div>
                    {sub && <div className="text-sm text-muted-foreground">{sub}</div>}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <div className="mt-8 rounded-2xl overflow-hidden border border-border shadow-glow">
              <iframe
                title="Inzira Technologies — Kigali, Rwanda"
                src="https://www.google.com/maps?q=Kigali%20Innovation%20City%2C%20Kigali%2C%20Rwanda&output=embed"
                width="100%"
                height="260"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full block grayscale-[20%] hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </Reveal>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="rounded-3xl border border-border bg-gradient-card p-8 md:p-10 space-y-5 animate-scale-in"
        >
          <div className="grid grid-cols-2 gap-4">
            <Field label="Name" name="name" required />
            <Field label="Organization" name="org" />
          </div>
          <Field label="Email" name="email" type="email" required />
          <Field label="Subject" name="subject" />
          <div>
            <label className="text-xs uppercase tracking-widest text-muted-foreground">Message</label>
            <textarea
              required
              name="message"
              rows={5}
              maxLength={2000}
              className="mt-2 w-full rounded-lg border border-border bg-background/60 px-4 py-3 text-sm focus:outline-none focus:border-primary transition"
              placeholder="Tell us about your project or idea…"
            />
          </div>

          {status === "error" && (
            <div className="flex items-start gap-2 rounded-lg border border-destructive/40 bg-destructive/10 p-3 text-sm text-destructive animate-fade-in">
              <AlertCircle className="h-4 w-4 mt-0.5" />
              <span>{error}</span>
            </div>
          )}
          {status === "sent" && (
            <div className="flex items-start gap-2 rounded-lg border border-primary/40 bg-primary/10 p-3 text-sm text-primary animate-fade-in">
              <Check className="h-4 w-4 mt-0.5" />
              <span>Thank you! Your message has been sent — we'll get back to you shortly.</span>
            </div>
          )}

          <button
            type="submit"
            disabled={status === "sending"}
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-amber hover:opacity-90 transition disabled:opacity-70 hover-scale"
          >
            {status === "sending" ? (
              <><Loader2 className="h-4 w-4 animate-spin" /> Sending…</>
            ) : status === "sent" ? (
              <><Check className="h-4 w-4" /> Message sent</>
            ) : (
              <>Send message <Send className="h-4 w-4" /></>
            )}
          </button>
        </form>
      </section>
      <SiteFooter />
    </div>
  );
}

function Field({ label, name, type = "text", required = false }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-widest text-muted-foreground">{label}</label>
      <input
        type={type}
        name={name}
        required={required}
        maxLength={255}
        className="mt-2 w-full rounded-lg border border-border bg-background/60 px-4 py-3 text-sm focus:outline-none focus:border-primary transition"
      />
    </div>
  );
}
