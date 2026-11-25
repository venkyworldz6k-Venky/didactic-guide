import fs from "fs/promises";
import path from "path";
import siteConfigDefault from "@/data/site-config.json";
import productsDefault from "@/data/products.json";
import type { ProductItem, SiteConfig } from "@/types/content";

const SITE_CONFIG_PATH = path.join(process.cwd(), "src", "data", "site-config.json");
const PRODUCTS_PATH = path.join(process.cwd(), "src", "data", "products.json");

/**
 * Loads administrator-configurable company details from src/data/site-config.json,
 * with optional environment variable overrides for deployment flexibility.
 */
export async function getSiteConfig(): Promise<SiteConfig> {
  "use cache";
  let baseConfig = siteConfigDefault as SiteConfig;

  try {
    const raw = await fs.readFile(SITE_CONFIG_PATH, "utf-8");
    baseConfig = JSON.parse(raw) as SiteConfig;
  } catch {
    // Fallback to bundled JSON if filesystem read is unavailable
  }

  return {
    ...baseConfig,
    officialEmail: process.env.NEXT_PUBLIC_OFFICIAL_EMAIL || baseConfig.officialEmail,
    careersEmail: process.env.NEXT_PUBLIC_CAREERS_EMAIL || baseConfig.careersEmail,
  };
}

/**
 * Loads administrator-configurable product catalog from src/data/products.json.
 * Administrators can update src/data/products.json directly or via the protected API.
 */
export async function getProducts(): Promise<ProductItem[]> {
  "use cache";
  try {
    const raw = await fs.readFile(PRODUCTS_PATH, "utf-8");
    return JSON.parse(raw) as ProductItem[];
  } catch {
    return productsDefault as ProductItem[];
  }
}

export async function saveProducts(products: ProductItem[]): Promise<void> {
  await fs.writeFile(PRODUCTS_PATH, JSON.stringify(products, null, 2) + "\n", "utf-8");
}
