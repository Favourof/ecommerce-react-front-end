import About from "@/pages/About";
import Error404 from "@/pages/Error404";
import Home from "@/pages/Home";
import SingleProduct from "@/pages/products/slug";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import Products from "@/pages/products";
import CartProduct from "@/pages/cart/component/CartProduct";
import DashboardPage from "./DashboardPage";
import CreateProduct from "@/pages/dashboard/createProduct";
import AuthPage from "./AuthPage";
import SignUP from "@/pages/Auth/SignUp";
import LogIn from "@/pages/Auth/logIn";
import Dashbor from "@/pages/dashboard";

// import Footer from "@/myComponents/Footer";




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
        element:<Dashbor />,
      },
      {
        path: "createproduct",
        element: <CreateProduct />,
      },
      {
        path: "settings",
        element:  <h1>THis is the setting</h1>
      },
      {
        path: "support",
        element: <h1>THis is the support</h1>,
      },
    ],
  },

  {
    path: "/auth",
    element: <AuthPage />,
    children: [
      {
        index: true,
        element: <SignUP />,
      },
      {
        path: "login",
        element: <LogIn />,
      },
    ],
  },

  {
    path: "*",
    element: <Error404 />,
  },
]);
