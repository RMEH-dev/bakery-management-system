import React, { useState } from "react";
import AdminDashboard from "./admin/admindashboard";
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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CurrencyInput from "react-currency-input-field";
import axios from "axios"; // Import Axios

const categoryMap = {
  "Breads & Buns": ["Bread", "Bun"],
  Pastries: ["Puff Pastry", "Croissant"],
  "Cakes & Cupcakes": ["Cake", "Gateau", "Cupcake"],
  "Sweets & Desserts": ["Sweet", "Dessert"],
  Platters: ["Savory Platter", "Sweet Platter"],
  Beverages: ["Cold Beverage", "Hot Beverage"],
};

function AddProInventory() {
  const [selectedOption1, setSelectedOption1] = useState(null);
  const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);
  const [selectedOption2, setSelectedOption2] = useState(null);
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);

  const handleSelect2 = (option) => {
    setSelectedOption2(option);
    setIsDropdownOpen2(false);
  };

  const [formData, setFormData] = useState({
    proStockName: "",
    manufactureDate: "",
    expirationDate: "",
    quantity: "",
    pricePerItem: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelect1 = (option) => {
    setSelectedOption1(option);
    setIsDropdownOpen1(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData || !selectedOption1 || !selectedOption2) {
      toast.error("Please fill out all the fields.");
      return;
    } else {
      toast.success("Product added successfully");
    }


    // Include the selected category in the formData
    const dataToSend = {
      ...formData,
      category: selectedOption1,
      subCategory: selectedOption2,
    };

    axios
      .post("http://localhost:5000/api/routes/addProStock", dataToSend)
      .then((response) => {
        console.log("Data successfully sent to the backend:", response.data);
        // Reset form fields if needed
        setFormData({
          proStockName: "",
          manufactureDate: "",
          expirationDate: "",
          quantity: "",
          pricePerItem: "",
        });
        setSelectedOption2(null);
      })
      .catch((error) => {
        console.error("Error sending data to the backend:", error);
      });
  };
  return (
    <AdminDashboard>
      <div className="bg-c1 pb-20 h-[50px] 2xl:h-[150px]">
        <div className="z-150 ml-5 mb-5 mr-5 bg-c1 pt-10 h-[100px] rounded-2xl text-c3 hover:text-c1">
          <Card
            className="flex flex-col mb-6 justify-items-center h-[100px] sm:w-auto bg-c2 rounded-2xl z-80"
            shadow={false}
          >
            <div className="mb-2 gap-5 flex flex-col">
              <div className="gap-80 right-0 mr-10 w-[800px] flex-cols grid-cols-2 grid">
                <Typography className="text-2xl mt-5 ml-10 text-c1 font-bold font-[Montserrat]">
                  Produced Inventory
                </Typography>
              </div>
              <Card
                className="flex flex-col mb-10 ml-10 h-[500px] mr-[50px] bg-white  rounded-2xl z-80"
                shadow={false}
              >
                <form className="ml-20 mt-12 mb-2 w-[800px] 2xl:w-[1150px]  sm:w-96">
                  <div className="mb-1 flex flex-col gap-y-8">
                    <div className="grid grid-cols-3 gap-10 mb-6">
                      <Typography className="text-c1 font-semibold font-[Montserrat] mb-2">
                        Produced Stock Name
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
                        name="proStockName"
                        value={formData.proStockName}
                        onChange={handleChange}
                        className="w-[350px] 2xl:w-[300px] text-c1 font-semibold font-[Montserrat] border-deep-orange-200 focus:!border-deep-orange-900 bg-c1 rounded-[30px]"
                        labelProps={{
                          className: "before:content-none after:content-none",
                        }}
                        required
                      />
                      <Input
                        type="date"
                        size="md"
                        name="manufactureDate"
                        value={formData.manufactureDate}
                        onChange={handleChange}
                        className="w-[350px] 2xl:w-[300px] text-c1 font-semibold font-[Montserrat] border-deep-orange-200 focus:!border-deep-orange-900 bg-c4 rounded-[30px]"
                        labelProps={{
                          className: "before:content-none after:content-none",
                        }}
                        required
                      />
                      <Input
                        type="date"
                        size="md"
                        name="expirationDate"
                        value={formData.expirationDate}
                        onChange={handleChange}
                        className="w-[350px] 2xl:w-[300px] text-c1 font-semibold font-[Montserrat] border-deep-orange-200 focus:!border-deep-orange-900 bg-c4 rounded-[30px]"
                        labelProps={{
                          className: "before:content-none after:content-none",
                        }}
                        required
                      />
                    </div>
                    <div className="grid grid-cols-3 gap-10">
                      <Typography className="text-c1 font-semibold font-[Montserrat] mb-2">
                        Produced Stock Category
                      </Typography>
                      <Typography className="text-c1 font-semibold font-[Montserrat] mb-2">
                        Sub Category
                      </Typography>
                      <Typography className="text-c1 font-semibold font-[Montserrat] mb-2">
                        Quantity
                      </Typography>
                      <Typography
                        className="cursor-pointer pl-2 mt-1 items-center w-[200px] bg-c3 rounded-2xl text-c2 font-semibold text-lg font-[Montserrat]"
                        onClick={() => setIsDropdownOpen1(!isDropdownOpen1)}
                      >
                        {selectedOption1 ? selectedOption1: "Select Category"}
                        {isDropdownOpen1 && (
                          <ul className="mt-5 mr-5 absolute z-10 cursor-pointer rounded-2xl text-c1 w-[250px] text-lg font-bold font-[Montserrat] bg-c5 max-h-64 overflow-y-auto shadow-lg">
                          {Object.keys(categoryMap).map((category) => (
                            <li
                              key={category}
                              onClick={() => handleSelect1(category)}
                              className={
                                selectedOption1 === category
                                  ? "bg-c3 text-c2 flex rounded-2xl justify-between items-center p-2"
                                  : "flex justify-between items-center p-4"
                              }
                            >
                              {category}
                              {selectedOption1 === category && (
                                <CheckIcon className="w-5 h-5 text-green-500" />
                              )}
                            </li>
                          ))}
                        </ul>
                        )}
                      </Typography>
                      <Typography
                        className="cursor-pointer pl-6 pt- mt-1 justify-center w-[250px] bg-c3 rounded-2xl text-c2 font-semibold text-lg font-[Montserrat]"
                        onClick={() => setIsDropdownOpen2(!isDropdownOpen2)}
                      >
                        {selectedOption2 ? selectedOption2: "Select Sub Category"}
                        {isDropdownOpen2 && (
                           <ul className="mt-5 mr-5 absolute z-10 cursor-pointer rounded-2xl text-c1 w-[250px] text-lg font-bold font-[Montserrat] bg-c5 max-h-64 overflow-y-auto shadow-lg">
                           {categoryMap[selectedOption1].map((subCategory) => (
                             <li
                               key={subCategory}
                               onClick={() => handleSelect2(subCategory)}
                               className={
                                 selectedOption2 === subCategory
                                   ? "bg-c3 text-c2 flex rounded-2xl justify-between items-center p-2"
                                   : "flex justify-between items-center p-4"
                               }
                             >
                               {subCategory}
                               {selectedOption2 === subCategory && (
                                 <CheckIcon className="w-5 h-5 text-green-500" />
                               )}
                             </li>
                           ))}
                         </ul>
                        )}
                      </Typography>
                      <Input
                        type="number"
                        size="md"
                        placeholder="Quantity"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        className="w-[350px] 2xl:w-[300px] text-c1 font-semibold font-[Montserrat] border-deep-orange-200 focus:!border-deep-orange-900 bg-c4 rounded-[30px]"
                        labelProps={{
                          className: "before:content-none after:content-none",
                        }}
                        required
                      />
                    </div>
                  </div>
                </form>
                <Typography className="text-c1 font-semibold font-[Montserrat] ml-20 mt-5 mb-2">
                  Price Per Item
                </Typography>

                <CurrencyInput
                  size="md"
                  placeholder=" Price Per Item"
                  decimalScale={2}
                  name="pricePerItem"
                  value={formData.pricePerItem}
                  onChange={handleChange}
                  className=" w-[350px] ml-2 -z-50 h-10 relative ml-20 mt-1 2xl:w-[300px] font-semibold font-[Montserrat] bg-c2 border-deep-orange-800 focus:!border-deep-orange-900 outline-2 outline-orange-400 rounded-md"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                  required
                />
                <div className="flex justify-end w-[800px] 2xl:w-[1150px]">
                  <Link to="/addProInventory">
                    <Button onClick={handleSubmit} className=" hover:bg-deep-orange-900 bg-c3 rounded-3xl hover:text-c2 text-white text-md font-[Montserrat]">
                      Save Changes
                    </Button>
                  </Link>
                </div>
              </Card>
            </div>
          </Card>
        </div>
      </div>
      <ToastContainer/>
    </AdminDashboard>
  );
}

export default AddProInventory;
