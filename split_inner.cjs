const fs = require('fs');
const path = require('path');

const innerPath = path.join(__dirname, 'src', 'pages', 'InnerPage.jsx');
let content = fs.readFileSync(innerPath, 'utf8');

// I will run the code inside `InnerPage.jsx` dynamically to extract the `pageData` object.
// Wait, JSX can't be run in plain Node. 
// I will use regex to extract the `pageData` object string and `eval` it after removing imports.

const startIndex = content.indexOf('const pageData = {');
const endIndexMatch = content.match(/};\s*const renderSection/);
const endIndex = endIndexMatch ? endIndexMatch.index : -1;

if (startIndex === -1 || endIndex === -1) {
  console.error("Could not find pageData");
  process.exit(1);
}

const pageDataStr = content.substring(startIndex + 17, endIndex + 1);


// Prepare string for eval. We need to define the variables used (like image variables).
const imgImports = content.match(/^import .*? from .*?;/gm).filter(i => i.includes('assets'));
let evalString = `
  const heroSpices = "heroSpices";
  const masalaBox = "masalaBox";
  const productTurmeric = "productTurmeric";
  const productChili = "productChili";
  const productCoriander = "productCoriander";
  const productGaram = "productGaram";
  const farmerField = "farmerField";
  const qualityLab = "qualityLab";
  const spiceMarket = "spiceMarket";
  const exportShip = "exportShip";
  const worldMap = "worldMap";
  const macroTurmeric = "macroTurmeric";
  const macroChili = "macroChili";
  const mortar = "mortar";
  
  const pageData = ${pageDataStr}
  
  module.exports = pageData;
`;

fs.writeFileSync('temp_data.cjs', evalString);
const pageData = require('./temp_data.cjs');

const pages = Object.keys(pageData); // about, products, quality, sustainability, export, contact

// Helper to generate the section component string
function generateSection(s, index, accent, componentName) {
  const flip = index % 2 === 1;
  const bg = index % 2 ? "bg-surface" : "bg-background";
  const num = String(index + 1).padStart(2, "0");
  
  let jsx = '';
  
  if (s.image) {
    const linkStr = s.link ? `
              <Link to="${s.link}" className="block overflow-hidden relative shadow-deep group">
                <img src={${s.image}} alt="${s.heading}" className="h-[64vh] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </Link>` : `
              <img src={${s.image}} alt="${s.heading}" className="relative h-[64vh] w-full object-cover shadow-deep" />`;
              
    const linkText = s.link ? `
            <Link to="${s.link}" className="mt-8 inline-flex items-center gap-2 text-primary hover:text-cocoa transition-colors font-medium">
              View Product Details <ArrowRight size={18} />
            </Link>` : '';

    jsx = `
    <section className="section-screen ${bg}">
      <div className="container-x grid items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-7 ${flip ? "lg:order-2" : "order-1 lg:order-1"}">
          <div className="relative">
            <div className="absolute ${flip ? "-right-6" : "-left-6"} -top-6 hidden h-32 w-32 border border-primary/40 lg:block" />${linkStr}
          </div>
        </div>
        <div className="lg:col-span-5 ${flip ? "lg:order-1" : "order-2 lg:order-2"}">
          <div className="flex items-center gap-4">
            <span className="font-display text-5xl text-primary">${num}</span>
            <span className="h-px flex-1 bg-border" />
            <span className="text-xs uppercase tracking-[0.3em] text-cocoa/55">${s.tag || accent}</span>
          </div>
          <h2 className="display-md mt-8 text-cocoa">${s.heading}</h2>
          <p className="mt-6 text-lg leading-relaxed text-cocoa/75">${s.text}</p>${linkText}
          <div className="mt-10 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-cocoa/55">
            <span className="h-px w-8 bg-primary" />
            <span>SHAARAV · ${accent}</span>
          </div>
        </div>
      </div>
    </section>`;
  } else {
    jsx = `
    <section className="section-screen ${bg}">
      <div className="container-x">
        <div className="grid items-end gap-10 border-b border-border pb-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-4">
              <span className="font-display text-5xl text-primary">${num}</span>
              <span className="text-xs uppercase tracking-[0.3em] text-cocoa/55">${s.tag || accent}</span>
            </div>
            <h2 className="display-md mt-6 max-w-3xl text-cocoa">${s.heading}</h2>
          </div>
          <p className="text-lg leading-relaxed text-cocoa/70 lg:col-span-5">${s.text}</p>
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
    </section>`;
  }

  return `import React from 'react';
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

export const ${componentName} = () => (
${jsx}
);
`;
}

