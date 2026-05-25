import { ArrowRight, CheckCircle2, Globe2, Leaf, PackageCheck, ShieldCheck, Sparkles, Truck } from "lucide-react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import heroSpices from "@/assets/hero-spices.jpg";
import masalaBox from "@/assets/masala-box.jpg";
import productTurmeric from "@/assets/product-turmeric.jpg";
import productChili from "@/assets/product-chili.jpg";
import productCoriander from "@/assets/product-coriander.jpg";
import productGaram from "@/assets/product-garam.jpg";
import farmerField from "@/assets/farmer-field.jpg";
import qualityLab from "@/assets/quality-lab.jpg";
import spiceMarket from "@/assets/spice-market.jpg";
import exportShip from "@/assets/export-ship.jpg";
import worldMap from "@/assets/world-map.jpg";
import mortar from "@/assets/mortar.jpg";
import macroTurmeric from "@/assets/macro-turmeric.jpg";
import macroChili from "@/assets/macro-chili.jpg";

import { ProductCarousel } from "@/components/ProductCarousel";
import { products as catalogProducts } from "@/lib/products";

const stats = ["1,500 + Happy Customers", "4 + years Years of Experience", "500 + Total Projects", "100% Export Quality"];
const steps = ["Farm selection", "Cleaning", "Low-heat grinding", "Metal detection", "Aroma locking", "Export packing"];

const testimonials = [
  {
    quote: "Shaarav has completely transformed our spice supply chain. The consistency in aroma, colour, and overall quality across every single batch is exactly what our premium retail brand demanded.",
    author: "Elena R.",
    role: "Procurement Director",
    company: "EuroFoods"
  },
  {
    quote: "Their export documentation and logistics readiness are simply top-tier. Shipments arrive on time with impeccable packaging, making customs and distribution a breeze.",
    author: "Michael T.",
    role: "Head of Operations",
    company: "Global Spice Co."
  },
  {
    quote: "The private label service they offer is remarkably seamless. We successfully launched our premium masala line in record time, thanks to their dedicated end-to-end support.",
    author: "Aisha M.",
    role: "Founder",
    company: "Pure Flavours"
  },
  {
    quote: "Finding a partner who understands the nuances of regional spice blends is rare. Shaarav nailed our custom requirements perfectly on the first try.",
    author: "Rajiv S.",
    role: "Supply Chain Manager",
    company: "Desi Eats Inc."
  },
  {
    quote: "The traceability from farm to export carton gives us complete confidence. It's the level of transparency we need for our modern, health-conscious consumers.",
    author: "Sarah J.",
    role: "Quality Assurance Lead",
    company: "Organic Provisions"
  },
  {
    quote: "Shaarav’s apothecary jar packaging elevated our store shelves instantly. Beautiful presentation matching incredible flavor depth.",
    author: "Marcus L.",
    role: "Retail Director",
    company: "Artisan Grocers UK"
  }
];

