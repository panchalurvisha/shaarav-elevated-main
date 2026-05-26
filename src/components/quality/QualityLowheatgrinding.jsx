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

export const QualityLowheatgrinding = () => (

    <section className="section-screen bg-background">
      <div className="container-x grid items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-7 order-1 lg:order-1">
          <div className="relative">
            <div className="absolute -left-6 -top-6 hidden h-32 w-32 border border-primary/40 lg:block" />
              <img src={macroChili} alt="Low-heat grinding" className="relative h-[64vh] w-full object-cover shadow-deep" />
          </div>
        </div>
        <div className="lg:col-span-5 order-2 lg:order-2">
          <div className="flex items-center gap-4">
            <span className="font-display text-5xl text-primary">03</span>
            <span className="h-px flex-1 bg-border" />
            <span className="text-xs uppercase tracking-[0.3em] text-cocoa/55">03</span>
          </div>
          <h2 className="display-md mt-8 text-cocoa">Low-heat grinding</h2>
          <p className="mt-6 text-lg leading-relaxed text-cocoa/75">Controlled grinding protects volatile aromas and natural colour value.</p>
          <div className="mt-10 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-cocoa/55">
            <span className="h-px w-8 bg-primary" />
            <span>SHAARAV · Quality</span>
          </div>
        </div>
      </div>
    </section>
);
