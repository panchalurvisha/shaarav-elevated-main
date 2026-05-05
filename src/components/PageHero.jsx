import { Link } from "react-router-dom";

export const PageHero = ({ eyebrow, title, subtitle, image }) => (
  <section className="section-screen bg-paper">
    <div className="absolute inset-0">
      <img src={image} alt="" className="h-full w-full object-cover" />
      <div className="absolute inset-0 bg-paper/80" />
    </div>
    <div className="container-x relative z-10 grid items-end gap-10 lg:grid-cols-12">
      <div className="lg:col-span-8 fade-up">
        <nav className="mb-8 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-cocoa/60">
          <Link to="/" className="hover:text-primary">SHAARAV</Link>
          <span>/</span>
          <span className="text-primary">{eyebrow}</span>
        </nav>
        <span className="eyebrow">{eyebrow}</span>
        <h1 className="display-xl mt-6 text-cocoa">{title}</h1>
        {subtitle && <p className="mt-8 max-w-2xl text-lg leading-relaxed text-cocoa/70 md:text-xl">{subtitle}</p>}
      </div>
      <div className="hidden lg:col-span-4 lg:block">
        <div className="border-l border-primary/40 pl-6">
          <div className="text-xs uppercase tracking-[0.3em] text-cocoa/60">Chapter</div>
          <div className="mt-3 font-display text-6xl text-primary">— I</div>
          <p className="mt-4 text-sm leading-relaxed text-cocoa/65">An editorial walk through Shaarav's premium spice practice — sourcing, science, and shelf craft.</p>
        </div>
      </div>
    </div>
    <div className="container-x relative z-10 mt-12 hidden md:block">
      <div className="flex items-center justify-between border-t border-cocoa/15 pt-5 text-xs uppercase tracking-[0.3em] text-cocoa/55">
        <span>Shaarav Global Ventures</span>
        <span>India · Origin</span>
        <span>Premium Editorial</span>
        <span>Vol. 26 · 2026</span>
      </div>
    </div>
  </section>
);
