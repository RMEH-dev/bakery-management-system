import '../../index.css';
import React from 'react';
import { Link } from "react-router-dom";
import {
    Navbar,
    Collapse,
    Typography,
    IconButton,
    List,
    ListItem,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
  } from "@material-tailwind/react";
  import {
    ChevronDownIcon,
    Bars3Icon,
    XMarkIcon,
  } from "@heroicons/react/24/outline";


const navListMenuItems = [
    {
      title: "Breads & Buns",
    },
    {
      title: "Pastries",
    },
    {
      title: "Cakes",
    },
    {
      title: "Cupcakes",
    },
    {
      title: "Sweets & Desserts",
    },
    {
      title: "Platters",
    },
    {
      title: "Beverages",
    },
  ];

  export const ProductList = () => {
    return (
      <ul className="pl-6 pt-5 pb-5 w-[400px] rounded-r-2xl bg-deep-orange-600 bg-opacity-50 flex flex-col space-y-1">
        {navListMenuItems.map((item) => (
          <li key={item.title} className="px-4 py-2 hover:text-white">
            <Link to={`/bakery/${item.title.toLowerCase()}`}>
              <span className="text-lg font-bold font-[Montserrat]">{item.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    );
  };
  
