import React, { useState } from "react";
import AdminDashboard from "./admindashboard";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { ChevronDownIcon, CheckIcon, PlusIcon } from "@heroicons/react/24/outline";
import EnhancedTable from "../../components/table";

function RawInventory() {

  return (
    <AdminDashboard>
      <div className="bg-c5 pb-5">
        <div className="z-150 ml-5 mb-5 mr-5 bg-c5 pt-10 h-[650px] rounded-2xl text-c3 hover:text-c1">
          <Card
            className="flex flex-col mb-6 justify-items-center h-[800px] sm:w-auto bg-c2 rounded-2xl z-80"
            shadow={false}
          >
            <div className="mb-2 gap-5 flex flex-col">
              <div className="gap-80 right-0 mr-10 w-[800px] flex-cols grid-cols-2 grid">
                <Typography className="text-2xl mt-5 ml-10 text-black font-bold font-[Montserrat]">
                  Raw Inventory
                </Typography>
                <Link to="/addRawInventory">
                <PlusIcon className="text-c4 bg-c2 rounded-2xl font-bold ml-4 mt-6 absolute w-5 h-5" />
                  <Button className=" right-0  mt-3 w-[260px] ml-1 pl-10 items-center hover:bg-deep-orange-900 bg-c3 rounded-3xl hover:text-c2 text-white text-md font-[Montserrat]">
                    Add Raw Stock
                  </Button>
                  
                </Link>
              </div>
              <div className="gap-20 mr-10 w-[850px] flex-cols">
                <EnhancedTable />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </AdminDashboard>
  );
}

export default RawInventory;
