import React from "react";
import "../index.css";
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
import { Link } from "react-router-dom";

import {
  Bars4Icon,
  GlobeAmericasIcon,
  NewspaperIcon,
  PhoneIcon,
  RectangleGroupIcon,
  SquaresPlusIcon,
  SunIcon,
  TagIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";

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

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = navListMenuItems.map(({ title }, key) => (
    <Link to="/products" key={key}>
      <MenuItem className="flex items-center gap-3 rounded-lg bg-deep-orange-300">
        <div>
          <Typography
            variant="h4"
            color="black"
            className="flex items-center text-sm  font-bold font-[Montserrat]"
          >
            {title} 
          </Typography>
        </div>
      </MenuItem>
    </Link>
  ));

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 40 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography
            as="div"
            variant="medium"
            className="font-bold font-[Montserrat] "
          >
            <ListItem
              className="flex items-center gap-1 py-2 pr-4 font-bold font-[Montserrat] text-black"
              color="black"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              All Products
              <ChevronDownIcon
                strokeWidth={2.5}
                color={"black"}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                color={"black"}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl bg-deep-orange-200 lg:block">
          <ul className="grid grid-cols-1 gap-y-2 outline-none outline-0 text-black">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}

function NavList() {
  // const [searchList, setSearchList] = useState({});
  // const [searchTask, setSearchTask] = useState("");

  // const handleChange = (event) => {
  //   setNewTask(event.target.value);
  // };

  // const addTask = (task) => {
  //   const newSearchList = [...searchList, searchTask]
  //   setSearchList(newSearchList);
  // };

  return (
    <List className="flex text-nowrap md:px-0 mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <Typography
        as="a"
        href="#"
        variant="medium"
        color="black"
        className="font-bold font-[Montserrat]"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">Home</ListItem>
      </Typography>
      <NavListMenu />
      <Typography
        as="a"
        href="#"
        variant="medium"
        color="black"
        className="font-bold font-[Montserrat]"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">About</ListItem>
      </Typography>
      <Typography
        as="a"
        href="#"
        variant="medium"
        color="black"
        className="font-bold font-[Montserrat]"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          Contact Us
        </ListItem>
      </Typography>
      <Typography
        as="a"
        href="#"
        variant="medium"
        color="black"
        className="font-bold font-[Montserrat] hover-bg-red-500"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          Outlets
        </ListItem>
      </Typography>
      <Typography
        as="a"
        href="#"
        variant="medium"
        color="black"
        className="font-bold font-[Montserrat] pl-10"
      >
        <div class="pl-5 flex items-center min-h-8 w-[280px] bg-deep-orange-200 text-black rounded-2xl">
          
          <input
            class="w-35 justify-left border-none bg-transparent py-1 placeholder:text-black text-black outline-none focus:outline-none "
            type="search"
            name="search"
            placeholder="Search..."
            // onChange={handleChange}
          />
          <button
            type="submit"
            class="m-1 rounded-3xl bg-deep-orange-900 px-2 py-2 text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>
        </div>
      </Typography>
      <Typography
        as="a"
        href="#"
        variant="medium"
        color="black"
        className="font-bold font-[Montserrat] hover-bg-red-500 md:pl-2 "
      >
        <ListItem className="flex items-center gap-2 py-2 lg:pl-4 pr-2">Login</ListItem>
      </Typography>
      <Typography color="black" className="font-bold font-[Montserrat]">
        <div className="flex items-center h-9 pl-1">|</div>
      </Typography>
      <Typography
        as="a"
        href="#"
        variant="medium"
        color="black"
        className="font-bold font-[Montserrat] hover-bg-red-500 pl-1 pr-5"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-2">
          SignUp
        </ListItem>
      </Typography>
      <Typography as="a" href="#">
        <button class="flex items-center justify-center bg-deep-orange-200 w-20 h-8 rounded-3xl text-black hover:bg-white duration-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
        </button>
      </Typography>

      <Typography as="a" href="#" className="pl-2">
        <button class="flex items-center justify-center bg-deep-orange-900 w-20 h-8 rounded-3xl text-white hover:bg-white hover:text-black duration-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </svg>
        </button>
      </Typography>
    </List>
  );
}

export function MegaMenuWithHover() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 1280 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar className="max-w-screen-3xl px-5 py-4 bg-deep-orange-600 rounded-none">
      <div className="flex items-center text-black ">
        <img src="./src/assets/logos/logo.jpg" class="w-20 h-20" alt="logo" />
        <Typography
          as="a"
          href="#"
          variant="h3"
          className="px-8 md:px-3 cursor-pointer py-1.5 lg:ml-2 font-[Montserrat]"
        >
          PERERA BAKERS
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        {/* <SearchBar /> */}
        <IconButton
          variant="text"
          color="black"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" color="black" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" color="black" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}
