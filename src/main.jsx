import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import About from "./pages/About/About";
import Login from "./pages/Login/Login";
import NotFound from "./pages/ErrorPage/NotFound";
import Register from "./pages/Login/Register";
const url =
  "https://my-json-server.typicode.com/faarhaan10/react-sunglasses/sunglasses";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: async () => fetch(url),
      },
      {
        path: "/products",
        element: <Products></Products>,
        loader: async () => fetch(url),
      },
      {
        path: "product/:id",
        element: <ProductDetail></ProductDetail>,
        loader: async ({ params }) => fetch(`${url}/${params.id}`),
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
