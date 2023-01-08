import { createBrowserRouter } from "react-router-dom";
import { LoadProductAndApi } from "../../loaders/LoadProductAndApi";
import About from "../about/About";
import Inventory from "../inventory/Inventory";
import Main from "../layout/Main";
import Orders from "../orders/Orders";
import Shop from "../Shop/Shop";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Shop></Shop>,
        loader : ()=> fetch('products.json')
      },
      { 
        path: "orders", 
        element: <Orders></Orders>,
        loader : LoadProductAndApi,
     },
      { path: "inventory", element: <Inventory></Inventory> },
      { path: "about", element: <About></About> },
    ],
  },
]);
export default router;
