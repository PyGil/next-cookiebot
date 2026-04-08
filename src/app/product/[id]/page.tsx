import { getProduct } from "@/lib/queries/products";
import React from "react";

type ProductPageProps = {
  params: Promise<{ id: string }>;
};

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;

  const product = await getProduct(Number(id));

  return (
    <>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <p>Discount: ${product.discountPercentage}</p>
      <p>Rating: {product.rating}</p>
      <p>Stock: {product.stock}</p>
      <p>Tags: {product.tags.join(", ")}</p>
      <p>Brand: {product.brand}</p>
      <p>SKU: {product.sku}</p>
    </>
  );
}
