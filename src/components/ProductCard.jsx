const statusLabels = {
  flagship: "Flagship · launching",
  live: "Live",
  building: "In development",
  soon: "Coming soon",
};

export function ProductCard({ product, featured = false }) {
  const Icon = product.icon;
  return (
    <article
      className={`group relative overflow-hidden rounded-2xl border border-border bg-gradient-card p-6 transition-all duration-500 hover:border-primary/50 hover:-translate-y-1 hover:shadow-glow ${
        featured ? "md:p-8 ring-1 ring-primary/30 shadow-glow" : ""
      }`}
    >
      <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-primary/10 blur-3xl group-hover:bg-primary/30 transition-all duration-700" />
      <div className="relative">
        <div className="flex items-center justify-between">
          <div className={`grid place-items-center rounded-xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 ${featured ? "h-14 w-14 bg-gradient-primary shadow-amber" : "h-12 w-12 bg-secondary"}`}>
            <Icon className={featured ? "h-7 w-7 text-primary-foreground" : "h-6 w-6 text-primary"} />
          </div>
          <span className="text-xs uppercase tracking-wider text-accent">{statusLabels[product.status]}</span>
        </div>
        <h3 className={`mt-5 font-display font-semibold ${featured ? "text-2xl" : "text-xl"}`}>{product.name}</h3>
        <p className="mt-1 text-sm text-primary/90">{product.tagline}</p>
        <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{product.description}</p>
      </div>
    </article>
  );
}
