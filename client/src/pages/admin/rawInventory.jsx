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
import { ChevronDownIcon, CheckIcon } from "@heroicons/react/24/outline";
import EnhancedTable from "../../components/table";

function RawInventory() {
  const [selectedOption1, setSelectedOption1] = useState(null);
  const [selectedOption2, setSelectedOption2] = useState(null);
  const [selectedOption3, setSelectedOption3] = useState(null);
  const [selectedOption4, setSelectedOption4] = useState(null);
  const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
  const [isDropdownOpen3, setIsDropdownOpen3] = useState(false);
  const [isDropdownOpen4, setIsDropdownOpen4] = useState(false);

  const handleSelect1 = (option) => {
    setSelectedOption1(option);
    setIsDropdownOpen1(false);
  };

  const handleSelect2 = (option) => {
    setSelectedOption2(option);
    setIsDropdownOpen2(false);
  };

  const handleSelect3 = (option) => {
    setSelectedOption3(option);
    setIsDropdownOpen3(false);
  };

  const handleSelect4 = (option) => {
    setSelectedOption4(option);
    setIsDropdownOpen4(false);
  };
  return (
    <AdminDashboard>
      <div className="bg-c5 pb-5">
        <div className="z-150 ml-5 mb-5 mr-5 bg-c5 pt-10 h-[650px] rounded-2xl text-c3 hover:text-c1">
          <Card
            className="flex flex-col mb-6 justify-items-center h-[800px] sm:w-auto bg-c2 rounded-2xl z-80"
            shadow={false}
          >
            <div className="mb-2 gap-5 flex flex-col">
              <Typography className="text-2xl mt-5 ml-10 text-black font-bold font-[Montserrat]">
                Raw Inventory
              </Typography>

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
