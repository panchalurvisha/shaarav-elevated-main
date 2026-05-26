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

export const PremiumRange = () => (
<section className="section-screen bg-paper">
      <div className="container-x">
        <div className="mb-12">
          <span className="eyebrow">Our Products</span>
          <h2 className="display-lg mt-5 text-cocoa">Premium Range</h2>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="bg-surface p-8 shadow-soft">
            <h3 className="font-display text-2xl text-cocoa mb-4">Whole Spices</h3>
            <p className="leading-relaxed text-cocoa/75">
              Whole spices are the soul of traditional cooking — unprocessed, unadulterated, and packed with intense aroma and natural oils. At Shaarav Global Venture, we offer a premium range of whole spices like black pepper, cumin seeds, cloves, cardamom, bay leaves, and more, handpicked from trusted farms and packed to preserve freshness.
            </p>
          </div>
          <div className="bg-surface p-8 shadow-soft">
            <h3 className="font-display text-2xl text-cocoa mb-4">Powder Spices</h3>
            <p className="leading-relaxed text-cocoa/75">
              Our powdered spices are finely ground to perfection, capturing the bold aroma, vibrant color, and rich taste of India’s finest spice crops. Whether it’s turmeric, red chili, coriander, or spice blends, each batch is processed under strict hygiene and quality standards to ensure purity and consistency.
            </p>
          </div>
          <div className="bg-surface p-8 shadow-soft">
            <h3 className="font-display text-2xl text-cocoa mb-4">Tea & Coffee</h3>
            <p className="leading-relaxed text-cocoa/75">
              Our premium teas are handpicked from the lush plantations of India, offering rich aroma, natural freshness, and calming flavors. Whether you crave the soothing touch of green tea or the bold essence of Assam, every cup brings you closer to nature’s comfort.
            </p>
          </div>
        </div>
      </div>
    </section>
);
