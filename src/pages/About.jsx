import { useEffect } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { team } from "@/lib/team";
import { partners } from "@/lib/partners";
import { Handshake } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { FAQ } from "@/components/FAQ";

const objectives = [
  "Develop digital systems that solve real-life citizen problems",
  "Support small businesses through simple management tools",
  "Improve access to transportation and mobility information",
  "Enhance access to healthcare and essential services",
  "Create opportunities for youth through digital platforms",
  "Promote innovation and technology adoption in daily life",
];

export default function AboutPage() {
  useEffect(() => { document.title = "About — Inzira Technologies"; }, []);
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <section className="mx-auto max-w-7xl px-6 pt-20 pb-16 animate-fade-in">
        <div className="text-xs uppercase tracking-widest text-accent">About us</div>
        <h1 className="mt-3 font-display text-5xl md:text-7xl font-bold max-w-4xl leading-[0.95]">
          A youth-led studio building <span className="text-gradient">useful technology</span> for Africa.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          Inzira Technologies is a Rwandan organization founded by a team of young engineers,
          designers and builders committed to solving everyday challenges through software.
          We design platforms that are accessible, affordable and easy to use for every citizen —
          from the busy commuter to the small business owner.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 grid md:grid-cols-2 gap-6">
        <Reveal>
          <div className="rounded-3xl border border-border bg-gradient-card p-10 hover-scale h-full">
            <div className="text-xs uppercase tracking-widest text-primary">Vision</div>
            <p className="mt-3 font-display text-2xl leading-snug">
              To become a leading African technology organization that builds smart and accessible
              digital solutions improving everyday life.
            </p>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="rounded-3xl border border-border bg-gradient-card p-10 hover-scale h-full">
            <div className="text-xs uppercase tracking-widest text-accent">Mission</div>
            <p className="mt-3 font-display text-2xl leading-snug">
              To design and develop connected digital platforms that simplify daily experiences and
              empower citizens through technology and innovation.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <Reveal>
          <h2 className="font-display text-3xl md:text-4xl font-bold">Core objectives</h2>
        </Reveal>
        <div className="mt-8 grid md:grid-cols-2 gap-3">
          {objectives.map((o, i) => (
            <Reveal key={o} delay={i * 80}>
              <div className="flex gap-4 items-start rounded-xl border border-border/60 bg-background/40 p-5 transition-all hover:border-primary/50 hover:bg-secondary/30 duration-500">
                <div className="font-display text-sm text-primary mt-0.5">0{i + 1}</div>
                <p className="text-sm text-muted-foreground">{o}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <Reveal>
          <div className="text-xs uppercase tracking-widest text-accent">The team</div>
          <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold">Meet the innovators</h2>
          <p className="mt-3 text-muted-foreground max-w-2xl">
            A close-knit studio. Each role is owned by one person, and every product decision is shaped by the team together.
          </p>
        </Reveal>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map(({ name, role, focus, bio, icon: Icon, initials }, i) => (
            <Reveal key={name + role} delay={i * 100}>
              <div className="group rounded-2xl border border-border bg-gradient-card p-6 hover:border-primary/50 transition-all hover:-translate-y-1 hover:shadow-glow duration-500 h-full">
                <div className="flex items-center gap-4">
                  <div className="grid place-items-center h-14 w-14 rounded-xl bg-gradient-primary text-primary-foreground font-display font-bold shadow-amber transition-transform group-hover:rotate-3 group-hover:scale-110">
                    {initials}
                  </div>
                  <div>
                    <div className="font-semibold leading-tight">{name}</div>
                    <div className="text-xs text-primary mt-1 flex items-center gap-1.5">
                      <Icon className="h-3.5 w-3.5" /> {role}
                    </div>
                  </div>
                </div>
                <div className="mt-5 text-xs uppercase tracking-wider text-accent">Focus</div>
                <p className="text-sm mt-1">{focus}</p>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{bio}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <Reveal>
          <div className="flex items-center gap-3">
            <Handshake className="h-5 w-5 text-primary" />
            <div className="text-xs uppercase tracking-widest text-accent">Partners & ecosystem</div>
          </div>
          <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold max-w-3xl">
            Building alongside leaders in Rwanda and across Africa.
          </h2>
        </Reveal>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {partners.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.name + i} delay={i * 50}>
                <div className="group rounded-xl border border-border/60 bg-background/40 p-5 hover:border-primary/50 hover:bg-secondary/40 transition-all hover-scale h-full">
                  <div className="flex items-center gap-3">
                    <div className="grid place-items-center h-10 w-10 rounded-lg bg-gradient-primary text-primary-foreground shadow-amber group-hover:shadow-glow group-hover:rotate-6 transition-all duration-500">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="font-display font-semibold text-gradient leading-tight">{p.name}</div>
                  </div>
                  <div className="mt-3 text-xs text-muted-foreground">{p.sector}</div>
                  <div className="mt-1 text-[10px] uppercase tracking-wider text-accent">{p.region}</div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <FAQ />

      <SiteFooter />
    </div>
  );
}
