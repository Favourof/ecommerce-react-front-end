import About from "@/pages/About";
import Error404 from "@/pages/Error404";
import Home from "@/pages/Home";
import SingleProduct from "@/pages/products/slug";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import DashboardPage from "./DashboardPage";
import Products from "@/pages/products";
<<<<<<< HEAD
import CartProduct from "@/pages/cart/component/CartProduct";
import Footer from "@/myComponents/Footer";
import CreateProduct from "@/pages/dashboard/createProduct";

=======
import CreateProduct from "@/pages/dashboard/createProduct";
>>>>>>> 8d49bdc62ff996226b93e3ef038688f6d46d1a0c

export const route = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about-us",
        element: <About />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "product/:id",
        element: <SingleProduct />,
      },
      {
        path: "cart",
        element: <CartProduct />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
    children: [
      {
        index: true,
        element: <h1>THis is the dashboard</h1>,
      },
      {
        path: "create-product",
        element: <CreateProduct />,
      },
      {
        path: "settings",
        element:  <h1>THis is the setting</h1>
      },
      {
        path: "CraeteProduct",
        element: <CreateProduct />
      },
      {
        path: "support",
        element: <h1>THis is the support</h1>,
      },
    ],
  },

  {
    path: "*",
    element: <Error404 />,
  },
]);
