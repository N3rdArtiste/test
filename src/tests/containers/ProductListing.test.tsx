import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { productsMock } from "../mockData/productsMock";
import { ProductListing } from "../../containers/ProductListing/ProductListing";

test("renders ProductListing correctly", () => {
  const mockCallBack = jest.fn();
  const { getByText, getAllByText } = render(
    <ProductListing onAddToCartClick={mockCallBack} data={productsMock} />
  );
  productsMock.forEach((product, index) => {
    expect(getByText(product.name)).toBeInTheDocument();
    expect(getAllByText("Add to Cart")[index]).toBeInTheDocument();
  });
});

it('should execute callback on clicking "add to cart" button', () => {
  const mockCallBack = jest.fn();
  const { getAllByText } = render(
    <ProductListing onAddToCartClick={mockCallBack} data={productsMock} />
  );
  fireEvent.click(getAllByText("Add to Cart")[0]);
  expect(mockCallBack).toBeCalled();
});
