import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ProductItem } from "./product-item";

describe("product item", () => {
  it("should call delete callback", async () => {
    const onDelete = jest.fn();
    render(
      <ProductItem
        product={{
          id: "asdfasd ",
          description: "fasdf",
          name: "fas;dklfj",
        }}
        onDelete={onDelete}
      />
    );

    await userEvent.click(screen.getByText("Удалить"));

    expect(onDelete).toHaveBeenCalled();
  });
});
