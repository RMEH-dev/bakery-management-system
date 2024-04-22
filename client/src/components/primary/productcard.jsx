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
    // const data = [
    //     {
    //       imageLink:
    //         "https://countrywoodsmoke.com/wp-content/uploads/2020/03/IMG_20200130_154847-01-1536x734.jpeg",
    //     },
    //     {
    //       imageLink:
    //         "https://www.seriouseats.com/thmb/02cnc7c4s4tIGXlTWGXvIKDRmuE=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/better-no-knead-bread-recipe-hero-01_1-48d654bfadeb4a5caf9b233b00fc74ca.JPG",
    //     },
    //     {
    //       imageLink:
    //         "https://www.goldmedalbakery.com/content/uploads/2019/12/Sandwich-White.jpg",
    //     },
    //     {
    //       imageLink:
    //         "https://www.occasionallyeggs.com/wp-content/uploads/2020/08/Dark-Rye-Bread-2-1-768x1150.jpg",
    //     },
    //     {
    //       imageLink:
    //         "https://i0.wp.com/www.joyofeatingtheworld.com/wp-content/uploads/2022/11/26-Sri-Lankan-roast-paan.jpg?w=500&ssl=1",
    //     },
    //     {
    //       imageLink:
    //         "https://www.dailyfoodrecipes.com/wp-content/uploads/2014/03/malu-pan-fish-bun.jpg",
    //     },
    //     {
    //       imageLink:
    //         "https://www.islandsmile.org/wp-content/uploads/2022/06/IMG_5163-2-835x1080.jpg",
    //     },
    //     {
    //       imageLink: "https://ceylontoday.lk/wp-content/uploads/2022/06/1-42.jpg",
    //     },
    //     {
    //       imageLink:
    //         "https://savoryspin.com/wp-content/uploads/2018/11/Easy-Delicious-Spiced-Chicken-Stuffed-Buns.jpg.webp",
    //     },
    //   ];
      

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
    <Card className="w-[250px] bg-gray-200 shadow shadow-md shadow-deep-orange-700 h-[300px]">
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
            <Typography color="blue-gray" className="font-bold font-[Montserrat] ">
              Wood-fired Bread
            </Typography>
            <Typography color="blue-gray" className="font-bold font-[Montserrat] text-nowrap">
              Rs. 95.00
            </Typography>
          </div>
          <Typography
            variant="small"
            color="gray"
            className="font-medium font-[Montserrat] text-wrap grid grid-cols-2 gap-y-2" // Use grid with gap
          >
            Freshly baked in the wood
            <button class="flex items-center ml-10 justify-center bg-deep-orange-800 w-14 h-8 rounded-3xl text-white hover:bg-deep-orange-400 hover:text-black duration-500">
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