const Index = () => (
  <Layout>
    <section className="section-screen bg-paper">
      <div className="absolute inset-0">
        <img src={heroSpices} alt="Premium Indian spices arranged for Shaarav Global Add EXIM" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-paper/70" />
      </div>
      <div className="container-x relative z-10 grid items-center gap-10 lg:grid-cols-12">
        <div className="fade-up lg:col-span-7">
          <span className="eyebrow">Where Quality Meets Tradition</span>
          <h1 className="display-xl mt-5 max-w-4xl text-cocoa">Shaarav Global Add EXIM</h1>
          <h2 className="mt-4 font-display text-3xl text-cocoa">Pure Flavors. Global Reach</h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cocoa/75 md:text-xl">
            At Shaarav Global Venture, we believe that quality spices are the soul of every kitchen. Founded with a vision to bring India’s rich legacy of spices to every corner of the globe, we specialize in the export of premium whole and powdered spices. With a strong commitment to purity, freshness, and authenticity, we source directly from trusted farmers and processing units to ensure that only the finest products reach our clients.
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
        <div className="hidden lg:col-span-5 lg:block">
          <img src={masalaBox} alt="SHAARAV branded masala box packaging" className="ml-auto max-h-[68vh] w-full object-contain drop-shadow-2xl" />
        </div>
      </div>
    </section>

    <section className="section-screen bg-background">
      <div className="container-x grid items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <span className="eyebrow">Our Mission</span>
          <h2 className="display-lg mt-5 text-cocoa">To deliver the authentic taste of India to kitchens across the globe by exporting high-quality whole and powdered spices.</h2>
        </div>
        <div className="lg:col-span-7">
          <p className="text-2xl leading-relaxed text-cocoa/80">
            We are committed to maintaining the highest standards of purity, freshness, and ethical sourcing — empowering local farmers, delighting global consumers, and building lasting business relationships.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {stats.map((item) => <div key={item} className="border-l-2 border-primary bg-paper p-5 text-xl font-medium text-cocoa shadow-soft">{item}</div>)}
          </div>
        </div>
      </div>
    </section>

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

    <section className="section-screen bg-surface">
      <div className="container-x">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div><span className="eyebrow">Catalogue</span><h2 className="display-md mt-4 text-cocoa">Signature SHAARAV range</h2></div>
          <Link to="/products" className="inline-flex items-center gap-2 text-primary hover:text-cocoa">Full catalogue <ArrowRight size={18} /></Link>
        </div>
        <ProductCarousel products={catalogProducts} />
      </div>
    </section>

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
            Heritage-grade cartons, soft-touch pouches, and apothecary jars — each piece carries the SHAARAV mark with quiet confidence, built for retail floors, fine grocers, and discerning private-label houses.
          </p>
          <div className="mt-10 grid gap-px bg-border sm:grid-cols-2">
            {[
              { k: "01", t: "Heritage Cartons", d: "Rigid board, foil-stamped SHAARAV mark." },
              { k: "02", t: "Aroma-Lock Pouches", d: "Triple-layer barrier, resealable seam." },
              { k: "03", t: "Apothecary Jars", d: "Glass with cork-finish closure." },
              { k: "04", t: "Private Label", d: "Full artwork & SKU adaptation service." },
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
          <div className="mt-8 flex items-center gap-4 text-xs uppercase tracking-[0.25em] text-cocoa/60">
            <PackageCheck className="text-primary" size={18} />
            <span>FSSAI · APEDA · Spices Board India</span>
          </div>
        </div>
      </div>
    </section>

    <section className="section-screen bg-background">
      <div className="container-x grid items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5"><span className="eyebrow">Sourcing</span><h2 className="display-lg mt-5 text-cocoa">Closer to fields, cleaner in flavour.</h2><p className="mt-6 text-lg leading-relaxed text-cocoa/70">We work across spice-growing regions to secure freshness, aroma, and colour before processing begins.</p></div>
        <div className="lg:col-span-7"><img src={farmerField} alt="Farm sourcing for Shaarav spices" className="h-[68vh] w-full object-cover shadow-deep" /></div>
      </div>
    </section>

    <section className="section-screen bg-surface">
      <div className="container-x grid items-center gap-10 lg:grid-cols-2">
        <img src={qualityLab} alt="Quality lab testing for Shaarav spice batches" className="h-[68vh] w-full object-cover shadow-deep" />
        <div><span className="eyebrow">Quality First</span><h2 className="display-lg mt-5 text-cocoa">Every batch earns its shipment.</h2><p className="mt-6 text-lg leading-relaxed text-cocoa/75">Moisture, colour value, mesh size, volatile oil, impurities, packaging strength, and documentation are checked before dispatch.</p><div className="mt-8 space-y-3">{["Batch traceability", "Lab-backed parameters", "Hygienic handling", "Buyer-specific specs"].map((x) => <div key={x} className="flex gap-3"><ShieldCheck className="mt-1 text-primary" size={20} /><span className="text-cocoa/80">{x}</span></div>)}</div></div>
      </div>
    </section>

    <section className="section-screen bg-paper">
      <div className="container-x">
        <span className="eyebrow">Process</span><h2 className="display-md mt-5 max-w-3xl text-cocoa">A controlled route from raw spice to export carton.</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-6">
          {steps.map((step, i) => <div key={step} className="min-h-40 border border-border bg-background p-5"><div className="text-sm text-primary">0{i + 1}</div><h3 className="mt-6 font-display text-2xl text-cocoa">{step}</h3></div>)}
        </div>
      </div>
    </section>

    <section className="section-screen bg-background">
      <div className="container-x grid items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-6"><img src={worldMap} alt="World map showing Shaarav export reach" className="w-full object-contain" /></div>
        <div className="lg:col-span-6"><span className="eyebrow">Export Network</span><h2 className="display-lg mt-5 text-cocoa">Prepared for global trade desks.</h2><p className="mt-6 text-lg leading-relaxed text-cocoa/75">Consolidated shipments, buyer documentation, country-wise labels, and repeatable supply plans for importers and distributors.</p><div className="mt-8 flex flex-wrap gap-3">{["Middle East", "Europe", "Africa", "North America", "APAC"].map((x) => <span key={x} className="border border-border bg-paper px-4 py-2 text-cocoa/80">{x}</span>)}</div></div>
      </div>
    </section>

    <section className="section-screen bg-surface">
      <div className="container-x grid items-center gap-10 lg:grid-cols-3">
        <div><span className="eyebrow">Sensory Depth</span><h2 className="display-md mt-5 text-cocoa">Colour, aroma, grind, and freshness made visible.</h2></div>
        {[macroTurmeric, macroChili].map((img, i) => <img key={img} src={img} alt={i === 0 ? "Macro turmeric texture" : "Macro red chilli texture"} className="h-[62vh] w-full object-cover shadow-soft" />)}
      </div>
    </section>

    <section className="section-screen bg-paper">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2">
        <div><span className="eyebrow">Private Label</span><h2 className="display-lg mt-5 text-cocoa">Your market, our spice backbone.</h2><p className="mt-6 text-lg leading-relaxed text-cocoa/75">From masala blends to single-origin powders, Shaarav can support label adaptation, pack sizing, cartons, and SKU planning.</p></div>
        <img src={mortar} alt="Indian spices in mortar and pestle" className="h-[68vh] w-full object-cover shadow-deep" />
      </div>
    </section>

    <section className="section-screen bg-background">
      <div className="container-x grid items-center gap-10 lg:grid-cols-12">
        <div className="lg:col-span-7"><img src={spiceMarket} alt="Indian spice market sourcing scene" className="h-[68vh] w-full object-cover shadow-deep" /></div>
        <div className="lg:col-span-5"><span className="eyebrow">Market Intelligence</span><h2 className="display-lg mt-5 text-cocoa">Sourcing that understands seasonal movement.</h2><p className="mt-6 text-lg leading-relaxed text-cocoa/75">Our procurement decisions consider crop cycles, colour stability, aroma retention, and buyer price bands.</p></div>
      </div>
    </section>

    <section className="section-screen bg-surface">
      <div className="container-x grid gap-8 md:grid-cols-3">
        {[{ icon: Leaf, title: "Responsible sourcing", text: "Preference for farm partners, cleaner handling, and reduced waste." }, { icon: Sparkles, title: "Premium finish", text: "Packaging, imagery, and labels built to look sharp on shelf." }, { icon: Globe2, title: "Export ready", text: "Documentation and carton discipline for international buyers." }].map(({ icon: Icon, title, text }) => <article key={title} className="bg-paper p-8 shadow-soft"><Icon className="text-primary" size={32} /><h3 className="mt-8 font-display text-3xl text-cocoa">{title}</h3><p className="mt-4 leading-relaxed text-cocoa/70">{text}</p></article>)}
      </div>
    </section>

    <section className="section-screen bg-paper">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2">
        <div><span className="eyebrow">Logistics</span><h2 className="display-lg mt-5 text-cocoa">From Indian ports to global warehouses.</h2><p className="mt-6 text-lg leading-relaxed text-cocoa/75">Ocean and air shipments are packed with attention to moisture, transit strength, pallet planning, and documentation.</p><div className="mt-8 flex gap-4"><Truck className="text-primary" /><span className="text-cocoa/80">FOB, CIF, sample dispatch, and container consolidation support.</span></div></div>
        <img src={exportShip} alt="Export ship carrying Shaarav spice shipments" className="h-[68vh] w-full object-cover shadow-deep" />
      </div>
    </section>

    <section className="section-screen bg-cocoa text-paper">
      <div className="container-x text-center">
        <span className="eyebrow text-primary">Buyer Confidence</span>
        <h2 className="display-lg mx-auto mt-5 max-w-4xl text-paper">A premium spice partner for importers, retailers, and food brands.</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {["Clean labels", "Custom blends", "Retail packs", "Bulk cartons"].map((x) => <div key={x} className="border border-paper/15 p-6"><CheckCircle2 className="mx-auto text-primary" /><p className="mt-4 text-paper/80">{x}</p></div>)}
        </div>
      </div>
    </section>

    <section className="section-screen bg-surface">
      <div className="container-x">
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="eyebrow">Client Voices</span>
            <h2 className="display-md mt-3 text-cocoa whitespace-nowrap">Trusted by global food businesses.</h2>
          </div>
          <p className="hidden md:block text-sm text-cocoa/50 max-w-xs text-right">Drag or hover to scroll · auto-scrolls on its own</p>
        </div>
      </div>
      <div className="w-full px-6 md:px-10">
        <TestimonialCarousel testimonials={testimonials} />
      </div>
    </section>

    <section className="section-screen bg-background">
      <div className="container-x grid items-center gap-10 lg:grid-cols-12">
        <div className="lg:col-span-8"><span className="eyebrow">GEt in Touch</span><h2 className="display-lg mt-5 text-cocoa">Rooted in India, Reaching the World.</h2></div>
        <div className="lg:col-span-4"><Link to="/contact" className="inline-flex w-full items-center justify-center gap-3 bg-primary px-8 py-5 text-lg text-primary-foreground transition-colors hover:bg-cocoa">Get in Touch <ArrowRight /></Link></div>
      </div>
    </section>
  </Layout>
);

export default Index;
