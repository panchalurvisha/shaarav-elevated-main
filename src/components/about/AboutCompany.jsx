import React from 'react';

export const AboutCompany = () => (
  <section className="bg-background relative py-24">
    <div className="container-x">
      <div className="mb-16 text-center max-w-2xl mx-auto">
        <span className="eyebrow">Shaarav Global Exim</span>
        <h2 className="display-md mt-6 text-cocoa">A merchant export company focused on international trade.</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 auto-rows-[minmax(280px,auto)]">
        
        {/* Intro Block - spans 2 columns */}
        <div className="lg:col-span-2 bg-paper p-8 lg:p-12 border border-border/50 shadow-soft flex flex-col justify-center group hover:border-primary/30 transition-colors duration-300">
          <p className="text-xl md:text-2xl text-cocoa leading-relaxed font-display">
            A merchant export company focused on international trade, quality-driven export solutions, and building reliable global partnerships.
          </p>
          <div className="w-12 h-px bg-primary/40 my-6"></div>
          <p className="text-lg text-cocoa/75 leading-relaxed">
            We stand as a trusted name in the world of spices, bringing the rich aroma, purity & tradition of Indian flavors to kitchens across the globe. Sourced directly from the finest farms & cultivated under natural conditions, each item is handpicked and hygienically processed to retain its natural oils and powerful flavor profiles.
          </p>
        </div>

        {/* Spices Image Block */}
        <div className="bg-paper border border-border/50 shadow-soft overflow-hidden relative group min-h-[300px]">
           <img 
             src="/assets/spices_processing.png" 
             alt="Handpicked Spices" 
             className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
             onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=600&auto=format&fit=crop"; }} 
           />
        </div>

        {/* Purity Text Block */}
        <div className="bg-primary text-paper p-8 lg:p-10 border border-primary-dark/20 shadow-soft flex flex-col justify-center relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-6 opacity-10 transform translate-x-4 -translate-y-4 group-hover:scale-110 transition-transform duration-700">
             <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/></svg>
          </div>
          <h3 className="font-display text-2xl md:text-3xl mb-4 relative z-10">Purity & Freshness</h3>
          <p className="text-paper/90 leading-relaxed text-lg relative z-10">
            Free from artificial colors & preservatives, these products are a celebration of purity. Packed to preserve freshness, they bring out the best in both traditional Indian recipes and global culinary creations.
          </p>
        </div>

        {/* Global Exim Image Block - spans 2 columns */}
        <div className="lg:col-span-2 bg-paper border border-border/50 shadow-soft overflow-hidden relative group min-h-[350px] flex items-end p-8 lg:p-12">
           <img 
             src="/assets/global_exim.png" 
             alt="Global Exim" 
             className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
             onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1586528116311-ad8ed7c80a73?q=80&w=600&auto=format&fit=crop"; }} 
           />
           <div className="absolute inset-0 bg-gradient-to-t from-cocoa/95 via-cocoa/50 to-transparent"></div>
           <div className="relative z-10 w-full lg:w-4/5">
             <p className="text-lg md:text-xl text-paper/95 leading-relaxed font-display">
               Shaarav Global Ventures answers that demand with a focus on quality, sustainability, and trust, ensuring that every batch delivers what chefs and households expect: authentic taste rooted in excellence.
             </p>
           </div>
        </div>

      </div>
    </div>
  </section>
);
