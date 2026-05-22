import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/50 mt-32">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-4 animate-fade-in">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Inzira Technologies" className="h-10 w-auto" />
            <span className="font-display font-semibold">Inzira Technologies</span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-sm">
            A youth-led Rwandan technology company building a connected ecosystem of
            practical digital solutions for everyday life.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3">Ecosystem</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="hover:text-primary transition-colors cursor-default">InziraMove</li>
            <li className="hover:text-primary transition-colors cursor-default">InziraBiz</li>
            <li className="hover:text-primary transition-colors cursor-default">InziraHealth</li>
            <li className="hover:text-primary transition-colors cursor-default">InziraLearn</li>
            <li className="hover:text-primary transition-colors cursor-default">InziraPay <span className="text-xs text-accent">soon</span></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-foreground story-link">About</Link></li>
            <li><Link to="/ecosystem" className="hover:text-foreground story-link">Ecosystem</Link></li>
            <li><Link to="/contact" className="hover:text-foreground story-link">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/50 py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Inzira Technologies — Kigali, Rwanda
      </div>
    </footer>
  );
}
