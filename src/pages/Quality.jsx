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

import { QualityIntro } from "@/components/quality/QualityIntro";
import { QualityRawmaterialintake } from "@/components/quality/QualityRawmaterialintake";
import { QualityCleaningsorting } from "@/components/quality/QualityCleaningsorting";
import { QualityLowheatgrinding } from "@/components/quality/QualityLowheatgrinding";
import { QualityBatchlaboratory } from "@/components/quality/QualityBatchlaboratory";
import { QualityPackagingintegrity } from "@/components/quality/QualityPackagingintegrity";
import { QualityTraceabilitychain } from "@/components/quality/QualityTraceabilitychain";
import { QualityBuyerdocumentation } from "@/components/quality/QualityBuyerdocumentation";
import { QualityContinuousreview } from "@/components/quality/QualityContinuousreview";
import { QualityPullQuote } from "@/components/quality/QualityPullQuote";
import { QualityCta } from "@/components/quality/QualityCta";

const Quality = () => (
  <Layout>
    <PageHero eyebrow="Quality" title="Measured freshness. Controlled process. Confident dispatch." subtitle="Each shipment passes through a defined chain of checks — from products to sealed cartons." image={qualityLab} />
    <QualityIntro />
    <QualityRawmaterialintake />
    <QualityCleaningsorting />
    <QualityLowheatgrinding />
    <QualityBatchlaboratory />
    <QualityPackagingintegrity />
    <QualityTraceabilitychain />
    <QualityBuyerdocumentation />
    <QualityContinuousreview />
    <QualityPullQuote />
    <QualityCta />
  </Layout>
);

export default Quality;
