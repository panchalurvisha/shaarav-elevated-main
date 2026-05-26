import React from 'react';
import { Quote } from "lucide-react";

export const QualityIntro = () => (
  <section className="section-screen bg-paper">
    <div className="container-x grid gap-16 lg:grid-cols-12">
      <div className="lg:col-span-4">
        <span className="eyebrow">The Standard</span>
        <h2 className="display-md mt-6 text-cocoa">In brief.</h2>
        <p className="mt-6 text-cocoa/65">A short orientation before the chapters.</p>
        <div className="mt-10 border-t border-border">
          {[{"label":"Checks per batch","value":"31"},{"label":"Traceability","value":"100%"},{"label":"Lab parameters","value":"Moisture · Colour · Mesh · Aroma"},{"label":"Pack QC","value":"Seal · Weight · Label"}].map((m) => (
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
          <p className="mt-8 font-display text-3xl leading-snug text-cocoa md:text-4xl">Quality is not a final inspection — it is a sequence of small, disciplined decisions made from procurement to packaging.</p>
          <div className="mt-10 flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-cocoa/55">
            <span className="h-px w-10 bg-primary" />
            <span>Shaarav Editorial · Quality</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);
