import { ArrowRight, CheckCircle2, Globe2, Leaf, PackageCheck, ShieldCheck, Sparkles, Truck } from "lucide-react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
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

const products = [
  { name: "SHAARAV Turmeric Powder", image: productTurmeric, note: "High-curcumin golden powder" },
  { name: "SHAARAV Red Chilli", image: productChili, note: "Deep colour, clean heat" },
  { name: "SHAARAV Coriander", image: productCoriander, note: "Citrus-green aroma" },
  { name: "SHAARAV Garam Masala", image: productGaram, note: "Balanced house blend" },
];

const stats = ["42+ source clusters", "31 quality checks", "18 export lanes", "100% batch traceability"];
const steps = ["Farm selection", "Cleaning", "Low-heat grinding", "Metal detection", "Aroma locking", "Export packing"];

const Index = () => (
  <Layout>
    <section className="section-screen bg-paper">
      <div className="absolute inset-0">
        <img src={heroSpices} alt="Premium Indian spices arranged for Shaarav Global Ventures" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-paper/70" />
      </div>
      <div className="container-x relative z-10 grid items-center gap-10 lg:grid-cols-12">
        <div className="fade-up lg:col-span-7">
          <span className="eyebrow">Premium Indian Spice Exporters</span>
          <h1 className="display-xl mt-5 max-w-4xl text-cocoa">SHAARAV Global Ventures</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cocoa/75 md:text-xl">
            Authentic spices, polished packaging, strict quality systems, and export-ready consistency for modern global food businesses.
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
          <span className="eyebrow">Built Beyond Basic</span>
          <h2 className="display-lg mt-5 text-cocoa">A spice house designed for premium shelves.</h2>
        </div>
        <div className="lg:col-span-7">
          <p className="text-2xl leading-relaxed text-cocoa/80">
            Shaarav brings farm-linked sourcing, controlled processing, export documentation, and retail-grade packs into one disciplined supply partner.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {stats.map((item) => <div key={item} className="border-l-2 border-primary bg-paper p-5 text-xl font-medium text-cocoa shadow-soft">{item}</div>)}
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
        <div className="grid gap-5 md:grid-cols-4">
          {products.map((product) => (
            <article key={product.name} className="group bg-paper p-4 shadow-soft">
              <div className="aspect-[4/5] overflow-hidden bg-background"><img src={product.image} alt={product.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" /></div>
              <h3 className="mt-5 font-display text-2xl text-cocoa">{product.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{product.note}</p>
            </article>
          ))}
        </div>
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

    <section className="section-screen bg-background">
      <div className="container-x grid items-center gap-10 lg:grid-cols-12">
        <div className="lg:col-span-8"><span className="eyebrow">Start a Trade Conversation</span><h2 className="display-lg mt-5 text-cocoa">Send us your required spice, grade, pack size, and destination.</h2></div>
        <div className="lg:col-span-4"><Link to="/contact" className="inline-flex w-full items-center justify-center gap-3 bg-primary px-8 py-5 text-lg text-primary-foreground transition-colors hover:bg-cocoa">Request Export Quote <ArrowRight /></Link></div>
      </div>
    </section>
  </Layout>
);

export default Index;
