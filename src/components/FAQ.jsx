import { useState } from "react";
import { Plus } from "lucide-react";
import { Reveal } from "./Reveal";

const faqs = [
  {
    q: "What is Inzira Technologies?",
    a: "Inzira Technologies is a youth-led Rwandan organization building a connected ecosystem of digital platforms covering mobility, business, healthcare, learning and payments — designed to be simple, accessible and useful for every citizen.",
  },
  {
    q: "Which product launches first?",
    a: "InziraMove, our smart mobility platform, is the first product launching under Inzira Technologies. It helps commuters access live route information, reduce waiting time, and receive real-time travel updates.",
  },
  {
    q: "Who can use Inzira products?",
    a: "Our platforms are built for general citizens, students, small and medium businesses, transport operators, healthcare providers, and local communities and institutions across Rwanda and Africa.",
  },
  {
    q: "How can I partner with Inzira Technologies?",
    a: "We welcome collaboration with telecoms, banks, government agencies, NGOs, universities and innovation hubs. Reach out via our contact page and our team will get back to you within a few working days.",
  },
  {
    q: "Are your platforms free to use?",
    a: "Core citizen-facing features are designed to be free or very low cost. Some advanced tools for businesses, operators and institutions follow a fair subscription model.",
  },
  {
    q: "Where are you based?",
    a: "We are headquartered in Kigali, Rwanda, with the ambition to expand our ecosystem across the African continent.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <Reveal>
        <div className="text-xs uppercase tracking-widest text-accent">FAQ</div>
        <h2 className="mt-2 font-display text-4xl md:text-5xl font-bold max-w-3xl">
          Questions, answered.
        </h2>
        <p className="mt-4 text-muted-foreground max-w-2xl">
          Everything you need to know about Inzira Technologies and our growing
          ecosystem of digital platforms.
        </p>
      </Reveal>

      <div className="mt-12 grid lg:grid-cols-[1fr_1.4fr] gap-10 items-start">
        <Reveal className="lg:sticky lg:top-24">
          <div className="rounded-3xl border border-border bg-gradient-card p-8">
            <div className="font-display text-2xl">Still curious?</div>
            <p className="mt-3 text-sm text-muted-foreground">
              Reach out — we love hearing from citizens, partners and innovators.
            </p>
            <a
              href="/contact"
              className="mt-6 inline-flex rounded-lg bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-amber hover:opacity-90 transition"
            >
              Contact our team
            </a>
          </div>
        </Reveal>

        <div className="divide-y divide-border/60 rounded-2xl border border-border bg-background/40">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 60}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="w-full text-left p-6 flex items-start gap-4 group"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-xs text-primary mt-1.5">0{i + 1}</span>
                  <span className="flex-1">
                    <span className="block font-medium group-hover:text-primary transition-colors">
                      {f.q}
                    </span>
                    <span
                      className="grid transition-all duration-500 ease-out text-sm text-muted-foreground"
                      style={{
                        gridTemplateRows: isOpen ? "1fr" : "0fr",
                        opacity: isOpen ? 1 : 0,
                        marginTop: isOpen ? "0.75rem" : 0,
                      }}
                    >
                      <span className="overflow-hidden leading-relaxed">{f.a}</span>
                    </span>
                  </span>
                  <Plus
                    className={`h-5 w-5 text-primary shrink-0 transition-transform duration-500 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  />
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
