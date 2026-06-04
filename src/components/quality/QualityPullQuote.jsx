import React from 'react';
import { Quote } from "lucide-react";

import heroSpices from "@/assets/hero-spices-new.png";
import masalaBox from "@/assets/masala-box.jpg";
import farmerField from "@/assets/farmer-field-new.png";
import qualityLab from "@/assets/quality-lab-new.png";
import spiceMarket from "@/assets/market-spices-new.png";
import exportShip from "@/assets/export-ship-new.png";
import worldMap from "@/assets/world-map.jpg";

export const QualityPullQuote = () => (
  <section className="section-screen bg-cocoa text-paper">
    <div className="absolute inset-0 opacity-20">
      <img src={qualityLab} alt="" className="h-full w-full object-cover" />
    </div>
    <div className="container-x relative z-10 text-center">
      <Quote className="mx-auto text-primary" size={40} />
      <p className="mx-auto mt-10 max-w-4xl font-display text-3xl leading-snug text-paper md:text-5xl">
        "Quality earns the next order. Every shipment is built as if the buyer is auditing it personally."
      </p>
      <div className="mt-10 text-xs uppercase tracking-[0.3em] text-paper/60">Shaarav Global EXIM</div>
    </div>
  </section>
);
