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
import { ProductsSHAARAVTurmericPowder } from "@/components/products/ProductsSHAARAVTurmericPowder";
import { ProductsSHAARAVRedChilli } from "@/components/products/ProductsSHAARAVRedChilli";
import { ProductsSHAARAVCoriander } from "@/components/products/ProductsSHAARAVCoriander";
import { ProductsSHAARAVGaramMasala } from "@/components/products/ProductsSHAARAVGaramMasala";
import { ProductsThesupportingcast } from "@/components/products/ProductsThesupportingcast";
import { ProductsBeyondtheeveryday } from "@/components/products/ProductsBeyondtheeveryday";
import { ProductsBuiltforeveryshelf } from "@/components/products/ProductsBuiltforeveryshelf";
import { ProductsFromsampletoshipment } from "@/components/products/ProductsFromsampletoshipment";
import { ProductsPullQuote } from "@/components/products/ProductsPullQuote";
import { ProductsCta } from "@/components/products/ProductsCta";

const Products = () => (
  <Layout>
    <PageHero eyebrow="Products" title="A curated catalogue of whole spices, powders, and house blends." subtitle="Built for fine grocers, supermarkets, importers, private labels, and food manufacturers." image={masalaBox} />
    <ProductsIntro />
    <ProductsSHAARAVTurmericPowder />
    <ProductsSHAARAVRedChilli />
    <ProductsSHAARAVCoriander />
    <ProductsSHAARAVGaramMasala />
    <ProductsThesupportingcast />
    <ProductsBeyondtheeveryday />
    <ProductsBuiltforeveryshelf />
    <ProductsFromsampletoshipment />
    <ProductsPullQuote />
    <ProductsCta />
  </Layout>
);

export default Products;
