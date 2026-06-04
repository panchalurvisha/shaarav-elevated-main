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

import { AboutFounder } from "@/components/about/AboutFounder";
import { AboutCompany } from "@/components/about/AboutCompany";
import { AboutTeam } from "@/components/about/AboutTeam";
import { AboutPullQuote } from "@/components/about/AboutPullQuote";
import { AboutCta } from "@/components/about/AboutCta";

const About = () => (
  <Layout>
    <PageHero eyebrow="About Shaarav" title="A modern Indian food product house with editorial discipline." subtitle="Shaarav Global EXIM connects deep Indian agricultural origins with the standards international buyers expect." image={farmerField} />
    <AboutFounder />
    <AboutCompany />
    <AboutTeam />
    <AboutPullQuote />
    <AboutCta />
  </Layout>
);

export default About;
