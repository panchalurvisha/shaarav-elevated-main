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

export const Hero = () => (
  <section className="section-screen bg-paper">
    <div className="absolute inset-0 overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="h-full w-full object-cover scale-105"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-paper/70 backdrop-blur-[2px]" />
    </div>
    <div className="container-x relative z-10 grid items-center gap-10 lg:grid-cols-12">
      <div className="fade-up lg:col-span-7">
        <span className="eyebrow">Where Quality Meets Tradition</span>
        <h1 className="display-xl mt-5 max-w-4xl text-cocoa">Shaarav Global EXIM</h1>
        <h2 className="mt-4 font-display text-3xl text-cocoa">Pure Flavors. Global Reach</h2>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cocoa/75 md:text-xl">
          At Shaarav Global Venture, we believe that quality products are the soul of every kitchen. Founded with a vision to bring India’s rich legacy of products to every corner of the globe, we specialize in the export of premium spices, tea, coffee, and millets. With a strong commitment to purity, freshness, and authenticity, we source directly from trusted farmers and processing units to ensure that only the finest products reach our clients.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link to="/products" className="inline-flex items-center gap-2 bg-primary px-6 py-3 text-primary-foreground transition-colors hover:bg-cocoa">
            Explore Products <ArrowRight size={18} />
          </Link>
          <Link to="/contact" className="inline-flex items-center gap-2 border border-cocoa/20 bg-paper px-6 py-3 text-cocoa transition-colors hover:border-primary hover:text-primary">
            Request Quote
          </Link>
        </div>
      </div>
      <div className="mt-12 lg:mt-0 lg:col-span-5">
        <img src={masalaBox} alt="SHAARAV branded masala box packaging" className="mx-auto lg:ml-auto max-h-[50vh] lg:max-h-[68vh] w-full object-contain drop-shadow-2xl" />
      </div>
    </div>
  </section>
);
