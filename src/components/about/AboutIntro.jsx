import React from 'react';
import { Quote } from "lucide-react";

export const AboutIntro = () => (
  <section className="section-screen bg-paper">
    <div className="container-x grid gap-16 lg:grid-cols-12">
      <div className="lg:col-span-4">
        <span className="eyebrow">Manifesto</span>
        <h2 className="display-md mt-6 text-cocoa">In brief.</h2>
        <p className="mt-6 text-cocoa/65">A short orientation before the chapters.</p>
        <div className="mt-10 border-t border-border">
          {[{ "label": "Founded", "value": "India" }, { "label": "Focus", "value": "Premium Export" }, { "label": "Discipline", "value": "Sourcing · Process · Pack" }, { "label": "Audience", "value": "Retail · HoReCa · Bulk" }].map((m) => (
            <div key={m.label} className="flex items-baseline justify-between border-b border-border py-4">
              <span className="text-xs uppercase tracking-[0.3em] text-cocoa/55">{m.label}</span>
              <span className="font-display text-lg text-cocoa">{m.value}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="lg:col-span-8">
        <div className="border-l border-primary/40 pl-8">
          <Quote className="text-primary/60" size={36} />
          <p className="mt-8 font-display text-3xl leading-snug text-cocoa md:text-4xl">We treat our products the way fine houses treat wine and olive oil — with origin clarity, batch honesty, and packaging that respects the product inside.</p>
          <div className="mt-10 flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-cocoa/55">
            <span className="h-px w-10 bg-primary" />
            <span>Shaarav Editorial · About Shaarav</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);