// Generate the specific components
pages.forEach(page => {
  const data = pageData[page];
  const dir = path.join(__dirname, 'src', 'components', page);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  const compNames = [];

  // 1. Intro Component
  const introName = page.charAt(0).toUpperCase() + page.slice(1) + 'Intro';
  compNames.push(introName);
  const introCode = `import React from 'react';
import { Quote } from "lucide-react";

export const ${introName} = () => (
  <section className="section-screen bg-paper">
    <div className="container-x grid gap-16 lg:grid-cols-12">
      <div className="lg:col-span-4">
        <span className="eyebrow">${data.intro.kicker}</span>
        <h2 className="display-md mt-6 text-cocoa">In brief.</h2>
        <p className="mt-6 text-cocoa/65">A short orientation before the chapters.</p>
        <div className="mt-10 border-t border-border">
          {${JSON.stringify(data.intro.meta)}.map((m) => (
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
          <p className="mt-8 font-display text-3xl leading-snug text-cocoa md:text-4xl">${data.intro.statement}</p>
          <div className="mt-10 flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-cocoa/55">
            <span className="h-px w-10 bg-primary" />
            <span>Shaarav Editorial · ${data.eyebrow}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);
`;
  // FIX Map syntax stringification
  fs.writeFileSync(path.join(dir, `${introName}.jsx`), introCode.replace(/\]\.map/, '].map'));

  // 2. Sections
  data.sections.forEach((s, i) => {
    let rawHeading = s.heading.replace(/[^a-zA-Z0-9]/g, '');
    let secName = page.charAt(0).toUpperCase() + page.slice(1) + rawHeading;
    // Prevent duplicate names
    if (compNames.includes(secName)) secName += i;
    compNames.push(secName);

    const secCode = generateSection(s, i, data.eyebrow, secName);
    fs.writeFileSync(path.join(dir, `${secName}.jsx`), secCode);
  });

  // 3. Pull Quote Component
  const pullName = page.charAt(0).toUpperCase() + page.slice(1) + 'PullQuote';
  compNames.push(pullName);
  const pullCode = `import React from 'react';
import { Quote } from "lucide-react";

import heroSpices from "@/assets/hero-spices-new.png";
import masalaBox from "@/assets/masala-box.jpg";
import farmerField from "@/assets/farmer-field-new.png";
import qualityLab from "@/assets/quality-lab-new.png";
import spiceMarket from "@/assets/market-spices-new.png";
import exportShip from "@/assets/export-ship-new.png";
import worldMap from "@/assets/world-map.jpg";

export const ${pullName} = () => (
  <section className="section-screen bg-cocoa text-paper">
    <div className="absolute inset-0 opacity-20">
      <img src={${data.image}} alt="" className="h-full w-full object-cover" />
    </div>
    <div className="container-x relative z-10 text-center">
      <Quote className="mx-auto text-primary" size={40} />
      <p className="mx-auto mt-10 max-w-4xl font-display text-3xl leading-snug text-paper md:text-5xl">
        "${data.pull}"
      </p>
      <div className="mt-10 text-xs uppercase tracking-[0.3em] text-paper/60">Shaarav Global Add EXIM</div>
    </div>
  </section>
);
`;
  fs.writeFileSync(path.join(dir, `${pullName}.jsx`), pullCode);

  // 4. CTA Component
  const ctaName = page.charAt(0).toUpperCase() + page.slice(1) + 'Cta';
  compNames.push(ctaName);
  const ctaCode = `import React from 'react';
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

export const ${ctaName} = () => (
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
);
`;
  fs.writeFileSync(path.join(dir, `${ctaName}.jsx`), ctaCode);

  // Write page component file in src/pages/ (e.g. src/pages/About.jsx)
  let pageJSX = `import React from 'react';
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { Mail, Phone, MapPin } from "lucide-react";
import heroSpices from "@/assets/hero-spices-new.png";
import masalaBox from "@/assets/masala-box.jpg";
import farmerField from "@/assets/farmer-field-new.png";
import qualityLab from "@/assets/quality-lab-new.png";
import spiceMarket from "@/assets/market-spices-new.png";
import exportShip from "@/assets/export-ship-new.png";

`;
  if (page === 'about') {
    pageJSX += `import { AboutJourney } from "@/components/about/AboutJourney";\n`;
  }
  
  compNames.forEach(name => {
    pageJSX += `import { ${name} } from "@/components/${page}/${name}";\n`;
  });

  pageJSX += `
const ${page.charAt(0).toUpperCase() + page.slice(1)} = () => (
  <Layout>
    <PageHero eyebrow="${data.eyebrow}" title="${data.title}" subtitle="${data.subtitle}" image={${data.image}} />
    <${compNames[0]} />
`;

  if (page === 'about') {
    pageJSX += `    <AboutJourney />\n`;
  } else {
    for (let j = 1; j < compNames.length - 2; j++) {
      pageJSX += `    <${compNames[j]} />\n`;
    }
  }

  pageJSX += `    <${compNames[compNames.length - 2]} />\n`; // PullQuote

  if (page === 'contact') {
    pageJSX += `
    <section className="section-screen bg-paper">
      <div className="container-x grid gap-10 lg:grid-cols-3">
        {[
          { Icon: Mail, label: "Email", value: "hello@shaaravglobal.com" },
          { Icon: Phone, label: "Phone", value: "+91 9023671539" },
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
`;
  }

  pageJSX += `    <${compNames[compNames.length - 1]} />
  </Layout>
);

export default ${page.charAt(0).toUpperCase() + page.slice(1)};
`;

  fs.writeFileSync(path.join(__dirname, 'src', 'pages', page.charAt(0).toUpperCase() + page.slice(1) + '.jsx'), pageJSX);
});

