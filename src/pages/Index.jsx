import { ArrowRight, CheckCircle2, Globe2, Leaf, PackageCheck, ShieldCheck, Sparkles, Truck } from "lucide-react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import heroSpices from "@/assets/hero-spices-new.png";
import masalaBox from "@/assets/masala-box.jpg";
import productTurmeric from "@/assets/turmeric-bowl.png";
import productChili from "@/assets/chili-bowl.png";
import productCoriander from "@/assets/coriander-bowl.png";
import productGaram from "@/assets/garam-masala-bowl.png";
import farmerField from "@/assets/farmer-field-new.png";
import qualityLab from "@/assets/quality-lab-new.png";
import spiceMarket from "@/assets/market-spices-new.png";
import exportShip from "@/assets/export-ship-new.png";
import worldMap from "@/assets/world-map.jpg";
import mortar from "@/assets/mortar-new.png";
import macroTurmeric from "@/assets/premium-spices.png";
import macroChili from "@/assets/macro-chili-new.png";

import heroVideo from "@/assets/12351626_3840_2160_30fps.mp4";

import { ProductCarousel } from "@/components/ProductCarousel";
import { products as catalogProducts } from "@/lib/products";


import { Hero } from "@/components/home/Hero";
import { Mission } from "@/components/home/Mission";
import { PremiumRange } from "@/components/home/PremiumRange";
import { Catalogue } from "@/components/home/Catalogue";
import { ShaaravPack } from "@/components/home/ShaaravPack";
import { Sourcing } from "@/components/home/Sourcing";
import { QualityFirst } from "@/components/home/QualityFirst";
import { Process } from "@/components/home/Process";
import { ExportNetwork } from "@/components/home/ExportNetwork";
import { SensoryDepth } from "@/components/home/SensoryDepth";
import { PrivateLabel } from "@/components/home/PrivateLabel";
import { MarketIntelligence } from "@/components/home/MarketIntelligence";
import { Values } from "@/components/home/Values";
import { Logistics } from "@/components/home/Logistics";
import { BuyerConfidence } from "@/components/home/BuyerConfidence";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { Cta } from "@/components/home/Cta";

const Index = () => (
  <Layout>
    <Hero />
    <Mission />
    <PremiumRange />
    <Catalogue />
    <ShaaravPack />
    <Sourcing />
    <QualityFirst />
    <Process />
    <ExportNetwork />
    <SensoryDepth />
    <PrivateLabel />
    <MarketIntelligence />
    <Values />
    <Logistics />
    <BuyerConfidence />
    <TestimonialsSection />
    <Cta />
  </Layout>
);

export default Index;
