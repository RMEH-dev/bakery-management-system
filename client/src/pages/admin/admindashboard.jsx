import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import PageLayout from "../../components/pagelayout";
import { Typography, Button } from "@material-tailwind/react";
import { ChevronDownIcon, CheckIcon } from "@heroicons/react/24/outline";

function AdminDashboard({children}) {
  const [selectedOption2, setSelectedOption2] = useState(null);
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);

  const handleSelect2 = (option) => {
    setSelectedOption2(option);
    setIsDropdownOpen2(false);
  };

  return (
    <PageLayout className="">
      <div className="flex justify-between items-center bg-gradient-to-b from-c1 to-c3 text-c2 w-[800px] h-[100px] z-100">
        <h1 className="ml-10 pt-5 pb-5 text-4xl font-bold font-[Montserrat]">
          Hi Mr. Perera
        </h1>
        <div className="mr-4">
          <Typography
            className="cursor-pointer justify-center text-center w-[200px] bg-c5 rounded-2xl text-black font-semibold text-lg font-[Montserrat] z-120"
            onClick={() => setIsDropdownOpen2(!isDropdownOpen2)}
          >
            Outlet
            <ChevronDownIcon className="ml-36 -mt-6 w-5 h-5" />
            {isDropdownOpen2 && (
              <ul className="mt-2 absolute cursor-pointer rounded-2xl text-c3 w-[200px] text-lg font-bold font-[Montserrat] bg-c2">
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
      <div className="flex bg-c2 h-[750px] 2xl:h-[200px] ">
        <div className="pt-5 grid grid-cols-2">
          <h2 className="ml-10 font-bold text-c3 text-3xl font-[Montserrat]">
            Navigate to
          </h2>
          <div className="mt-4  bg-c3 w-[300px] h-2 rounded-2xl"></div>
        </div>
        <div className="pt-5 mr-4 grid grid-cols-4 gap-20">
          <Link to="/profileUser/AccountDetails">
            <Button className="w-[250px] hover:bg-deep-orange-900 bg-c3 rounded-3xl text-white text-md font-[Montserrat]">
              Track Order
            </Button>
          </Link>
          <Link to="/profileUser/MyOrders">
            <Button className="w-[250px] hover:bg-deep-orange-900 bg-c3 rounded-3xl text-white text-md font-[Montserrat]">
              Raw Inventory
            </Button>
          </Link>
          <Link to="/profileUser/Addresses">
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
    </PageLayout>
  );
}

export default AdminDashboard;
