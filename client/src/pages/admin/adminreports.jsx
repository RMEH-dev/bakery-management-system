import React from "react";
import AdminDashboard from "./admindashboard";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

function AdminReports() {
  return (
    <AdminDashboard>
      <Card
        className="inset-0 flex flex-col mx-10 mb-6 justify-items-center h-[820px] 2xl:w-[1280px] sm:w-auto bg-gradient-to-tr from-c4 to-c1 rounded-2xl"
        shadow={false}
      >
        <form className="ml-[25px] mt-5 mb-2 w-[300px] 2xl:w-[800px] h-150 max-w-screen-lg sm:w-96">
          <div className="mb-2 flex flex-col gap-6">
            <Typography className=" text-xl text-black font-bold font-[Montserrat]">
              Order Details
            </Typography>
            <Typography className="pl-2 bg-c5 w-[520px] rounded-2xl text-black font-bold text-lg font-[Montserrat]">
              Product
            </Typography>
            <div className="ml-1 -mt-4 bg-c3 w-[510px] h-1 rounded-2xl"></div>
            <div className="mt-3 grid flex grid-cols-2 gap-5">
              <Typography className="pl-2 w-[520px] rounded-2xl text-black font-semibold text-lg font-[Montserrat]">
                Product 1
              </Typography>
              <Typography className="pl-2 w-[520px] rounded-2xl text-black font-semibold text-lg font-[Montserrat]">
                Rs. 500.00
              </Typography>
              <Typography className="pl-2 w-[520px] rounded-2xl text-black font-semibold text-lg font-[Montserrat]">
                Product 2
              </Typography>
              <Typography className="pl-2 w-[520px] rounded-2xl text-black font-semibold text-lg font-[Montserrat]">
                Rs. 1000.00
              </Typography>
            </div>
            <div className="mt-3 grid flex grid-cols-2 gap-5">
              <Typography className="mb-3 pl-2 w-[520px] bg-c5 rounded-2xl text-black font-semibold text-lg font-[Montserrat]">
                Sub Total
              </Typography>
              <Typography className="mb-3  text-black font-semibold text-lg font-[Montserrat]">
                Rs. 1500.00
              </Typography>
            </div>
            <Typography className=" pl-2 w-[520px] bg-c5 rounded-2xl text-black font-semibold text-lg font-[Montserrat]">
              Discount Code
            </Typography>
            <Input
              className="h-5 ml-1 mt-1 w-[180px] text-c1 font-semibold text-md font-[Montserrat]"
              type="currency"
              placeholder="Enter Discount Code"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <div className="grid flex grid-cols-2 gap-5">
              <Typography className="mb-3 pl-2 w-[520px] bg-c5 rounded-2xl text-black font-semibold text-lg font-[Montserrat]">
                Total
              </Typography>
              <Typography className="mb-3  text-black font-semibold text-lg font-[Montserrat]">
                Rs. 1250.00
              </Typography>
            </div>
          </div>
          <Link to="/orderSuccess">
            <Button className="mt-4 w-[520px] hover:bg-deep-orange-900 bg-c3 rounded-3xl text-white text-xl font-[Montserrat]">
              Pay Total
            </Button>
          </Link>
        </form>
      </Card>
    </AdminDashboard>
  );
}

export default AdminReports;
