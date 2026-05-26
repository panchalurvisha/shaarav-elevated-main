import React from 'react';
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

// Images
import heroSpices from "@/assets/hero-spices-new.png";
import masalaBox from "@/assets/masala-box.jpg";
import productTurmeric from "@/assets/turmeric-bowl.png";
import productChili from "@/assets/chili-bowl.png";
import productCoriander from "@/assets/coriander-bowl.png";
import productGaram from "@/assets/garam-masala-bowl.png";
import farmerField from "@/assets/farmer-field-new.png";
import qualityLab from "@/assets/quality-lab-new.png";
import spiceMarket from "@/assets/market-spices-new.png";
import exportShip from "@/assets/export-ship-new.png";
import worldMap from "@/assets/world-map.jpg";
import mortar from "@/assets/mortar-new.png";
import macroTurmeric from "@/assets/premium-spices.png";
import macroChili from "@/assets/macro-chili-new.png";

export const ContactShaaravGlobalAddEXIMMumbai = () => (

    <section className="section-screen bg-background">
      <div className="container-x">
        <div className="grid items-end gap-10 border-b border-border pb-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-4">
              <span className="font-display text-5xl text-primary">03</span>
              <span className="text-xs uppercase tracking-[0.3em] text-cocoa/55">Location</span>
            </div>
            <h2 className="display-md mt-6 max-w-3xl text-cocoa">Shaarav Global Add EXIM, Mumbai.</h2>
          </div>
          <p className="text-lg leading-relaxed text-cocoa/70 lg:col-span-5">Office and coordination hub for sourcing, quality, and dispatch.</p>
        </div>
        <div className="mt-12 grid gap-px bg-border md:grid-cols-4">
          {[
            { t: "Origin", d: "India · multi-region sourcing" },
            { t: "Process", d: "Cleaned · low-heat ground" },
            { t: "Pack", d: "Retail · HoReCa · Bulk" },
            { t: "Standard", d: "Spec-locked, batch-traced" },
          ].map((b) => (
            <div key={b.t} className="bg-paper p-8">
              <div className="text-xs uppercase tracking-[0.3em] text-primary">{b.t}</div>
              <p className="mt-6 font-display text-xl leading-snug text-cocoa">{b.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
);
