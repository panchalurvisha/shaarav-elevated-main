import React from 'react';
import { Quote } from "lucide-react";

import heroSpices from "@/assets/hero-spices-new.png";

export const AboutPullQuote = () => (
  <section className="section-screen bg-cocoa text-paper relative">
    <div className="absolute inset-0 opacity-20">
      <img src={heroSpices} alt="" className="h-full w-full object-cover" />
    </div>
    <div className="container-x relative z-10 text-center">
      <Quote className="mx-auto text-primary" size={40} />
      <p className="mx-auto mt-10 max-w-4xl font-display text-3xl leading-snug text-paper md:text-5xl">
        "Whether we are structuring a generational wealth succession plan or securing a cross-border supply chain, the core objective remains identical: absolute precision, transparent governance, and sustainable value creation."
      </p>
      <div className="mt-10 text-xs uppercase tracking-[0.3em] text-paper/60">Shrruti Mehta Jobanputra</div>
    </div>
  </section>
);
