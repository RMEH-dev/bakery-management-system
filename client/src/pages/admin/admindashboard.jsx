import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import PageLayout from "../../components/pagelayout";
import { Typography, Button } from "@material-tailwind/react";
import { ChevronDownIcon, CheckIcon } from "@heroicons/react/24/outline";

function AdminDashboard({ children }) {
  const [selectedOption2, setSelectedOption2] = useState(null);
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);

  const handleSelect2 = (option) => {
    setSelectedOption2(option);
    setIsDropdownOpen2(false);
  };

  return (
    <PageLayout className="">
      <div className="flex justify-between items-center bg-gradient-to-b from-c1 to-c3 text-c2 w-[800px] h-[100px]">
        <Link to="/adminDashboard">
        <h1 className="ml-10 pt-5 pb-5 text-4xl font-bold font-[Montserrat]">
          Hi Mr. Perera
        </h1>
        </Link>
        <div className="mr-4">
          <Typography
            className="cursor-pointer justify-center text-center w-[200px] bg-c5 rounded-2xl text-black font-semibold text-lg font-[Montserrat]"
            onClick={() => setIsDropdownOpen2(!isDropdownOpen2)}
          >
            Outlet
            <ChevronDownIcon className="ml-36 -mt-6 w-5 h-5" />
            {isDropdownOpen2 && (
              <ul className="mt-2 fixed z-250 cursor-pointer rounded-2xl text-c3 w-[200px] text-lg font-bold font-[Montserrat] bg-c2">
                <li
                  onClick={() => handleSelect2("Ganemulla")}
                  className={
                    selectedOption2 === "Ganemulla"
                      ? "bg-c4 flex rounded-2xl justify-between items-center p-4"
                      : "flex justify-between items-center p-4"
                  }
                >
                  Ganemulla
                  {selectedOption2 === "Ganemulla" && (
                    <CheckIcon className="w-5 h-5 text-green-500" />
                  )}
                </li>
                <li
                  onClick={() => handleSelect2("Kandana")}
                  className={
                    selectedOption2 === "Kandana"
                      ? "bg-c4 flex rounded-2xl justify-between items-center p-4"
                      : "flex justify-between items-center p-4"
                  }
                >
                  Kandana
                  {selectedOption2 === "Kandana" && (
                    <CheckIcon className="w-5 h-5 text-green-500" />
                  )}
                </li>
                <li
                  onClick={() => handleSelect2("Bopitiya")}
                  className={
                    selectedOption2 === "Bopitiya"
                      ? "bg-c4 flex rounded-2xl justify-between items-center p-4"
                      : "flex justify-between items-center p-4"
                  }
                >
                  Bopitiya
                  {selectedOption2 === "Bopitiya" && (
                    <CheckIcon className="w-5 h-5 text-green-500" />
                  )}
                </li>
              </ul>
            )}
          </Typography>
        </div>
      </div>
      <div>
        <div className="flex bg-c2 pb-5 h-[100px] 2xl:h-[125px] ">
          <div className="pt-5 flex">
            <h2 className="ml-10 mt-1 font-bold text-c3 text-3xl font-[Montserrat]">
              Navigate to
            </h2>
            <div className="mt-5 ml-10 mr-5 justify-start bg-c3 w-[150px] h-2 rounded-2xl"></div>
          </div>
          <div className="pt-5 pl-10 justify-end flex grid-cols-4 gap-5">
            <Link to="/profileUser/AccountDetails">
              <Button className="w-[250px] hover:bg-deep-orange-900 bg-c3 rounded-3xl hover:text-c2 text-white text-md font-[Montserrat]">
                Track Order
              </Button>
            </Link>
            <Link to="/rawInventory">
              <Button className="w-[250px] hover:bg-deep-orange-900 bg-c3 rounded-3xl text-white text-md font-[Montserrat]">
                Raw Inventory
              </Button>
            </Link>
            <Link to="/proInventory">
              <Button className="w-[250px] hover:bg-deep-orange-900 bg-c3 rounded-3xl text-white text-md font-[Montserrat]">
                Produced Inventory
              </Button>
            </Link>
            <Link to="/profileUser/Addresses">
              <Button className="w-[200px] hover:bg-deep-orange-900 bg-c3 rounded-3xl text-white text-md font-[Montserrat]">
                Staff
              </Button>
            </Link>
          </div>
          
        </div>
        {children}
      </div>
    </PageLayout>
  );
}

export default AdminDashboard;
