import { revalidatePath } from "next/cache";
import { productsRepository } from "../products.repository";
import { ProductItem } from "../ui/product-item";
export async function ProductsList({
  revalidatePagePath,
}: {
  revalidatePagePath: string;
}) {
  const productList = await productsRepository.getProductsList();

  const handleDeleteAction = async (productId: string) => {
    "use server";
    await productsRepository.deleteProductsElement({ id: productId });
    revalidatePath(revalidatePagePath);
  };
  return (
    <div className="flex flex-col gap-3">
      {productList.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          onDelete={handleDeleteAction.bind(null, product.id)}
        />
      ))}
    </div>
  );
}
