import React from 'react';
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
              <div key={step.year} className={`relative flex flex-col md:flex-row items-center gap-10 md:gap-16 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                <div className="hidden md:block absolute left-1/2 top-1/2 w-4 h-4 bg-primary transform -translate-x-1/2 -translate-y-1/2 shadow-[0_0_0_8px_#fcfbf9]" />
                
                <div className={`w-full md:w-1/2 ${isEven ? 'md:text-left' : 'md:text-right'}`}>
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
