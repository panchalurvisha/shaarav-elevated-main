const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, 'src', 'pages', 'Index.jsx');
let content = fs.readFileSync(indexPath, 'utf8');

// The script will use regex to find all <section ...> ... </section>
const sectionRegex = /<section[\s\S]*?<\/section>/g;

let match;
let sections = [];
while ((match = sectionRegex.exec(content)) !== null) {
  sections.push(match[0]);
}

const componentNames = [
  'Hero',
  'Mission',
  'PremiumRange',
  'Catalogue',
  'ShaaravPack',
  'Sourcing',
  'QualityFirst',
  'Process',
  'ExportNetwork',
  'SensoryDepth',
  'PrivateLabel',
  'MarketIntelligence',
  'Values',
  'Logistics',
  'BuyerConfidence',
  'TestimonialsSection',
  'Cta'
];

if (sections.length !== componentNames.length) {
  console.error(`Found ${sections.length} sections but expected ${componentNames.length}.`);
  process.exit(1);
}

// Extract imports from Index.jsx
const importRegex = /^import\s+.*?;\s*$/gm;
let imports = [];
while ((match = importRegex.exec(content)) !== null) {
  imports.push(match[0]);
}

const outDir = path.join(__dirname, 'src', 'components', 'home');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

let indexContent = imports.join('\n') + '\n\n';
componentNames.forEach((name, i) => {
  indexContent += `import { ${name} } from "@/components/home/${name}";\n`;
});

indexContent += '\nconst Index = () => (\n  <Layout>\n';

componentNames.forEach((name, i) => {
  const sectionContent = sections[i];
  
  // Create component file
  const compCode = `import React from 'react';
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

export const ${name} = () => (
${sectionContent}
);
`;

  fs.writeFileSync(path.join(outDir, `${name}.jsx`), compCode);
  indexContent += `    <${name} />\n`;
});

indexContent += '  </Layout>\n);\n\nexport default Index;\n';

// Replace Index.jsx content
fs.writeFileSync(indexPath, indexContent);

console.log("Successfully split Index.jsx into components!");
