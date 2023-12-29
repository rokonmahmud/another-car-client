import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./assets/Component/Home";
import Root from "./assets/Routes/root";
import ErrorElement from "./assets/Component/ErrorElement";
import AddProduct from "./assets/Component/AddProduct";

import Contact from "./assets/Component/Contact";
import About from "./assets/Component/About";
import AuthProvider from "./Provider/AuthProvider";
import Registration from "./assets/Component/Registration";
import SingleCarsBrand from "./assets/Component/SingleCarsBrand";
import PrivetRoute from "./Provider/PrivetRoute";
import CarsDetails from "./assets/Component/CarsDetails";
import CartCard from "./assets/Component/CartCard";
import UpdateCars from "./assets/Component/UpdateCars";
import Login from "./assets/Component/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorElement></ErrorElement>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/Cars.json"),
      },
      {
        path: "/addProduct",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path:"/registration",
        element:<Registration></Registration>,
      },
      {
        path: "/cars/:brandName",
        element:<PrivetRoute><SingleCarsBrand/></PrivetRoute>,
        loader: ({params})=>fetch(`https://car-heaven-server.vercel.app/cars/${params.brandName}`)
      },
      {
        path: "/cars/:brandName/:id",
        element:<PrivetRoute><CarsDetails/></PrivetRoute>,
        loader: ({params})=>fetch(`https://car-heaven-server.vercel.app/cars/${params.brandName}/${params.id}`)
      },
      {
        path: "/updatecars/:brandName/:id",
        element: <PrivetRoute><UpdateCars/></PrivetRoute>,
        loader: ({params})=> fetch(`https://car-heaven-server.vercel.app/cars/${params.brandName}/${params.id}`)
      },
      {
        path: "/my-cart",
        element:  <PrivetRoute><CartCard/></PrivetRoute>,
        loader: ()=> fetch('https://car-heaven-server.vercel.app/my-cart')
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
