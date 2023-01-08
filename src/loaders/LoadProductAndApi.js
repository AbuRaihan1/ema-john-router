import { getStoredCart } from "../utilities/fakedb";

export const LoadProductAndApi = async () => {
  const productsData = await fetch("products.json");
  const products = await productsData.json();
  const savedCart = getStoredCart();
  // console.log(savedCart);
  // console.log(products);
     
  for (const id in savedCart) {
    console.log(id);
  }
  return products;
};
