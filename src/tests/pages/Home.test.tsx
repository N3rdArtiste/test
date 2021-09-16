import { fireEvent, render } from "@testing-library/react";
import Home from "../../pages/Home";

test('on clicking "Add to Cart" button it should add product to the cart.', async () => {
  const { findByText, findAllByText } = render(<Home />);
  const addButton = await findAllByText("Add to Cart");
  fireEvent.click(addButton[0]);
  const removeButton2 = await findByText("Remove from Cart");
  expect(removeButton2).toBeInTheDocument();
});

test('on clicking "Remove from Cart" button it should remove product from the cart.', async () => {
  const { findByText, findAllByText } = render(<Home />);

  const addButton = await findAllByText("Add to Cart");
  fireEvent.click(addButton[0]);

  const removeButton2 = await findByText("Remove from Cart");
  fireEvent.click(removeButton2);
  expect(removeButton2).not.toBeInTheDocument();
});

test('on clicking "Add to Cart" button twice it should increase quantity to 2', async () => {
  const { findByText, findAllByText } = render(<Home />);

  const addButton = await findAllByText("Add to Cart");
  fireEvent.click(addButton[0]);

  const quantity = await findByText("Quantity: 1");
  expect(quantity).toBeDefined();

  fireEvent.click(addButton[0]);
  const quantity2 = await findByText("Quantity: 2");

  expect(quantity2).toBeDefined();
});

test("should set item in localStorage", async () => {
  jest.spyOn(window.localStorage.__proto__, "setItem");
  window.localStorage.__proto__.setItem = jest.fn();
  expect(localStorage.setItem).not.toHaveBeenCalled();
  const { findAllByText } = render(<Home />);
  const addButton = await findAllByText("Add to Cart");
  fireEvent.click(addButton[0]);
  expect(localStorage.setItem).toHaveBeenCalled();
});

test("should get item from localStorage", async () => {
  jest.spyOn(window.localStorage.__proto__, "getItem").mockReturnValueOnce("");
  window.localStorage.__proto__.getItem = jest.fn();
  const { findAllByText } = render(<Home />);
  await findAllByText("Add to Cart");
  expect(await localStorage.__proto__.getItem).toBeCalledWith("eCart");
  await localStorage.__proto__.getItem.mockRestore();
});
