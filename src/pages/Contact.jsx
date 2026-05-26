import React from 'react';
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { Mail, Phone, MapPin } from "lucide-react";
import heroSpices from "@/assets/hero-spices-new.png";
import masalaBox from "@/assets/masala-box.jpg";
import farmerField from "@/assets/farmer-field-new.png";
import qualityLab from "@/assets/quality-lab-new.png";
import spiceMarket from "@/assets/market-spices-new.png";
import exportShip from "@/assets/export-ship-new.png";

import { ContactIntro } from "@/components/contact/ContactIntro";
import { Contacthelloshaaravglobalcom } from "@/components/contact/Contacthelloshaaravglobalcom";
import { Contact919023671539 } from "@/components/contact/Contact919023671539";
import { ContactShaaravGlobalAddEXIMMumbai } from "@/components/contact/ContactShaaravGlobalAddEXIMMumbai";
import { ContactWhattosharewithus } from "@/components/contact/ContactWhattosharewithus";
import { ContactSampledispatch } from "@/components/contact/ContactSampledispatch";
import { ContactCustompacks } from "@/components/contact/ContactCustompacks";
import { ContactSpecificationled } from "@/components/contact/ContactSpecificationled";
import { ContactFrominquirytodispatch } from "@/components/contact/ContactFrominquirytodispatch";
import { ContactPullQuote } from "@/components/contact/ContactPullQuote";
import { ContactCta } from "@/components/contact/ContactCta";

const Contact = () => (
  <Layout>
    <PageHero eyebrow="Contact" title="Tell Shaarav what spice shipment you need." subtitle="Share product, grade, quantity, packaging, destination, and required timeline." image={heroSpices} />
    <ContactIntro />
    <Contacthelloshaaravglobalcom />
    <Contact919023671539 />
    <ContactShaaravGlobalAddEXIMMumbai />
    <ContactWhattosharewithus />
    <ContactSampledispatch />
    <ContactCustompacks />
    <ContactSpecificationled />
    <ContactFrominquirytodispatch />
    <ContactPullQuote />

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
    <ContactCta />
  </Layout>
);

export default Contact;
