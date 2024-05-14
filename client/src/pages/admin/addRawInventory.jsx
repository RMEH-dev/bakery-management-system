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
import {
  ChevronDownIcon,
  CheckIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import EnhancedTable from "../../components/table";

function AddRawInventory() {
  const [selectedOption2, setSelectedOption2] = useState(null);
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);

  const handleSelect2 = (option) => {
    setSelectedOption2(option);
    setIsDropdownOpen2(false);
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
              <div className="gap-80 right-0 mr-10 w-[800px] flex-cols grid-cols-2 grid">
                <Typography className="text-2xl mt-5 ml-10 text-black font-bold font-[Montserrat]">
                  Raw Inventory
                </Typography>
              </div>
              <Card
                className="flex flex-col ml-10 h-[750px] mr-[50px] bg-gradient-to-tr from-white to-c4 rounded-2xl z-80"
                shadow={false}
              >
                <form className="ml-20 mt-12 mb-2 w-[800px] 2xl:w-[1150px] sm:w-96">
                  <div className="mb-1 flex flex-col gap-y-8">
                    <Typography className="text-xl text-c1 font-bold font-[Montserrat] mb-4">
                      Billing Address
                    </Typography>
                    <div className="grid grid-cols-3 gap-10 mb-6">
                      <Typography className="text-c1 font-semibold font-[Montserrat] mb-2">
                        Raw Stock Name
                      </Typography>
                      <Typography className="text-c1 font-semibold font-[Montserrat] mb-2">
                        Manufacture Date
                      </Typography>
                      <Typography className="text-c1 font-semibold font-[Montserrat] mb-2">
                        Expiration Date
                      </Typography>
                      <Input
                        type="text"
                        size="md"
                        placeholder="Raw Stock Name"
                        className="w-[350px] 2xl:w-[300px] text-c1 font-semibold font-[Montserrat] border-deep-orange-200 focus:!border-deep-orange-900 bg-c1 rounded-[30px]"
                        labelProps={{
                          className: "before:content-none after:content-none",
                        }}
                        required
                      />
                      <Input
                        type="date"
                        size="md"
                        className="w-[350px] 2xl:w-[300px] text-c1 font-semibold font-[Montserrat] border-deep-orange-200 focus:!border-deep-orange-900 bg-c4 rounded-[30px]"
                        labelProps={{
                          className: "before:content-none after:content-none",
                        }}
                        required
                      />
                      <Input
                        type="date"
                        size="md"
                        className="w-[350px] 2xl:w-[300px] text-c1 font-semibold font-[Montserrat] border-deep-orange-200 focus:!border-deep-orange-900 bg-c4 rounded-[30px]"
                        labelProps={{
                          className: "before:content-none after:content-none",
                        }}
                        required
                      />
                    </div>
                    <div className="grid grid-cols-3 gap-10">
                      <Typography className="text-c1 font-semibold font-[Montserrat] mb-2">
                        Raw Stock Category
                      </Typography>
                      <Typography className="text-c1 font-semibold font-[Montserrat] mb-2">
                        Quantity
                      </Typography>
                      <Typography className="text-c1 font-semibold font-[Montserrat] mb-2">
                        Supplier
                      </Typography>
                      <Typography
                        className="cursor-pointer pl-2 mt-1 items-center w-[200px] bg-c3 rounded-2xl text-c2 font-semibold text-lg font-[Montserrat]"
                        onClick={() => setIsDropdownOpen2(!isDropdownOpen2)}
                      >
                        Select Category
                        <ChevronDownIcon className="ml-40 -mt-6 w-5 h-5" />
                        {isDropdownOpen2 && (
                          <ul className="mt-5 -ml-2 absolute z-250 cursor-pointer rounded-2xl text-c4 w-[200px] text-lg font-bold font-[Montserrat] bg-c1">
                            <li
                              onClick={() => handleSelect2("Flour")}
                              className={
                                selectedOption2 === "Flour"
                                  ? "bg-c3 flex rounded-2xl justify-between items-center p-4"
                                  : "flex justify-between items-center p-4"
                              }
                            >
                              Flour
                              {selectedOption2 === "Flour" && (
                                <CheckIcon className="w-5 h-5 text-green-500" />
                              )}
                            </li>
                            <li
                              onClick={() => handleSelect2("Oils")}
                              className={
                                selectedOption2 === "Oils"
                                  ? "bg-c3 flex rounded-2xl justify-between items-center p-4"
                                  : "flex justify-between items-center p-4"
                              }
                            >
                              Oils
                              {selectedOption2 === "Oils" && (
                                <CheckIcon className="w-5 h-5 text-green-500" />
                              )}
                            </li>
                            <li
                              onClick={() => handleSelect2("Frozen Stock")}
                              className={
                                selectedOption2 === "Frozen Stock"
                                  ? "bg-c3 flex rounded-2xl justify-between items-center p-4"
                                  : "flex justify-between items-center p-4"
                              }
                            >
                              Frozen Stock
                              {selectedOption2 === "Frozen Stock" && (
                                <CheckIcon className="w-5 h-5 text-green-500" />
                              )}
                            </li>
                            <li
                              onClick={() => handleSelect2("Spices & Flavors")}
                              className={
                                selectedOption2 === "Spices & Flavors"
                                  ? "bg-c3 flex rounded-2xl justify-between items-center p-4"
                                  : "flex justify-between items-center p-4"
                              }
                            >
                              Spices & Flavors
                              {selectedOption2 === "Spices & Flavors" && (
                                <CheckIcon className="w-5 h-5 text-green-500" />
                              )}
                            </li>
                            <li
                              onClick={() => handleSelect2("Additives")}
                              className={
                                selectedOption2 === "Additives"
                                  ? "bg-c3 flex rounded-2xl justify-between items-center p-4"
                                  : "flex justify-between items-center p-4"
                              }
                            >
                              Additives
                              {selectedOption2 === "Additives" && (
                                <CheckIcon className="w-5 h-5 text-green-500" />
                              )}
                            </li>
                            <li
                              onClick={() => handleSelect2("Other")}
                              className={
                                selectedOption2 === "Other"
                                  ? "bg-c3 flex rounded-2xl justify-between items-center p-4"
                                  : "flex justify-between items-center p-4"
                              }
                            >
                              Other
                              {selectedOption2 === "Other" && (
                                <CheckIcon className="w-5 h-5 text-green-500" />
                              )}
                            </li>
                          </ul>
                        )}
                      </Typography>
                      <Input
                        type="number"
                        size="md"
                        placeholder="Quantity"
                        className="w-[350px] 2xl:w-[300px] text-c1 font-semibold font-[Montserrat] border-deep-orange-200 focus:!border-deep-orange-900 bg-c4 rounded-[30px]"
                        labelProps={{
                          className: "before:content-none after:content-none",
                        }}
                        required
                      />
                      <Input
                        type="text"
                        size="md"
                        placeholder="Expiration Date"
                        className="w-[350px] 2xl:w-[300px] text-c1 font-semibold font-[Montserrat] border-deep-orange-200 focus:!border-deep-orange-900 bg-c4 rounded-[30px]"
                        labelProps={{
                          className: "before:content-none after:content-none",
                        }}
                        required
                      />
                    </div>
                  </div>
                </form>
                <div className="flex justify-end w-[800px] 2xl:w-[1150px]">
                      <Link to="/addRawInventory">
                        <Button className="mt-6 items-center hover:bg-deep-orange-900 bg-c3 rounded-3xl hover:text-c2 text-white text-md font-[Montserrat]">
                          Add Raw Stock
                        </Button>
                      </Link>
                    </div>
              </Card>
            </div>
          </Card>
        </div>
      </div>
    </AdminDashboard>
  );
}

export default AddRawInventory;
