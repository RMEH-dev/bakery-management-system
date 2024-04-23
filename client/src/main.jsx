import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
import Home from "./pages/customer/home.jsx";
import Products from "./pages/customer/products.jsx";
import SignUp from "./pages/signup.jsx";
import LogIn from "./pages/login.jsx";
import { Cart  } from "./components/cart.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  // {
  //   path: "/products",
  //   element: <Products/>,
  // },
  {
    path: "/products",
    element: <Products />,
    children: [
      {
        path: "/products/Breads&Buns",
        element: <Products />,
        children: [
          {
            path: "/products/Breads&Buns/:Breads&BunsId",
            element: <Products />,
          },
        ],
      },
    ],
  },
  {
    path: "/signUp",
    element: <SignUp />,
  },
  {
    path: "/logIn",
    element: <LogIn />,
  },
  {
    path: '/cart',
    element: <Cart/>,
  },
  {
    path: '*',
    element: <h3> Error 404: Page Not Available</h3>,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
