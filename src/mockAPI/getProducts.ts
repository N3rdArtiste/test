import { Product } from "../types";

const products = [
  {
    name: "Sledgehammer",
    price: 125.75,
  },
  {
    name: "Axe",
    price: 190.5,
  },
  {
    name: "Bandsaw",
    price: 562.13,
  },
  {
    name: "Chisel",
    price: 12.9,
  },
  {
    name: "Hacksaw",
    price: 18.45,
  },
];

export default new Promise<Product[]>((resolve, reject) => {
  resolve(products);
});
