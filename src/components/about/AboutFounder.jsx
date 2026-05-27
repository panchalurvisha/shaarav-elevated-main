import React from 'react';

export const AboutFounder = () => (
  <section className="section-screen bg-paper py-24">
    <div className="container-x grid gap-16 lg:grid-cols-12 items-center">
      <div className="lg:col-span-5 relative">
        <div className="aspect-[4/5] w-full overflow-hidden shadow-deep border border-border/50 bg-background/50">
          <img 
            src="/assets/founder_shrruti.png" 
            alt="Shrruti Mehta Jobanputra" 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
            onError={(e) => {
               e.target.src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop";
            }}
          />
        </div>
      </div>
      <div className="lg:col-span-7">
        <span className="eyebrow">The Founder</span>
        <h2 className="display-md mt-6 text-cocoa">Shrruti Mehta Jobanputra</h2>
        <p className="mt-2 text-lg text-primary font-display tracking-wide">
          Founder | Investment Consultant | Global Business Strategist
        </p>
        
        <div className="mt-8 space-y-6 text-cocoa/75 text-lg leading-relaxed">
          <p>
            Shrruti Mehta Jobanputra is the Founder of Shaarav Enterprise and Shaarav Global Exim, focused on financial consulting and global business solutions.
          </p>
          <p>
            With expertise in finance, investments, and entrepreneurship, she delivers practical strategies that support sustainable growth and long-term value.
          </p>
          <p>
            Driven by professionalism and a value-centric approach, Shrruti is committed to creating businesses built on trust, impact, and growth.
          </p>
        </div>
        
        <div className="mt-10 flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-cocoa/55">
          <span className="h-px w-10 bg-primary" />
          <span>Leadership</span>
        </div>
      </div>
    </div>
  </section>
);
