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

import { AboutJourney } from "@/components/about/AboutJourney";
import { AboutIntro } from "@/components/about/AboutIntro";
import { AboutAspiceventurewithamodernshelfinmind } from "@/components/about/AboutAspiceventurewithamodernshelfinmind";
import { AboutMakeauthenticIndianspiceeasytosource } from "@/components/about/AboutMakeauthenticIndianspiceeasytosource";
import { AboutCropknowledgemeetssupplydiscipline } from "@/components/about/AboutCropknowledgemeetssupplydiscipline";
import { AboutProcurementqualitypackinglogisticsoneteam } from "@/components/about/AboutProcurementqualitypackinglogisticsoneteam";
import { AboutMoisturearomacolourmeshpackchecked } from "@/components/about/AboutMoisturearomacolourmeshpackchecked";
import { AboutBuiltforbuyerswhorepeat } from "@/components/about/AboutBuiltforbuyerswhorepeat";
import { AboutNobasicmindsetEver } from "@/components/about/AboutNobasicmindsetEver";
import { AboutBeginatradeconversation } from "@/components/about/AboutBeginatradeconversation";
import { AboutPullQuote } from "@/components/about/AboutPullQuote";
import { AboutCta } from "@/components/about/AboutCta";

const About = () => (
  <Layout>
    <PageHero eyebrow="About Shaarav" title="A modern Indian spice house with editorial discipline." subtitle="Shaarav Global Add EXIM connects deep Indian spice origins with the standards international buyers expect." image={farmerField} />
    <AboutIntro />
    <AboutJourney />
    <AboutPullQuote />
    <AboutCta />
  </Layout>
);

export default About;
