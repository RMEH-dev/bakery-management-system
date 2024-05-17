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
import CustomerProfile from "./pages/customer/profile.jsx";
import AccountDetails from "./components/profile/accountdetails.jsx";
import Address from "./components/profile/address.jsx";
import MyOrders from "./components/profile/myorders.jsx";
import LogOut from "./components/profile/logout.jsx";
import LostPassword from "./components/profile/lostpassword.jsx";
import BillingAddress from "./components/profile/billingaddress.jsx";
import ShippingAddress from "./components/profile/shippingaddress.jsx";
import { Cart } from "./components/cart.jsx";
import { ShoppingCart } from "./components/shoppingcart.jsx";
import { Checkout } from "./components/checkout.jsx";
import OrderSuccess from "./components/ordersuccess.jsx";
import AdminDashboard from "./pages/admin/admindashboard.jsx";
import AdminReports from "./pages/admin/adminreports.jsx";
import RawInventory from "./pages/admin/rawInventory.jsx";
import AddRawInventory from "./pages/admin/addRawInventory.jsx";
import ProInventory from "./pages/proinventory.jsx";
import AddProInventory from "./pages/addproinventory.jsx";
import StaffReports from "./pages/staff/staffreports.jsx";
import ProInventoryStaff from "./pages/staff/staffproinventory.jsx";
import AddProInventoryStaff from "./pages/staff/addproinventorystaff.jsx";
import RawStockUsage from "./pages/rawStockUsage.jsx";
import AddRawStockUsage from "./pages/addRawStockUsage.jsx";


const router = createBrowserRouter([
  { path: "/", element: <Home /> },
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
  { path: "/adminDashboard", element: <AdminReports />},
  { path: "/staffDashboard", element: <StaffReports />},
  { path: "/rawInventory", element: <RawInventory />},
  { path: "/addRawInventory", element: <AddRawInventory />},
  { path: "/editRawInventory/:id", element: <AddRawInventory />},
  { path: "/rawStockUsage", element: <RawStockUsage />},
  { path: "/addRawStockUsage", element: <AddRawStockUsage />},
  { path: "/proInventory", element: <ProInventory/>},
  { path: "/addProInventory", element: <AddProInventory />},
  { path: "/proInventoryStaff", element: <ProInventoryStaff/>},
  { path: "/addProInventoryStaff", element: <AddProInventoryStaff />},
  { path: "/signUp", element: <SignUp /> },
  { path: "/logIn", element: <LogIn /> },
  { path: "/cart", element: <Cart /> },
  { path: "/shoppingCart", element: <ShoppingCart /> },
  { path: "/checkout", element: <Checkout /> },
  { path: "/orderSuccess", element: <OrderSuccess /> },
  { path: "/profileUser", element: <CustomerProfile /> },
  { path: "/profileUser/AccountDetails", element: <AccountDetails /> },
  { path: "/profileUser/Addresses", element: <Address /> },
  { path: "/profileUser/Addresses/BillingAddress", element: <BillingAddress /> },
  { path: "/profileUser/Addresses/ShippingAddress", element: <ShippingAddress /> },
  { path: "/profileUser/MyOrders", element: <MyOrders /> },
  { path: "/profileUser/LogOut", element: <LogOut /> },
  { path: "/profileUser/LostPassword", element: <LostPassword /> },
  { path: "*", element: <h3>Error 404: Page Not Available</h3> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
