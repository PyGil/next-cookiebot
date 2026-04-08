import { Product } from "@/types/product";
import Link from "next/link";

export default function ProductCard({
  id,
  title,
  description,
  price,
}: Product) {
  return (
    <Link
      href={`/product/${id}`}
      className="border border-gray-200 rounded-md p-4 space-y-2"
    >
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-sm">{description}</p>
      <p className="text-sm font-bold">Price: ${price}</p>
    </Link>
  );
}
