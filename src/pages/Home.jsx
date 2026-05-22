import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, MapPin, Users2, Zap } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/ecosystem";
import { Typewriter } from "@/components/Typewriter";
import { LoadingScreen } from "@/components/LoadingScreen";
import { Reveal } from "@/components/Reveal";
import { FAQ } from "@/components/FAQ";

export default function HomePage() {
  const flagship = products[0];
  const rest = products.slice(1);

  useEffect(() => {
    document.title = "Inzira Technologies — Connected digital solutions for Rwanda";
  }, []);

  return (
    <div className="min-h-screen">
      <LoadingScreen />
      <SiteHeader />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
        <img
          src={heroImg}
          alt=""
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover opacity-30 mix-blend-luminosity animate-[hero-zoom_18s_ease-out_forwards]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background" />

        <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-32 md:pt-32 md:pb-40">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary animate-fade-in">
            <Sparkles className="h-3.5 w-3.5 animate-pulse" />
            Built in Rwanda · For Africa
          </div>
          <h1 className="mt-6 font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] max-w-5xl animate-fade-in">
            Technology that <span className="text-gradient">
              <Typewriter words={["moves", "connects", "empowers", "uplifts"]} />
            </span> everyday life.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed animate-fade-in" style={{ animationDelay: "200ms", animationFillMode: "both" }}>
            Inzira Technologies is a youth-led organization building a connected ecosystem of
            digital platforms — mobility, business, healthcare, learning and payments —
            designed to be simple, accessible and useful to every citizen.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "350ms", animationFillMode: "both" }}>
            <Link to="/ecosystem" className="group inline-flex items-center gap-2 rounded-lg bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-amber hover:opacity-90 transition hover-scale">
              Explore the ecosystem <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link to="/about" className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary/50 px-6 py-3 text-sm font-semibold hover:bg-secondary transition">
              Our mission
            </Link>
          </div>

          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl">
            {[
              { k: "5", l: "Connected products" },
              { k: "6", l: "Innovators" },
              { k: "3", l: "Growth phases" },
              { k: "1", l: "Ecosystem" },
            ].map((s, i) => (
              <Reveal key={s.l} delay={i * 100}>
                <div className="font-display text-4xl md:text-5xl font-bold text-gradient">{s.k}</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.l}</div>
              </Reveal>
            ))}
          </div>
        </div>
        <style>{`@keyframes hero-zoom { from { transform: scale(1.08); } to { transform: scale(1); } }`}</style>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16">
          <Reveal>
            <div className="text-xs uppercase tracking-widest text-accent">The problem</div>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold">
              Everyday services in Rwanda are still hard to access.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Citizens lose time to unpredictable transport, small businesses lack digital tools,
              youth struggle to find opportunities, and healthcare information remains fragmented.
              The result: wasted hours, slower growth, and missed potential.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="rounded-3xl border border-border bg-gradient-card p-10 transition-all hover:shadow-glow hover:-translate-y-1 duration-500">
              <div className="text-xs uppercase tracking-widest text-primary">Our vision</div>
              <p className="mt-3 font-display text-2xl md:text-3xl leading-tight">
                To become a leading African technology organization building smart, accessible
                digital solutions that improve everyday life for citizens and communities.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-4 text-sm">
                {[
                  { icon: Zap, label: "Practical" },
                  { icon: Users2, label: "Accessible" },
                  { icon: MapPin, label: "Local" },
                ].map(({ icon: I, label }) => (
                  <div key={label} className="rounded-xl border border-border/50 bg-background/40 p-4 text-center hover-scale">
                    <I className="mx-auto h-5 w-5 text-primary" />
                    <div className="mt-2 text-xs text-muted-foreground">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 items-stretch">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-card p-10 md:p-14 shadow-elegant h-full">
              <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-primary/20 blur-3xl animate-pulse" />
              <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-accent/20 blur-3xl" />
              <div className="relative">
                <div className="text-xs uppercase tracking-widest text-accent">First launch</div>
                <h2 className="mt-3 font-display text-5xl md:text-6xl font-bold">InziraMove</h2>
                <p className="mt-3 text-xl text-primary/90">Smart mobility for everyday journeys.</p>
                <p className="mt-6 text-muted-foreground max-w-xl leading-relaxed">
                  The first product launched under Inzira Technologies. InziraMove helps students,
                  workers and commuters access transport route information, reduce waiting time, and
                  receive real-time travel updates — making daily movement simpler for everyone.
                </p>
                <ul className="mt-8 grid sm:grid-cols-2 gap-3 text-sm">
                  {["Live route information", "Reduced waiting time", "Travel updates & guidance", "Built for daily commuters"].map((f, i) => (
                    <li key={f} className="flex items-center gap-2 text-muted-foreground animate-fade-in" style={{ animationDelay: `${i*100}ms`, animationFillMode: "both" }}>
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" /> {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <ProductCard product={flagship} featured />
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <Reveal>
          <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
            <div>
              <div className="text-xs uppercase tracking-widest text-accent">The ecosystem</div>
              <h2 className="mt-2 text-4xl md:text-5xl font-bold max-w-2xl">
                One organization. Five connected platforms.
              </h2>
            </div>
            <Link to="/ecosystem" className="group inline-flex items-center gap-2 text-sm text-primary transition-all">
              See all <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {rest.map((p, i) => (
            <Reveal key={p.slug} delay={i * 90}>
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <Reveal>
          <div className="text-xs uppercase tracking-widest text-accent">Implementation strategy</div>
          <h2 className="mt-2 text-4xl md:text-5xl font-bold max-w-3xl">
            A phased path from foundation to ecosystem.
          </h2>
        </Reveal>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {[
            { n: "01", t: "Foundation", d: "Build the core team, ship the InziraMove MVP, run local testing and establish brand presence." },
            { n: "02", t: "Expansion", d: "Scale InziraMove, launch InziraBiz and InziraLearn, build local partnerships." },
            { n: "03", t: "Ecosystem", d: "Integrate every service into one connected platform with AI-powered features, then expand across Africa." },
          ].map((p, i) => (
            <Reveal key={p.n} delay={i * 120}>
              <div className="relative rounded-2xl border border-border bg-gradient-card p-8 h-full transition-all hover:border-primary/50 hover:-translate-y-1 hover:shadow-glow duration-500">
                <div className="font-display text-6xl font-bold text-primary/30">{p.n}</div>
                <h3 className="mt-4 text-2xl font-semibold">{p.t}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <FAQ />

      <section className="mx-auto max-w-7xl px-6 py-16">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-primary p-12 md:p-16 text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground max-w-3xl mx-auto">
              Let's build the digital future of Africa — together.
            </h2>
            <p className="mt-4 text-primary-foreground/80 max-w-xl mx-auto">
              Partner with Inzira Technologies on transport, business, healthcare or education initiatives.
            </p>
            <Link to="/contact" className="group mt-8 inline-flex items-center gap-2 rounded-lg bg-background/95 px-6 py-3 text-sm font-semibold text-foreground hover:bg-background transition hover-scale">
              Get in touch <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </section>

      <SiteFooter />
    </div>
  );
}
