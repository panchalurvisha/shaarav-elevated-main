import React, { useState } from "react";
import { Link } from "react-router-dom";
import { products } from "@/lib/products";
import { ArrowRight, Filter } from "lucide-react";

export function ProductGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Whole Spices",
    "Powdered Spices",
    "Tea",
    "Coffee",
    "Millets",
    "Herbs and seeds"
  ];

  const getProductCategory = (id) => {
    // Map product IDs to their respective categories
    if (["black-pepper", "cardamom", "cinnamon", "clove", "turmeric-fingers", "whole-red-chillies"].includes(id)) {
      return "Whole Spices";
    }
    if (["turmeric-powder", "red-chilli", "coriander", "garam-masala", "cumin-powder", "kashmiri-chilli", "kitchen-king-masala", "chaat-masala", "pav-bhaji-masala", "biryani-masala", "jeera-powder"].includes(id)) {
      return "Powdered Spices";
    }
    if (["assam-tea", "tea-category"].includes(id)) {
      return "Tea";
    }
    if (["western-ghats-coffee", "coffee-category"].includes(id)) {
      return "Coffee";
    }
    if (["finger-millet", "millets-category"].includes(id)) {
      return "Millets";
    }
    if (["fennel-seeds", "mustard-seeds", "herbs-seeds-category"].includes(id)) {
      return "Herbs and seeds";
    }
    // Categories themselves can fall under their respective names
    if (id === "whole-spices-category") return "Whole Spices";
    if (id === "powdered-spices-category") return "Powdered Spices";
    return "Other";
  };

  // Filter out the category helper cards if not showing "All" or if we want clean product listing
  const filteredProducts = products.filter((p) => {
    if (selectedCategory === "All") {
      // Show everything except category helper items to keep it clean, or show everything
      return true;
    }
    return getProductCategory(p.id) === selectedCategory;
  });

  return (
    <section className="py-20 bg-background">
      <div className="container-x">
        <div className="mb-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <span className="eyebrow">Interactive Catalogue</span>
            <h2 className="display-md mt-4 text-cocoa">Browse our products</h2>
          </div>
          
          {/* Category Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            <Filter size={16} className="text-cocoa/40 shrink-0" />
            <div className="flex gap-1.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-xs uppercase tracking-wider px-4 py-2 border transition-all ${
                    selectedCategory === cat
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-paper text-cocoa/70 border-border hover:border-cocoa/30"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <Link
              key={product.id}
              to={`/products/${product.id}`}
              className="group bg-paper border border-border overflow-hidden hover:shadow-deep transition-all duration-300 flex flex-col h-full"
            >
              {/* Product Image */}
              <div className="aspect-[4/3] w-full overflow-hidden bg-surface relative border-b border-border">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>

              {/* Product Info */}
              <div className="p-6 flex flex-col flex-grow text-left">
                <span className="text-[10px] uppercase tracking-[0.2em] text-primary mb-2">
                  {getProductCategory(product.id) || "SHAARAV RANGE"}
                </span>
                <h3 className="font-display text-lg text-cocoa leading-tight font-semibold mb-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm text-cocoa/65 leading-relaxed font-sans line-clamp-2 mb-6">
                  {product.description}
                </p>
                <div className="mt-auto pt-4 border-t border-border flex items-center justify-between text-xs uppercase tracking-widest text-cocoa/80 group-hover:text-primary transition-colors">
                  <span>View Details</span>
                  <ArrowRight size={14} className="transform transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
