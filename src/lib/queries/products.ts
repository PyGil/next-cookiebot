import { Product, ProductsResponse } from "@/types/product";

export async function getProducts(
  limit: number,
  skip: number = 0
): Promise<ProductsResponse> {
  const response = await fetch(
    `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
  );

  if (!response.ok) {
    throw new Error(
      `HTTP error! Status: ${response.status} - ${response.statusText}`
    );
  }

  return response.json();
}

export async function getProduct(id: number): Promise<Product> {
  const response = await fetch(`https://dummyjson.com/products/${id}`);

  if (!response.ok) {
    throw new Error(
      `HTTP error! Status: ${response.status} - ${response.statusText}`
    );
  }

  return response.json();
}
