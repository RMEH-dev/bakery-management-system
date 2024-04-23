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
import QuantityBtn from "./quantitybtn";

const TABLE_HEAD = ["Product", "Price", "Quantity", "SubTotal"];
 
const TABLE_ROWS = [
  {
    Product: "",
    Price: "",
    Quantity: "",
    SubTotal:"",
  },
];

export function Cart() {
  const products = [1, 2, 3, 4];
  return (
    <div>
      <MegaMenuWithHover />
      <div className=" bg-white w-[600px] h-[1000px] pb-36 lg:w-auto md:w-auto sm:w-auto sm:h-auto sm:text-wrap sm:text-md">
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
        <Card className="mt-20 ml-20 justify-left w-[750px] h-[500px] z-120 flex bg-c4">
          {/* <Typography className="pl-12 pt-5 text-2xl text-black font-bold font-[Montserrat]">
              Log In
            </Typography>
            <Typography className="text-black mt-0 font-medium font-[Montserrat] pl-12 pt-2">
              To taste the flavors of freshness!
            </Typography> */}
          <table className=" bg-c2 w-[750px] min-w-max table-auto rounded-xl">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-b items-center justify-center rounded-tr-xl rounded-tl-xl border-c3 bg-c3 p-4"
                  >
                    <Typography
                      variant="small"
                      color="white"
                      className="text-lg justify-center place-items-center font-bold leading-none opacity-90"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TABLE_ROWS.map(({ Product, Price, Quantity, SubTotal }, index) => {
                const isLast = index === TABLE_ROWS.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";

                return (
                  <tr key={Product}>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {Product}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {Price}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal pl-16 justify-center items-center"
                      >
                         <QuantityBtn/>

                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {SubTotal}
                      </Typography>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Card>
      </div>
      <FooterWithSocialLinks />
    </div>
  );
}
