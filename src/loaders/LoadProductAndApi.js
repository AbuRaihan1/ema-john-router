import { getStoredCart } from "../utilities/fakedb";

export const LoadProductAndApi = async () => {
  const productsData = await fetch("products.json");
  const products = await productsData.json();
  const savedCart = getStoredCart();

  const prevCart = [];
  for (const id in savedCart) {
    const addedProduct = products.find((product) => product.id === id);
    if (addedProduct) {
      const quantity = savedCart[id];
      addedProduct.quantity = quantity;
      prevCart.push(addedProduct);
    }
  }
  return { products, prevCart };
};
