import Products from "@/components/Products";
import { Suspense } from "react";

function ProductsLoader() {
  return <div>Products are loading...</div>;
}

export default function Home() {
  return (
    <Suspense fallback={<ProductsLoader />}>
      <Products />
    </Suspense>
  );
}
