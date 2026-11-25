import { NextResponse } from "next/server";
import { getProducts, saveProducts } from "@/lib/content";
import type { ProductItem } from "@/types/content";

export async function GET() {
  const products = await getProducts();
  return NextResponse.json({ products }, { status: 200 });
}

/**
 * Administrator-only endpoint to update product information in src/data/products.json.
 * Requires ADMIN_API_TOKEN to be configured in environment variables.
 */
export async function PUT(request: Request) {
  const expectedToken = process.env.ADMIN_API_TOKEN;
  if (!expectedToken) {
    return NextResponse.json(
      { error: "Admin API updates are disabled until ADMIN_API_TOKEN is configured." },
      { status: 403 }
    );
  }

  const authHeader = request.headers.get("authorization") || "";
  if (authHeader !== `Bearer ${expectedToken}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = (await request.json()) as { products?: ProductItem[] };
    if (!Array.isArray(body.products)) {
      return NextResponse.json(
        { error: "Request body must contain a products array." },
        { status: 400 }
      );
    }

    for (const item of body.products) {
      if (!item.id || !item.name || !item.category || !item.status) {
        return NextResponse.json(
          { error: "Each product must include id, name, category, and status." },
          { status: 400 }
        );
      }
    }

    await saveProducts(body.products);
    return NextResponse.json({ ok: true, count: body.products.length }, { status: 200 });
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON payload for product update." },
      { status: 400 }
    );
  }
}
