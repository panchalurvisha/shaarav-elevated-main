import React from 'react';
import { ArrowRight, CheckCircle2, Globe2, Leaf, PackageCheck, ShieldCheck, Sparkles, Truck } from "lucide-react";
import { Link } from "react-router-dom";
import { ProductCarousel } from "@/components/ProductCarousel";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { products as catalogProducts } from "@/lib/products";

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
import heroVideo from "@/assets/12351626_3840_2160_30fps.mp4";

const stats = ["1,500 + Happy Customers", "4 + years Years of Experience", "500 + Total Projects", "100% Export Quality"];
const steps = ["Farm selection", "Cleaning", "Low-heat grinding", "Metal detection", "Aroma locking", "Export packing"];
const testimonials = [
  { quote: "Shaarav has completely transformed our spice supply chain...", author: "Elena R.", role: "Procurement Director", company: "EuroFoods" },
  { quote: "Their export documentation and logistics readiness are simply top-tier...", author: "Michael T.", role: "Head of Operations", company: "Global Spice Co." },
  { quote: "The private label service they offer is remarkably seamless...", author: "Aisha M.", role: "Founder", company: "Pure Flavours" },
  { quote: "Finding a partner who understands the nuances of regional spice blends is rare...", author: "Rajiv S.", role: "Supply Chain Manager", company: "Desi Eats Inc." },
  { quote: "The traceability from farm to export carton gives us complete confidence...", author: "Sarah J.", role: "Quality Assurance Lead", company: "Organic Provisions" },
  { quote: "Shaarav’s apothecary jar packaging elevated our store shelves instantly...", author: "Marcus L.", role: "Retail Director", company: "Artisan Grocers UK" }
];

export const ShaaravPack = () => (
<section className="section-screen bg-paper">
      <div className="container-x grid items-center gap-16 lg:grid-cols-12">
        <div className="relative lg:col-span-6">
          <div className="absolute -left-6 -top-6 hidden h-40 w-40 border border-primary/30 lg:block" />
          <div className="absolute -bottom-6 -right-6 hidden h-40 w-40 bg-surface lg:block" />
          <div className="relative bg-surface p-6 shadow-deep">
            <img src={masalaBox} alt="SHAARAV masala box with visible brand name" className="max-h-[64vh] w-full object-contain" />
            <div className="mt-4 flex items-center justify-between border-t border-border pt-4 text-xs uppercase tracking-[0.25em] text-cocoa/60">
              <span>SHAARAV · Est. India</span>
              <span>Edition No. 014</span>
            </div>
          </div>
        </div>
        <div className="lg:col-span-6">
          <span className="eyebrow">The SHAARAV Pack</span>
          <h2 className="display-lg mt-5 text-cocoa">Packaging that earns its place on premium shelves.</h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-cocoa/75">
            Heritage-grade cartons, soft-touch pouches, and apothecary jars — each piece carries the SHAARAV mark with quiet confidence, built for retail floors, fine grocers, and bulk distribution.
          </p>
          <div className="mt-10 grid gap-px bg-border sm:grid-cols-2">
            {[
              { k: "01", t: "Heritage Cartons", d: "Rigid board, foil-stamped SHAARAV mark." },
              { k: "02", t: "Aroma-Lock Pouches", d: "Triple-layer barrier, resealable seam." },
              { k: "03", t: "Apothecary Jars", d: "Glass with cork-finish closure." },
              { k: "04", t: "Bulk Sacks", d: "Multi-wall kraft bags and bulk containers." },
            ].map((i) => (
              <div key={i.k} className="bg-paper p-6">
                <div className="flex items-baseline gap-3">
                  <span className="font-display text-2xl text-primary">{i.k}</span>
                  <h3 className="font-display text-xl text-cocoa">{i.t}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-cocoa/65">{i.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.25em] text-cocoa/60">
            <PackageCheck className="text-primary shrink-0" size={18} />
            <span>FSSAI · APEDA · Spices Board India</span>
          </div>
        </div>
      </div>
    </section>
);
