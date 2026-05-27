import React from 'react';
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { Mail, Phone, MapPin, Users } from "lucide-react";
import heroSpices from "@/assets/hero-spices-new.png";

import { ContactIntro } from "@/components/contact/ContactIntro";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactCta } from "@/components/contact/ContactCta";

const Contact = () => (
  <Layout>
    <PageHero eyebrow="Contact" title="Tell Shaarav what spice shipment you need." subtitle="Share product, grade, quantity, packaging, destination, and required timeline." image={heroSpices} />
    <ContactIntro />
    <ContactForm />

    {/* Contact Info Cards */}
    <section className="section-screen bg-surface">
      <div className="container-x">
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <span className="eyebrow">Reach Us</span>
          <h2 className="display-md mt-6 text-cocoa">Direct lines to the Shaarav desk.</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { Icon: Mail, label: "Email", value: "hello@shaaravglobalventures.com", href: "mailto:hello@shaaravglobalventures.com" },
            { Icon: Phone, label: "Phone 1", value: "+91 99255 28021", href: "tel:+919925528021" },
            { Icon: Phone, label: "Phone 2", value: "+91 90236 71539", href: "tel:+919023671539" },
            { Icon: MapPin, label: "Office", value: "B7-1601, Waterlily, Adani Shantigram, Nr Vaishnodevi Circle, Ahmedabad-382421", href: "https://maps.google.com/?q=B7-1601+Waterlily+Adani+Shantigram+Ahmedabad+382421" },
          ].map(({ Icon, label, value, href }) => (
            <a key={label} href={href} target={href.startsWith('https') ? '_blank' : undefined} rel={href.startsWith('https') ? 'noopener noreferrer' : undefined} className="border border-border bg-paper p-8 shadow-soft hover:shadow-deep hover:border-primary/40 transition-all duration-300 group block">
              <Icon className="text-primary" size={28} />
              <div className="mt-6 text-xs uppercase tracking-[0.3em] text-cocoa/55">{label}</div>
              <p className="mt-3 font-display text-lg text-cocoa leading-snug group-hover:text-primary transition-colors break-all md:break-words">{value}</p>
            </a>
          ))}
        </div>
      </div>
    </section>

    {/* Team Section */}
    <section className="section-screen bg-background">
      <div className="container-x">
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <span className="eyebrow">Our Team</span>
          <h2 className="display-md mt-6 text-cocoa">The people behind every shipment.</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {[
            { name: "Anitha Ganesh", role: "Procurement Team", phone: "+91 92742 06525" },
            { name: "Shreya Mistry", role: "Marketing Team", phone: "+91 90993 00422" },
          ].map((member) => (
            <div key={member.name} className="border border-border bg-paper p-10 shadow-soft flex flex-col items-start">
              <div className="w-14 h-14 bg-primary/10 flex items-center justify-center mb-6">
                <Users className="text-primary" size={28} />
              </div>
              <h3 className="font-display text-2xl text-cocoa">{member.name}</h3>
              <p className="mt-1 text-sm text-primary font-medium uppercase tracking-wider">{member.role}</p>
              <div className="mt-5 flex items-center gap-3 text-cocoa/70">
                <Phone size={14} className="text-primary shrink-0" />
                <a href={`tel:${member.phone.replace(/\s/g, '')}`} className="text-sm hover:text-primary transition-colors">{member.phone}</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <ContactCta />
  </Layout>
);

export default Contact;
