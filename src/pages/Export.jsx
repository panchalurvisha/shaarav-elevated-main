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

import { ExportIntro } from "@/components/export/ExportIntro";
import { ExportFiveregionsonesupplystandard } from "@/components/export/ExportFiveregionsonesupplystandard";
import { ExportCleanpaperwork } from "@/components/export/ExportCleanpaperwork";
import { ExportRetailtobulk } from "@/components/export/ExportRetailtobulk";
import { ExportEndtoendcoordination } from "@/components/export/ExportEndtoendcoordination";
import { ExportDestinationalignedlabels } from "@/components/export/ExportDestinationalignedlabels";
import { ExportRepeatablesupply } from "@/components/export/ExportRepeatablesupply";
import { ExportPredictabletimelines } from "@/components/export/ExportPredictabletimelines";
import { ExportBuiltforrecurringtrade } from "@/components/export/ExportBuiltforrecurringtrade";
import { ExportPullQuote } from "@/components/export/ExportPullQuote";
import { ExportCta } from "@/components/export/ExportCta";

const Export = () => (
  <Layout>
    <PageHero eyebrow="Export" title="India-origin products, prepared for international shelves." subtitle="Cartons, documents, pack formats, and logistics support engineered for global trade desks." image={exportShip} />
    <ExportIntro />
    <ExportFiveregionsonesupplystandard />
    <ExportCleanpaperwork />
    <ExportRetailtobulk />
    <ExportEndtoendcoordination />
    <ExportDestinationalignedlabels />
    <ExportRepeatablesupply />
    <ExportPredictabletimelines />
    <ExportBuiltforrecurringtrade />
    <ExportPullQuote />
    <ExportCta />
  </Layout>
);

export default Export;
