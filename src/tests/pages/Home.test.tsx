import { fireEvent, render } from "@testing-library/react";
import Home from "../../pages/Home";

test('on clicking "Add to Cart" button it should add product to the cart.', () => {
  const { getAllByText, queryAllByText } = render(<Home />);
  expect(queryAllByText("Remove from Cart")[0]).not.toBeDefined();

  fireEvent.click(getAllByText("Add to Cart")[0]);
  expect(getAllByText("Remove from Cart")[0]).toBeInTheDocument();
});

test('on clicking "Remove from Cart" button it should remove product from the cart.', () => {
  const { getAllByText, queryAllByText } = render(<Home />);

  fireEvent.click(getAllByText("Add to Cart")[0]);

  expect(getAllByText("Remove from Cart")[0]).toBeInTheDocument();

  fireEvent.click(getAllByText("Remove from Cart")[0]);
  expect(queryAllByText("Remove from Cart")[0]).not.toBeDefined();
});

test('on clicking "Add to Cart" button twice it should increase quantity to 2', () => {
  const { getAllByText, queryAllByText } = render(<Home />);
  expect(queryAllByText("Quantity: 1")[0]).not.toBeDefined();

  fireEvent.click(getAllByText("Add to Cart")[0]);
  expect(queryAllByText("Quantity: 1")[0]).toBeDefined();

  fireEvent.click(getAllByText("Add to Cart")[0]);
  expect(queryAllByText("Quantity: 2")[0]).toBeDefined();
});

test("should set item in localStorage", () => {
  jest.spyOn(window.localStorage.__proto__, "setItem");
  window.localStorage.__proto__.setItem = jest.fn();
  expect(localStorage.setItem).not.toHaveBeenCalled();
  const { getAllByText } = render(<Home />);
  fireEvent.click(getAllByText("Add to Cart")[0]);
  expect(localStorage.setItem).toHaveBeenCalled();
});

test("should get item from localStorage", () => {
  jest.spyOn(window.localStorage.__proto__, "getItem").mockReturnValueOnce("");
  window.localStorage.__proto__.getItem = jest.fn();
  render(<Home />);
  expect(localStorage.__proto__.getItem).toBeCalledWith("eCart");
  localStorage.__proto__.getItem.mockRestore();
});
