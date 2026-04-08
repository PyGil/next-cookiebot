import Products from "@/components/Products";
import { cookies } from "next/headers";
import { Suspense } from "react";

function ProductsLoader() {
  return <div>Products are loading...</div>;
}

export default async function Home() {
  // force dynamic rendering
  await cookies();

  return (
    <Suspense fallback={<ProductsLoader />}>
      <Products />
    </Suspense>
  );
}
