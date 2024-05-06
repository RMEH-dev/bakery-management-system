import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useState, useEffect } from "react";



export function ProductCard() {
    
      const [product, setProduct] = useState(null);
      const [isLoading, setIsLoading] = useState(false);
      const [error, setError] = useState(null);
  
      useEffect(() => {
          const fetchProduct = async () => {
              setIsLoading(true);
              setError(null);
  
              try {
                  const response = await axios.get('/api/products'); // Replace with your actual API endpoint
                  setProduct(response.data[0]); // Assuming you want the first product
              } catch (error) {
                  setError(error);
              } finally {
                  setIsLoading(false);
              }
          };
  
          fetchProduct();
      }, []);

  return (
    <Card className="w-[250px] bg-c2 shadow shadow-md shadow-c3 h-[300px]">
      <CardHeader shadow={false} floated={false} className="h-[150px]">
        <img
          src="https://countrywoodsmoke.com/wp-content/uploads/2020/03/IMG_20200130_154847-01-1536x734.jpeg"
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <div className="grid grid:cols-2">
        <CardBody>
          <div className="mb-1 flex justify-between">
            <Typography  className="text-c1 font-bold font-[Montserrat] ">
              Wood-fired Bread
            </Typography>
            <Typography className="font-bold font-[Montserrat] text-c1 text-opacity-100 text-nowrap">
              Rs. 95.00
            </Typography>
          </div>
          <Typography
            variant="small"
            className="text-c3 font-medium font-[Montserrat] text-wrap grid grid-cols-2 gap-y-2" // Use grid with gap
          >
            Freshly baked in the wood
            <button class="flex items-center ml-10 justify-center bg-c3 w-14 h-8 rounded-3xl text-white hover:bg-c1 hover:text-c2 duration-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
            </button>
          </Typography>
        </CardBody>
      </div>
    </Card>
  );
}
