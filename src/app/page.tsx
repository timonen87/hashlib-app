import { CreateProductForm } from "@/features/products-list/pub/create-product-form";
import { ProductsList } from "@/features/products-list/pub/products-list";
import { Button } from "@/shared/ui/button";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col  p-8">
      <h1 className="text-3xl mb-2">App name New</h1>

      <CreateProductForm
        revalidatePagePath="/"
        className="max-w-[300px] mb-10"
      />

      <ProductsList revalidatePagePath="/" />
    </main>
  );
}
