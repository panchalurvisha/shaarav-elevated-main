import React from 'react';
import { Linkedin } from "lucide-react";

const teamMembers = [
  {
    name: "Anitha Ganesh",
    role: "Procurement Team",
    phone: "+91 92742 06525",
  },
  {
    name: "Shreya Mistry",
    role: "Marketing Team",
    phone: "+91 90993 00422",
  }
];

export const AboutTeam = () => (
  <section className="section-screen bg-paper py-24">
    <div className="container-x">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="eyebrow">Our Team</span>
        <h2 className="display-md mt-6 text-cocoa">The people behind the precision.</h2>
      </div>
      
      <div className="grid gap-10 md:grid-cols-2 max-w-4xl mx-auto">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-background border border-border/50 p-8 flex flex-col items-center text-center shadow-soft hover:shadow-deep transition-shadow duration-300">
            <div className="w-24 h-24 rounded-full overflow-hidden bg-primary/10 mb-6 flex items-center justify-center">
               <span className="text-3xl text-primary font-display">{member.name.charAt(0)}</span>
            </div>
            <h3 className="font-display text-2xl text-cocoa">{member.name}</h3>
            <p className="text-primary mt-2 uppercase tracking-widest text-xs">{member.role}</p>
            <div className="mt-6 pt-6 border-t border-border/50 w-full flex flex-col items-center gap-3">
               <p className="text-cocoa/75">{member.phone}</p>
               <a href="#" className="inline-flex items-center gap-2 text-primary hover:text-cocoa transition-colors">
                  <Linkedin size={18} />
                  <span className="text-sm">LinkedIn Profile</span>
               </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
