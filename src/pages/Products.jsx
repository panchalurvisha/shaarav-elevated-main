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

import { ProductsIntro } from "@/components/products/ProductsIntro";
import { ProductGrid } from "@/components/products/ProductGrid";
import { ProductsPullQuote } from "@/components/products/ProductsPullQuote";
import { ProductsCta } from "@/components/products/ProductsCta";

const Products = () => (
  <Layout>
    <PageHero eyebrow="Products" title="A curated catalogue of whole spices, powdered spices, tea, coffee, millets, and herbs." subtitle="Built for fine grocers, supermarkets, importers, and food manufacturers." image={masalaBox} />
    <ProductsIntro />
    <ProductGrid />
    <ProductsPullQuote />
    <ProductsCta />
  </Layout>
);

export default Products;
