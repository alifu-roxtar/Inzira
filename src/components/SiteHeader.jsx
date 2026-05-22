import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/ecosystem", label: "Ecosystem" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur-xl border-b transition-all duration-300 animate-fade-in ${
        scrolled
          ? "bg-background/85 border-border/70 shadow-elegant"
          : "bg-background/40 border-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <img src={logo} alt="Inzira Technologies" className="h-9 w-auto transition-transform group-hover:scale-110 group-hover:rotate-3" />
          <span className="font-display font-semibold tracking-tight hidden sm:inline">Inzira<span className="text-primary">.</span></span>
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className={({ isActive }) =>
                `relative px-4 py-2 text-sm rounded-md transition-colors story-link ${
                  isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="ml-3 px-4 py-2 text-sm font-medium rounded-md bg-gradient-primary text-primary-foreground hover:opacity-90 transition shadow-amber hover-scale"
          >
            Partner with us
          </Link>
        </nav>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border/50 px-6 py-4 flex flex-col gap-2 animate-fade-in">
          {links.map((l) => (
            <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="py-2 text-sm">
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
