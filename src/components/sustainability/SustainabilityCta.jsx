import React from 'react';
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

export const SustainabilityCta = () => (
  <section className="section-screen bg-background">
    <div className="container-x grid items-center gap-10 lg:grid-cols-12">
      <div className="lg:col-span-8">
        <span className="eyebrow">Next Step</span>
        <h2 className="display-lg mt-6 text-cocoa">Ready to source premium Indian spice?</h2>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cocoa/70">Share spice, grade, pack format, and destination — the Shaarav trade desk will respond with feasibility, sample plan, and a quote.</p>
      </div>
      <div className="lg:col-span-4">
        <Link to="/contact" className="inline-flex w-full items-center justify-center gap-3 bg-primary px-8 py-6 text-lg text-primary-foreground transition-colors hover:bg-cocoa">
          Request Quote <ArrowRight />
        </Link>
        <div className="mt-6 flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-cocoa/55">
          <CheckCircle2 className="text-primary" size={16} /> Reply within 24h (Mon–Sat)
        </div>
      </div>
    </div>
  </section>
);
