import React, { Fragment } from "react";
import { MegaMenuWithHover } from "./navbar";
import { FooterWithSocialLinks } from "./footer";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";


export function Cart() {
  const products = [1, 2, 3, 4];
  return (
    <div>
      <MegaMenuWithHover />
      <div className=" bg-gray-300 w-[600px] h-[1000px] lg:w-auto md:w-auto sm:w-auto sm:h-auto sm:text-wrap sm:text-md">
        <Typography>
          <div className=" items-center justify-center flex font-bold font-[Montserrat] text-2xl pl-10 pt-10">
            <Link to="/cart">
              1. Shopping Cart &nbsp; {">"}
              {">"}{" "}
            </Link>
            <Link to="/checkout">
              &nbsp; 2. Checkout&nbsp; {">"}
              {">"}{" "}
            </Link>
            <Link to="/order_complete">&nbsp; 3. Order Complete &nbsp;</Link>
          </div>
        </Typography>
        <Card className="mt-20 ml-36 justify-left w-[750px] h-[500px] bg-white">
            <Typography className="pl-12 pt-5 text-2xl text-black font-bold font-[Montserrat]">
              Log In
            </Typography>
            <Typography className="text-black mt-0 font-medium font-[Montserrat] pl-12 pt-2">
              To taste the flavors of freshness!
            </Typography>
          </Card>
      </div>
      <FooterWithSocialLinks />
    </div>
  );
}
