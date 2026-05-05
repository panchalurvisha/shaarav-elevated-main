import { ArrowRight, CheckCircle2, Mail, MapPin, Phone, Quote } from "lucide-react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
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
import macroTurmeric from "@/assets/macro-turmeric.jpg";
import macroChili from "@/assets/macro-chili.jpg";
import mortar from "@/assets/mortar.jpg";

const pageData = {
  about: {
    eyebrow: "About Shaarav",
    title: "A modern Indian spice house with editorial discipline.",
    subtitle: "Shaarav Global Ventures connects deep Indian spice origins with the standards international buyers expect.",
    image: farmerField,
    intro: {
      kicker: "Manifesto",
      statement: "We treat spices the way fine houses treat tea, coffee, and olive oil — with origin clarity, batch honesty, and packaging that respects the product inside.",
      meta: [
        { label: "Founded", value: "India" },
        { label: "Focus", value: "Premium Export" },
        { label: "Discipline", value: "Sourcing · Process · Pack" },
        { label: "Audience", value: "Retail · HoReCa · Private Label" },
      ],
    },
    sections: [
      { tag: "Identity", heading: "A spice venture with a modern shelf in mind.", text: "Shaarav was founded to move Indian spices beyond the bulk-commodity mindset — into a category that respects design, documentation, and dependable quality.", image: spiceMarket },
      { tag: "Purpose", heading: "Make authentic Indian spice easy to source.", text: "Retailers, importers, and foodservice teams need partners who think in SKUs, lead times, and consistency — not just kilos.", image: masalaBox },
      { tag: "Approach", heading: "Crop knowledge meets supply discipline.", text: "We blend agricultural understanding with quality-system thinking, so each shipment behaves the way the previous one did." },
      { tag: "People", heading: "Procurement, quality, packing, logistics — one team.", text: "A short, accountable supply chain protects flavour, colour, and freshness from field to carton.", image: qualityLab },
      { tag: "Standards", heading: "Moisture, aroma, colour, mesh, pack — checked.", text: "Every batch is reviewed against the spec before it earns dispatch clearance." },
      { tag: "Partnership", heading: "Built for buyers who repeat.", text: "Most of our work comes from buyers who plan multiple shipments — that shapes how we sample, price, and document.", image: exportShip },
      { tag: "Promise", heading: "No basic mindset. Ever.", text: "Every Shaarav SKU must look, smell, and perform like a premium spice — never a generic commodity." },
      { tag: "Next", heading: "Begin a trade conversation.", text: "Explore our catalogue or share a requirement — we will respond with feasibility, samples, and timing.", image: heroSpices },
    ],
    pull: "We move Indian spice from anonymous sacks to named, documented, design-led packs — without losing the soul of the field.",
  },
  products: {
    eyebrow: "Products",
    title: "A curated catalogue of whole spices, powders, and house blends.",
    subtitle: "Built for fine grocers, supermarkets, importers, private labels, and food manufacturers.",
    image: masalaBox,
    intro: {
      kicker: "The Catalogue",
      statement: "Each SHAARAV SKU is selected for colour value, aroma intensity, grind consistency, and shelf behaviour — not just price per kilo.",
      meta: [
        { label: "Categories", value: "04" },
        { label: "Active SKUs", value: "60+" },
        { label: "Pack Formats", value: "Pouch · Box · Jar · Bulk" },
        { label: "MOQ", value: "On Request" },
      ],
    },
    sections: [
      { tag: "Signature", heading: "SHAARAV Turmeric Powder", text: "High-curcumin, deep-golden grind. Engineered for both retail visibility and ingredient performance.", image: productTurmeric },
      { tag: "Signature", heading: "SHAARAV Red Chilli", text: "Bright colour value, balanced heat — available across mild, medium, and hot SHU bands.", image: productChili },
      { tag: "Signature", heading: "SHAARAV Coriander", text: "Fresh, citrus-green aroma. Available as seed and powder, with controlled mesh sizes.", image: productCoriander },
      { tag: "Signature", heading: "SHAARAV Garam Masala", text: "A balanced house blend — the everyday backbone of Indian cooking, in a premium pack.", image: productGaram },
      { tag: "Whole spices", heading: "The supporting cast.", text: "Cumin, fennel, mustard, fenugreek, cloves, cardamom, cinnamon — sourced for aroma first." },
      { tag: "Blends", heading: "Beyond the everyday.", text: "Kitchen King, Chana, Pav Bhaji, Biryani, Tea Masala — and custom recipes co-developed with you.", image: mortar },
      { tag: "Pack formats", heading: "Built for every shelf.", text: "Soft-touch pouches, heritage cartons, apothecary jars, bulk kraft, and full export cartons." },
      { tag: "Buyer support", heading: "From sample to shipment.", text: "Specifications, label files, sample dispatch, and a clear handoff into repeat production.", image: macroTurmeric },
    ],
    pull: "Selection is the work. Every SKU on the SHAARAV shelf is one we would proudly cook with at home.",
  },
  quality: {
    eyebrow: "Quality",
    title: "Measured freshness. Controlled process. Confident dispatch.",
    subtitle: "Each shipment passes through a defined chain of checks — from raw spice to sealed carton.",
    image: qualityLab,
    intro: {
      kicker: "The Standard",
      statement: "Quality is not a final inspection — it is a sequence of small, disciplined decisions made from procurement to packaging.",
      meta: [
        { label: "Checks per batch", value: "31" },
        { label: "Traceability", value: "100%" },
        { label: "Lab parameters", value: "Moisture · Colour · Mesh · Aroma" },
        { label: "Pack QC", value: "Seal · Weight · Label" },
      ],
    },
    sections: [
      { tag: "01", heading: "Raw material intake", text: "Incoming spices are inspected for freshness, impurities, aroma, and visual quality before they enter the line.", image: spiceMarket },
      { tag: "02", heading: "Cleaning & sorting", text: "Mechanical cleaning, sieving, and sorting reduce foreign matter before grinding or packing." },
      { tag: "03", heading: "Low-heat grinding", text: "Controlled grinding protects volatile aromas and natural colour value.", image: macroChili },
      { tag: "04", heading: "Batch laboratory", text: "Moisture, mesh, colour value, volatile oil, and aroma are measured against the SKU specification." },
      { tag: "05", heading: "Packaging integrity", text: "Seal strength, fill weight, label clarity, and carton integrity are verified before sign-off.", image: masalaBox },
      { tag: "06", heading: "Traceability chain", text: "Every pack carries a batch link back to its sourcing, processing, and packing record." },
      { tag: "07", heading: "Buyer documentation", text: "COAs, specifications, and country-specific paperwork are prepared alongside the shipment.", image: exportShip },
      { tag: "08", heading: "Continuous review", text: "Buyer feedback loops directly into sourcing, processing, and packing improvements." },
    ],
    pull: "Quality earns the next order. Every shipment is built as if the buyer is auditing it personally.",
  },
  sustainability: {
    eyebrow: "Sustainability",
    title: "Responsible sourcing. Less waste. More respect.",
    subtitle: "Quiet, sensible choices in sourcing, packing, and logistics that protect long-term quality.",
    image: spiceMarket,
    intro: {
      kicker: "Our Stance",
      statement: "Sustainability at Shaarav is structural — embedded in how we source, clean, pack, and ship — not a marketing layer.",
      meta: [
        { label: "Sourcing", value: "Farm-linked" },
        { label: "Waste", value: "Reduced by design" },
        { label: "Packaging", value: "Buyer-aligned materials" },
        { label: "Logistics", value: "Consolidated lanes" },
      ],
    },
    sections: [
      { tag: "Field", heading: "Closer to the farm.", text: "Direct and semi-direct relationships protect freshness and create visibility into how spices are grown and handled.", image: farmerField },
      { tag: "Process", heading: "Cleaner handling, less loss.", text: "Sorting, grading, and pack planning reduce avoidable rejection and waste across the line." },
      { tag: "Material", heading: "Honest packaging.", text: "We help buyers choose materials that protect the spice and respect the shelf — without overengineering." },
      { tag: "Movement", heading: "Efficient shipping.", text: "Carton planning and consolidated shipments reduce unnecessary container space and freight movement.", image: exportShip },
      { tag: "Flavour", heading: "Quality preservation.", text: "Freshness control prevents reworks and rejections — the most under-discussed sustainability win." },
      { tag: "Community", heading: "Long-term partners.", text: "Growth depends on dependable supplier and processor relationships, not opportunistic trades.", image: mortar },
      { tag: "Transparency", heading: "Documented decisions.", text: "Clear batch and shipment information lets buyers make responsible purchasing calls." },
      { tag: "Future", heading: "Quiet, continuous improvement.", text: "We refine processes as buyer expectations and global standards evolve.", image: worldMap },
    ],
    pull: "The most sustainable spice is the one that arrives perfect, sells through, and never needs to be remade.",
  },
  export: {
    eyebrow: "Export",
    title: "India-origin spices, prepared for international shelves.",
    subtitle: "Cartons, documents, pack formats, and logistics support engineered for global trade desks.",
    image: exportShip,
    intro: {
      kicker: "Trade Desk",
      statement: "Our export practice is built around repeat buyers — importers, distributors, retailers, and private-label houses planning multiple shipments per year.",
      meta: [
        { label: "Lanes", value: "ME · EU · NA · APAC · AF" },
        { label: "Incoterms", value: "FOB · CIF · CFR" },
        { label: "Modes", value: "Sea · Air · Sample" },
        { label: "Cycle", value: "Sample → Production → Dispatch" },
      ],
    },
    sections: [
      { tag: "Markets", heading: "Five regions, one supply standard.", text: "Active interest from the Middle East, Africa, Europe, North America, and APAC — supported with consistent product behaviour.", image: worldMap },
      { tag: "Documents", heading: "Clean paperwork.", text: "Invoices, packing lists, COAs, specifications, and buyer-requested documentation prepared with each shipment." },
      { tag: "Packing", heading: "Retail to bulk.", text: "Retail packs, foodservice formats, bulk kraft, cartons, and pallet planning configured per buyer.", image: masalaBox },
      { tag: "Logistics", heading: "End-to-end coordination.", text: "FOB, CIF, sample dispatch, and consolidated shipment planning — handled with named ownership at every stage." },
      { tag: "Compliance", heading: "Destination-aligned labels.", text: "Pack and label details are mapped to destination requirements shared by the buyer." },
      { tag: "Consistency", heading: "Repeatable supply.", text: "Repeat orders are anchored to grade, grind, colour, and pack-size specifications — not memory.", image: exportShip },
      { tag: "Communication", heading: "Predictable timelines.", text: "Clear cadence from sampling, approval, production, dispatch, and post-shipment support." },
      { tag: "Practice", heading: "Built for recurring trade.", text: "Our cost, lead time, and pack discipline are designed for buyers planning multiple shipments per year.", image: spiceMarket },
    ],
    pull: "The first shipment proves capability. The tenth shipment proves the system.",
  },
  contact: {
    eyebrow: "Contact",
    title: "Tell Shaarav what spice shipment you need.",
    subtitle: "Share product, grade, quantity, packaging, destination, and required timeline.",
    image: heroSpices,
    intro: {
      kicker: "Trade Desk",
      statement: "We respond to qualified import, distribution, retail, and private-label inquiries with feasibility, sample plan, and quote.",
      meta: [
        { label: "Email", value: "hello@shaaravglobal.com" },
        { label: "Phone", value: "+91 98765 43210" },
        { label: "Office", value: "Mumbai, India" },
        { label: "Response", value: "Within 24h (Mon–Sat)" },
      ],
    },
    sections: [
      { tag: "Email", heading: "hello@shaaravglobal.com", text: "Best for new inquiries with attached requirement files." },
      { tag: "Phone", heading: "+91 98765 43210", text: "Direct line to the Shaarav trade desk." },
      { tag: "Location", heading: "Shaarav Global Ventures, Mumbai.", text: "Office and coordination hub for sourcing, quality, and dispatch." },
      { tag: "Requirement", heading: "What to share with us.", text: "Spice name, form, quantity, pack size, destination port, and required arrival window.", image: masalaBox },
      { tag: "Samples", heading: "Sample dispatch.", text: "Sample dispatch is offered for qualified import or distribution requirements after a short discovery call." },
      { tag: "Private label", heading: "Custom packs.", text: "Share artwork, pack structure, and target market — we will respond with feasibility and timing.", image: mortar },
      { tag: "Bulk orders", heading: "Specification-led.", text: "Share grade, mesh, colour value, heat band, and documentation requirements upfront." },
      { tag: "Next step", heading: "From inquiry to dispatch.", text: "The team will review your requirement and respond with feasibility, sample plan, timing, and quote.", image: exportShip },
    ],
    pull: "A clear requirement always gets a faster, sharper response.",
  },
};