// Create AboutJourney file specifically
const aboutDir = path.join(__dirname, 'src', 'components', 'about');
const aboutJourneyCode = `import React from 'react';
import farmerField from "@/assets/farmer-field-new.png";
import qualityLab from "@/assets/quality-lab-new.png";
import exportShip from "@/assets/export-ship-new.png";
import mortar from "@/assets/mortar-new.png";

const journeySteps = [
  { year: "2010", title: "The Foundation", text: "Shaarav started with a simple vision to connect local spice farmers directly with regional markets, focusing purely on raw, unadulterated quality.", image: farmerField },
  { year: "2015", title: "Processing & Refining", text: "We established our first dedicated processing unit, allowing us to control grinding, cleaning, and sorting. This marked our shift towards premium standardisation.", image: mortar },
  { year: "2019", title: "Global Export Initiation", text: "With FSSAI and APEDA certifications secured, Shaarav began its first major export operations to the Middle East and European markets.", image: exportShip },
  { year: "2024", title: "A Modern Spice House", text: "Today, Shaarav stands as a premium export partner, offering fully traceable, lab-tested, and private-label ready spices for discerning global brands.", image: qualityLab }
];

export const AboutJourney = () => (
  <section className="section-screen bg-background relative py-24">
    <div className="container-x">
      <div className="mb-24 text-center max-w-2xl mx-auto">
        <span className="eyebrow">The Timeline</span>
        <h2 className="display-lg mt-6 text-cocoa">A journey of flavour, discipline, and growth.</h2>
      </div>
      
      <div className="relative max-w-5xl mx-auto">
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-primary/20 transform -translate-x-1/2" />
        
        <div className="space-y-20 md:space-y-32">
          {journeySteps.map((step, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={step.year} className={\`relative flex flex-col md:flex-row items-center gap-10 md:gap-16 \${isEven ? 'md:flex-row-reverse' : ''}\`}>
                <div className="hidden md:block absolute left-1/2 top-1/2 w-4 h-4 bg-primary transform -translate-x-1/2 -translate-y-1/2 shadow-[0_0_0_8px_#fcfbf9]" />
                
                <div className={\`w-full md:w-1/2 \${isEven ? 'md:text-left' : 'md:text-right'}\`}>
                   <div className="inline-block px-4 py-2 bg-paper shadow-soft mb-6 text-sm font-display tracking-[0.2em] text-primary">{step.year}</div>
                   <h3 className="font-display text-4xl text-cocoa">{step.title}</h3>
                   <p className="mt-5 text-lg text-cocoa/75 leading-relaxed">{step.text}</p>
                </div>

                <div className="w-full md:w-1/2">
                   <div className="aspect-[4/3] w-full overflow-hidden shadow-deep border border-border/50">
                     <img src={step.image} alt={step.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                   </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);
`;
fs.writeFileSync(path.join(aboutDir, 'AboutJourney.jsx'), aboutJourneyCode);

console.log("Successfully extracted InnerPage components into separate files!");
