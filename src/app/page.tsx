import { CreateProductForm } from "@/features/products-list/page/create-product-form";
import { ProductsList } from "@/features/products-list/page/products-list";
import { Button } from "@/shared/ui/button";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col  p-8">
      <h1 className="text-3xl mb-2">Products</h1>
      <CreateProductForm
        revalidatePagePath="/"
        className="max-w-[300px] mb-10"
      />
      <ProductsList revalidatePagePath="/" />
      <h1>Hello world</h1>
      <Button>Удалить</Button>
    </main>
  );
}
