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

export const ProductsSHAARAVTurmericPowder = () => (

    <section className="section-screen bg-background">
      <div className="container-x grid items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-7 order-1 lg:order-1">
          <div className="relative">
            <div className="absolute -left-6 -top-6 hidden h-32 w-32 border border-primary/40 lg:block" />
              <Link to="/products/turmeric-powder" className="block overflow-hidden relative shadow-deep group">
                <img src={productTurmeric} alt="SHAARAV Turmeric Powder" className="h-[64vh] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </Link>
          </div>
        </div>
        <div className="lg:col-span-5 order-2 lg:order-2">
          <div className="flex items-center gap-4">
            <span className="font-display text-5xl text-primary">01</span>
            <span className="h-px flex-1 bg-border" />
            <span className="text-xs uppercase tracking-[0.3em] text-cocoa/55">Signature</span>
          </div>
          <h2 className="display-md mt-8 text-cocoa">SHAARAV Turmeric Powder</h2>
          <p className="mt-6 text-lg leading-relaxed text-cocoa/75">High-curcumin, deep-golden grind. Engineered for both retail visibility and ingredient performance.</p>
            <Link to="/products/turmeric-powder" className="mt-8 inline-flex items-center gap-2 text-primary hover:text-cocoa transition-colors font-medium">
              View Product Details <ArrowRight size={18} />
            </Link>
          <div className="mt-10 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-cocoa/55">
            <span className="h-px w-8 bg-primary" />
            <span>SHAARAV · Products</span>
          </div>
        </div>
      </div>
    </section>
);
