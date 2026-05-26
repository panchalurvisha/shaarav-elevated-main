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

export const BuyerConfidence = () => (
<section className="section-screen bg-cocoa text-paper">
      <div className="container-x text-center">
        <span className="eyebrow text-primary">Buyer Confidence</span>
        <h2 className="display-lg mx-auto mt-5 max-w-4xl text-paper">A premium spice partner for importers, retailers, and food brands.</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {["Clean labels", "Custom blends", "Retail packs", "Bulk cartons"].map((x) => <div key={x} className="border border-paper/15 p-6"><CheckCircle2 className="mx-auto text-primary" /><p className="mt-4 text-paper/80">{x}</p></div>)}
        </div>
      </div>
    </section>
);
