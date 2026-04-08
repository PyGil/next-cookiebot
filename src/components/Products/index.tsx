import cn from "@/lib/cn";
import { getProducts } from "@/lib/queries/products";
import { ComponentProps } from "react";
import ProductCard from "./ProductCard";

const PRODUCT_LIMIT = 30;

export default async function Products({
  className,
  ...props
}: ComponentProps<"div">) {
  const { products } = await getProducts(PRODUCT_LIMIT);

  if (!products?.length) return null;

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
        className
      )}
      {...props}
    >
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}
