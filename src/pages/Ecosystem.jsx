import { useEffect } from "react";
import { Link } from "react-router-dom";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/ecosystem";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export default function EcosystemPage() {
  useEffect(() => { document.title = "Ecosystem — Inzira Technologies"; }, []);
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <section className="mx-auto max-w-7xl px-6 pt-20 pb-12 animate-fade-in">
        <div className="text-xs uppercase tracking-widest text-accent">The ecosystem</div>
        <h1 className="mt-3 font-display text-5xl md:text-7xl font-bold max-w-4xl leading-[0.95]">
          A connected family of products solving real problems.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Each platform stands on its own — and together they form a unified digital
          experience for transport, commerce, health, education and finance.
        </p>
      </section>
      <section className="mx-auto max-w-7xl px-6 pb-16 grid md:grid-cols-2 gap-6">
        {products.map((p, i) => (
          <Reveal key={p.slug} delay={i * 90}>
            <ProductCard product={p} featured={p.status === "flagship"} />
          </Reveal>
        ))}
      </section>
      <section className="mx-auto max-w-7xl px-6 py-16">
        <Reveal>
          <div className="rounded-3xl border border-border bg-gradient-card p-10 md:p-14">
            <h2 className="font-display text-3xl md:text-4xl font-bold max-w-2xl">Who we build for.</h2>
            <div className="mt-8 grid md:grid-cols-3 gap-6 text-sm">
              {[
                "General citizens in Rwanda",
                "Small and medium enterprises",
                "Students and young professionals",
                "Transport operators",
                "Healthcare providers",
                "Local communities & institutions",
              ].map((g, i) => (
                <Reveal key={g} delay={i * 70}>
                  <div className="rounded-xl border border-border/60 bg-background/40 p-5 hover:border-primary/50 transition-all hover-scale">
                    <span className="text-foreground">{g}</span>
                  </div>
                </Reveal>
              ))}
            </div>
            <Link to="/contact" className="group mt-10 inline-flex items-center gap-2 text-primary text-sm transition-all">
              Become a partner <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </section>
      <SiteFooter />
    </div>
  );
}
