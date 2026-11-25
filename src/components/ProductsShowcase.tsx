"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import type { ProductCategory, ProductItem } from "@/types/content";
import { ProductPreview } from "./ProductPreview";

const CATEGORIES: ("All" | ProductCategory)[] = [
  "All",
  "AI-Powered Platforms",
  "Intelligent Automation Tools",
  "Enterprise Software Solutions",
  "Research-Based Technology Products",
];

interface ProductsShowcaseProps {
  products: ProductItem[];
}

export function ProductsShowcase({ products }: ProductsShowcaseProps) {
  const [selectedCategory, setSelectedCategory] = useState<"All" | ProductCategory>("All");

  const filtered =
    selectedCategory === "All"
      ? products
      : products.filter((item) => item.category === selectedCategory);

  return (
    <div className="space-y-10">
      {/* Category Filter Pills */}
      <div
        role="tablist"
        aria-label="Filter products by category"
        className="flex flex-wrap items-center gap-2.5"
      >
        {CATEGORIES.map((category) => {
          const active = selectedCategory === category;
          return (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-xl px-4 py-2 text-sm font-medium transition-all duration-200 cursor-pointer ${
                active
                  ? "bg-navy text-white shadow-xs"
                  : "bg-soft-blue text-navy hover:bg-powder/80 border border-powder"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {filtered.map((product) => (
          <article
            key={product.id}
            id={product.slug}
            className="group flex flex-col justify-between rounded-2xl bg-white border border-powder/90 p-6 sm:p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-orange/60 hover:shadow-md"
          >
            <div>
              <ProductPreview type={product.previewType} />

              <div className="mt-6 flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-mono uppercase tracking-wider text-dark-text/70">
                  {product.category}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-soft-blue border border-powder px-3 py-1 text-xs font-semibold text-navy">
                  <span className="h-1.5 w-1.5 rounded-full bg-orange" aria-hidden="true" />
                  {product.status}
                </span>
              </div>

              <h3 className="mt-3 text-xl font-bold text-navy group-hover:text-orange transition-colors">
                {product.name}
              </h3>

              <p className="mt-2.5 text-sm leading-relaxed text-dark-text/80">
                {product.overview}
              </p>

              <ul className="mt-5 space-y-2 border-t border-powder/50 pt-4">
                {product.capabilities.map((cap) => (
                  <li key={cap} className="flex items-start gap-2.5 text-sm text-navy">
                    <Check className="h-4 w-4 text-orange shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{cap}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-powder/40 flex items-center justify-between gap-4">
              <span className="text-xs font-medium text-dark-text/65">
                Domain: {product.targetDomain}
              </span>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-orange hover:text-orange-hover transition-colors"
              >
                Request Briefing
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
