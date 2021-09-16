import { useState, useEffect } from "react";
import { Cart } from "../containers/Cart/Cart";
import { ProductListing } from "../containers/ProductListing/ProductListing";
import getProducts from "../mockAPI/getProducts";
import { CartItem, Product, Status } from "../types";
import PageWrapper from "../ui/PageWrapper/PageWrapper";

const LOCALSTORAGEKEY = "eCart";

const Home = (): JSX.Element => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [status, setStatus] = useState<Status>(Status.LOADING);

  useEffect(() => {
    setStatus(Status.LOADING);
    if (localStorage.getItem(LOCALSTORAGEKEY)) {
      setCartItems(JSON.parse(localStorage.getItem(LOCALSTORAGEKEY) ?? "[]"));
    }
    getProducts
      .then((products) => {
        setProducts(products);
        setStatus(Status.DONE);
      })
      .catch((error) => {
        console.log(error);
        setStatus(Status.ERROR);
      });
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCALSTORAGEKEY, JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCartHandler = (product: Product) => {
    const items = cartItems.map((e) => {
      return { ...e };
    });
    const found = items.find((item) => item.name === product.name);
    if (found) {
      found.quantity += 1;
      setCartItems(items);
    } else {
      setCartItems([...items, { ...product, quantity: 1 }]);
    }
  };
  const removeFromCartHandler = (name: string) => {
    const items = cartItems.filter((item) => item.name !== name);
    setCartItems(items);
  };

  switch (status) {
    case Status.LOADING:
      return <h1>Loading</h1>;
    case Status.DONE:
      return (
        <PageWrapper>
          <div style={{ flexBasis: "80%" }}>
            <ProductListing
              onAddToCartClick={addToCartHandler}
              data={products}
            />
          </div>
          <div style={{ flexBasis: "20%" }}>
            <Cart
              onRemoveFromCartClick={removeFromCartHandler}
              data={cartItems}
            />
          </div>
        </PageWrapper>
      );
    case Status.ERROR:
      return <h1>Something went wrong!</h1>;
  }
};

export default Home;
