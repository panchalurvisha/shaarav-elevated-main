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

import { SustainabilityIntro } from "@/components/sustainability/SustainabilityIntro";
import { SustainabilityClosertothefarm } from "@/components/sustainability/SustainabilityClosertothefarm";
import { SustainabilityCleanerhandlinglessloss } from "@/components/sustainability/SustainabilityCleanerhandlinglessloss";
import { SustainabilityHonestpackaging } from "@/components/sustainability/SustainabilityHonestpackaging";
import { SustainabilityEfficientshipping } from "@/components/sustainability/SustainabilityEfficientshipping";
import { SustainabilityQualitypreservation } from "@/components/sustainability/SustainabilityQualitypreservation";
import { SustainabilityLongtermpartners } from "@/components/sustainability/SustainabilityLongtermpartners";
import { SustainabilityDocumenteddecisions } from "@/components/sustainability/SustainabilityDocumenteddecisions";
import { SustainabilityQuietcontinuousimprovement } from "@/components/sustainability/SustainabilityQuietcontinuousimprovement";
import { SustainabilityPullQuote } from "@/components/sustainability/SustainabilityPullQuote";
import { SustainabilityCta } from "@/components/sustainability/SustainabilityCta";

const Sustainability = () => (
  <Layout>
    <PageHero eyebrow="Sustainability" title="Responsible sourcing. Less waste. More respect." subtitle="Quiet, sensible choices in sourcing, packing, and logistics that protect long-term quality." image={spiceMarket} />
    <SustainabilityIntro />
    <SustainabilityClosertothefarm />
    <SustainabilityCleanerhandlinglessloss />
    <SustainabilityHonestpackaging />
    <SustainabilityEfficientshipping />
    <SustainabilityQualitypreservation />
    <SustainabilityLongtermpartners />
    <SustainabilityDocumenteddecisions />
    <SustainabilityQuietcontinuousimprovement />
    <SustainabilityPullQuote />
    <SustainabilityCta />
  </Layout>
);

export default Sustainability;
