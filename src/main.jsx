import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./assets/Component/Home";
import Root from "./assets/Routes/root";
import ErrorElement from "./assets/Component/ErrorElement";
import AddProduct from "./assets/Component/AddProduct";
import Login from "./assets/Component/login";
import Contact from "./assets/Component/Contact";
import About from "./assets/Component/About";
import AuthProvider from "./Provider/AuthProvider";
import Registration from "./assets/Component/Registration";
import CarsBrand from "./assets/Component/SingleCarsBrand";
import SingleCarsBrand from "./assets/Component/SingleCarsBrand";
import PrivetRoute from "./Provider/PrivetRoute";
import CarsDetails from "./assets/Component/CarsDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    // errorElement: <ErrorElement></ErrorElement>,
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
        loader: ({params})=>fetch(`http://localhost:5000/cars/${params.brandName}`)
      },
      {
        path: "/cars/:brandName/:id",
        element:<PrivetRoute><CarsDetails/></PrivetRoute>,
        loader: ({params})=>fetch(`http://localhost:5000/cars/${params.brandName}/${params._id}`)
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
