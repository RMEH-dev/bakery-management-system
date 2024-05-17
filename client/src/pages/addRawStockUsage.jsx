import React, { useState, useEffect } from "react";
import Dropdown from "../components/dropdown";
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
import axios from "axios"; // Import Axios

function AddRawStockUsage({ id, name }) {
  const [selectedOption1, setSelectedOption1] = useState(null);
  const [selectedOption2, setSelectedOption2] = useState(null);
  const [selectedOption3, setSelectedOption3] = useState(null);
  const [selectedOption4, setSelectedOption4] = useState(null);

  const [formData, setFormData] = useState({
    thresholdQuantity: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !selectedOption1 ||
      !selectedOption2 ||
      !selectedOption3 ||
      !selectedOption4 ||
      !formData
    ) {
      toast.error("Please fill out all the fields.");
      return;
    }

    const dataToSend = {
      ...formData,
      category1: selectedOption1,
      category2: selectedOption2,
      category3: selectedOption3,
      category4: selectedOption4,
    };

    const request = id
      ? axios.put(
          `http://localhost:5000/api/routes/updateRawStockUsage/${id}`,
          dataToSend
        )
      : axios.post(
          "http://localhost:5000/api/routes/getRawStockUsage",
          dataToSend
        );

    request
      .then((response) => {
        toast.success(
          id
            ? "Raw Stock Usage updated successfully"
            : "Raw Stock Usage added successfully"
        );
        setFormData({
          thresholdQuantity: "",
        });
        setSelectedOption1(null);
        setSelectedOption2(null);
        setSelectedOption3(null);
        setSelectedOption4(null);
      })
      .catch((error) => {
        console.error("Error sending data to the backend:", error);
      });
  };

  return (
    <AdminDashboard>
      <div className="bg-c5 pb-5">
        <div className="z-150 ml-5 mb-5 mr-5 bg-c5 pt-10 h-[50px] rounded-2xl text-c3 hover:text-c1">
          <Card
            className="flex flex-col mb-6 justify-items-center h-[50px] sm:w-auto bg-c2 rounded-2xl z-80"
            shadow={true}
          >
            <div className="mb-2 gap-5 flex flex-col">
              <div className="gap-80 right-0 mr-10 w-[800px] flex-cols grid-cols-2 grid">
                <Typography className="text-2xl mt-5 ml-10 text-black font-bold font-[Montserrat]">
                  {id ? "Edit Inventory Usage" : "Add Inventory Usage"}
                </Typography>
              </div>
              <Card
                className="flex flex-col mb-10 ml-10 h-[500px] mr-[50px] bg-white  rounded-2xl z-80"
                shadow={false}
              >
                <form className="ml-20 mt-12 mb-2 w-[800px] 2xl:w-[1150px] sm:w-96">
                  <div className="mb-1 flex flex-col gap-y-8">
                  <div className="grid grid-cols-3 gap-10 mb-6">
                      <Typography className="text-c1 font-semibold font-[Montserrat] mb-2">
                        Raw Stock Name
                      </Typography>
                      <Dropdown
                        endpoint="getRawStockUsage"
                        selectedOption={selectedOption4}
                        setSelectedOption={setSelectedOption4}
                        label="Category 4"
                      />
                      </div>
                      <div className="grid grid-cols-3 gap-10 mb-6">
                      <Typography className="text-c1 font-semibold font-[Montserrat] mb-2">
                        Raw Stock ID
                      </Typography>
                      <Typography className="text-c1 font-semibold font-[Montserrat] mb-2">
                        Produced Stock Name
                      </Typography>
                      <Dropdown
                        endpoint="getRawStockUsage"
                        selectedOption={selectedOption1}
                        setSelectedOption={setSelectedOption1}
                        label="Category 1"
                      />
                      <Dropdown
                        endpoint="getRawStockUsage"
                        selectedOption={selectedOption2}
                        setSelectedOption={setSelectedOption2}
                        label="Category 2"
                      />
                      <Dropdown
                        endpoint="getRawStockUsage"
                        selectedOption={selectedOption3}
                        setSelectedOption={setSelectedOption3}
                        label="Category 3"
                      />
                    </div>
                    <div className="grid grid-cols-3 gap-10">
                      <Typography className="text-c1 font-semibold font-[Montserrat] mb-2">
                        Produced Stock ID
                      </Typography>
                      <Typography className="text-c1 font-semibold font-[Montserrat] mb-2">
                        Threshold Quantity
                      </Typography>
                    </div>
                    <div className="grid grid-cols-3 gap-10">
                      
                      <Input
                        type="number"
                        size="md"
                        name="thresholdQuantity"
                        value={formData.thresholdQuantity}
                        onChange={handleChange}
                        placeholder="thresholdQuantity"
                        className="w-[350px] mt-1 2xl:w-[300px] text-c1 font-semibold font-[Montserrat] border-deep-orange-200 focus:!border-deep-orange-900 bg-c4 rounded-[30px]"
                        labelProps={{
                          className: "before:content-none after:content-none",
                        }}
                        required
                      />
                    </div>
                  </div>
                </form>

                <div className="flex justify-end w-[800px] 2xl:w-[1150px]">
                  <Link to="/addRawStockUsage">
                    <Button
                      onClick={handleSubmit}
                      className="mt-6 items-center hover:bg-deep-orange-900 bg-c3 rounded-3xl hover:text-c2 text-white text-md font-[Montserrat]"
                    >
                      {id ? "Update" : "Save Changes"}
                    </Button>
                  </Link>
                </div>
              </Card>
            </div>
          </Card>
        </div>
      </div>
      <ToastContainer />
    </AdminDashboard>
  );
}

export default AddRawStockUsage;
