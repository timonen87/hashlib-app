import { CreateProductForm } from "@/features/products-list/pub/create-product-form";
import { ProductsList } from "@/features/products-list/pub/products-list";
import { Button } from "@/shared/ui/button";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col  p-12">
      <CreateProductForm
        revalidatePagePath="/"
        className="max-w-[300px] mb-20"
      />

      <ProductsList revalidatePagePath="/" />
    </main>
  );
}