const renderSection = (s, index, accent) => {
  const flip = index % 2 === 1;
  const bg = index % 2 ? "bg-surface" : "bg-background";
  const num = String(index + 1).padStart(2, "0");

  if (s.image) {
    return (
      <section key={s.heading + index} className={`section-screen ${bg}`}>
        <div className="container-x grid items-center gap-12 lg:grid-cols-12">
          <div className={`lg:col-span-7 ${flip ? "lg:order-2" : ""}`}>
            <div className="relative">
              <div className={`absolute ${flip ? "-right-6" : "-left-6"} -top-6 hidden h-32 w-32 border border-primary/40 lg:block`} />
              <img src={s.image} alt={s.heading} className="relative h-[64vh] w-full object-cover shadow-deep" />
            </div>
          </div>
          <div className={`lg:col-span-5 ${flip ? "lg:order-1" : ""}`}>
            <div className="flex items-center gap-4">
              <span className="font-display text-5xl text-primary">{num}</span>
              <span className="h-px flex-1 bg-border" />
              <span className="text-xs uppercase tracking-[0.3em] text-cocoa/55">{s.tag ?? accent}</span>
            </div>
            <h2 className="display-md mt-8 text-cocoa">{s.heading}</h2>
            <p className="mt-6 text-lg leading-relaxed text-cocoa/75">{s.text}</p>
            <div className="mt-10 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-cocoa/55">
              <span className="h-px w-8 bg-primary" />
              <span>SHAARAV · {accent}</span>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Editorial text-driven section with a feature grid
  return (
    <section key={s.heading + index} className={`section-screen ${bg}`}>
      <div className="container-x">
        <div className="grid items-end gap-10 border-b border-border pb-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-4">
              <span className="font-display text-5xl text-primary">{num}</span>
              <span className="text-xs uppercase tracking-[0.3em] text-cocoa/55">{s.tag ?? accent}</span>
            </div>
            <h2 className="display-md mt-6 max-w-3xl text-cocoa">{s.heading}</h2>
          </div>
          <p className="text-lg leading-relaxed text-cocoa/70 lg:col-span-5">{s.text}</p>
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
};

export const InnerPage = ({ page }) => {
  const data = pageData[page];
  return (
    <Layout>
      <PageHero eyebrow={data.eyebrow} title={data.title} subtitle={data.subtitle} image={data.image} />

      {/* Editorial intro block */}
      <section className="section-screen bg-paper">
        <div className="container-x grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <span className="eyebrow">{data.intro.kicker}</span>
            <h2 className="display-md mt-6 text-cocoa">In brief.</h2>
            <p className="mt-6 text-cocoa/65">A short orientation before the chapters.</p>
            <div className="mt-10 border-t border-border">
              {data.intro.meta.map((m) => (
                <div key={m.label} className="flex items-baseline justify-between border-b border-border py-4">
                  <span className="text-xs uppercase tracking-[0.3em] text-cocoa/55">{m.label}</span>
                  <span className="font-display text-lg text-cocoa">{m.value}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-8">
            <div className="border-l border-primary/40 pl-8">
              <Quote className="text-primary/60" size={36} />
              <p className="mt-8 font-display text-3xl leading-snug text-cocoa md:text-4xl">{data.intro.statement}</p>
              <div className="mt-10 flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-cocoa/55">
                <span className="h-px w-10 bg-primary" />
                <span>Shaarav Editorial · {data.eyebrow}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {data.sections.map((s, i) => renderSection(s, i, data.eyebrow))}

      {/* Pull quote section */}
      <section className="section-screen bg-cocoa text-paper">
        <div className="absolute inset-0 opacity-20">
          <img src={data.image} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="container-x relative z-10 text-center">
          <Quote className="mx-auto text-primary" size={40} />
          <p className="mx-auto mt-10 max-w-4xl font-display text-3xl leading-snug text-paper md:text-5xl">
            "{data.pull}"
          </p>
          <div className="mt-10 text-xs uppercase tracking-[0.3em] text-paper/60">Shaarav Global Ventures</div>
        </div>
      </section>

      {page === "contact" ? (
        <section className="section-screen bg-paper">
          <div className="container-x grid gap-10 lg:grid-cols-3">
            {[
              { Icon: Mail, label: "Email", value: "hello@shaaravglobal.com" },
              { Icon: Phone, label: "Phone", value: "+91 98765 43210" },
              { Icon: MapPin, label: "Office", value: "Mumbai · India" },
            ].map(({ Icon, label, value }) => (
              <div key={label} className="border border-border bg-surface p-10 shadow-soft">
                <Icon className="text-primary" size={28} />
                <div className="mt-8 text-xs uppercase tracking-[0.3em] text-cocoa/55">{label}</div>
                <p className="mt-3 font-display text-2xl text-cocoa">{value}</p>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      <section className="section-screen bg-background">
        <div className="container-x grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <span className="eyebrow">Next Step</span>
            <h2 className="display-lg mt-6 text-cocoa">Ready to source premium Indian spice?</h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cocoa/70">Share spice, grade, pack format, and destination — the Shaarav trade desk will respond with feasibility, sample plan, and a quote.</p>
          </div>
          <div className="lg:col-span-4">
            <Link to="/contact" className="inline-flex w-full items-center justify-center gap-3 bg-primary px-8 py-6 text-lg text-primary-foreground transition-colors hover:bg-cocoa">
              Request Quote <ArrowRight />
            </Link>
            <div className="mt-6 flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-cocoa/55">
              <CheckCircle2 className="text-primary" size={16} /> Reply within 24h (Mon–Sat)
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
