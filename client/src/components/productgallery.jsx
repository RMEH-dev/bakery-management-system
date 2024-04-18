import "../index.css";
import { Link } from "react-router-dom";
import { ProductList } from "./primary/productlist";
import { Typography } from "@material-tailwind/react";
import { ProductCard } from "./primary/productcard";
export function DefaultGallery() {
  const data = [
    {
      imageLink:
        "https://countrywoodsmoke.com/wp-content/uploads/2020/03/IMG_20200130_154847-01-1536x734.jpeg",
    },
    {
      imageLink:
        "https://www.seriouseats.com/thmb/02cnc7c4s4tIGXlTWGXvIKDRmuE=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/better-no-knead-bread-recipe-hero-01_1-48d654bfadeb4a5caf9b233b00fc74ca.JPG",
    },
    {
      imageLink:
        "https://www.goldmedalbakery.com/content/uploads/2019/12/Sandwich-White.jpg",
    },
    {
      imageLink:
        "https://www.occasionallyeggs.com/wp-content/uploads/2020/08/Dark-Rye-Bread-2-1-768x1150.jpg",
    },
    {
      imageLink:
        "https://i0.wp.com/www.joyofeatingtheworld.com/wp-content/uploads/2022/11/26-Sri-Lankan-roast-paan.jpg?w=500&ssl=1",
    },
    {
      imageLink:
        "https://www.dailyfoodrecipes.com/wp-content/uploads/2014/03/malu-pan-fish-bun.jpg",
    },
    {
      imageLink:
        "https://www.islandsmile.org/wp-content/uploads/2022/06/IMG_5163-2-835x1080.jpg",
    },
    {
      imageLink: "https://ceylontoday.lk/wp-content/uploads/2022/06/1-42.jpg",
    },
    {
      imageLink:
        "https://savoryspin.com/wp-content/uploads/2018/11/Easy-Delicious-Spiced-Chicken-Stuffed-Buns.jpg.webp",
    },
  ];

  return (
    <div className="bg-deep-orange-100">
      <Typography>
        <div className="flex font-bold font-[Montserrat] text-2xl pl-10 pt-10">
          <Link to="/products">All Products&nbsp;/</Link>
          <Link to="/products/Breads&Buns">&nbsp;Breads & Buns</Link>
        </div>
      </Typography>
  
      <div className="pt-10">
        <div className="grid lg:grid-cols-3 mr-[50px] grid-rows-1 lg:grid-rows-1 sm:grid-cols-1 md:grid-cols-2">
          <div className="z-50">
            <ProductList />
          </div>
          <div className="pl-10 pr-10 pb-20 grid grid-cols-1 gap-20 lg:grid-cols-2 lg:grid-rows-1 grid-rows-1"> {/* Changed grid-cols-3 to grid-cols-4 */}
            {data.map(({ imageLink }, index) => (
              <div key={index}>
                <img
                  className="h-40 w-full max-w-screen shadow-md shadow-deep-orange-900 outline-deep-orange-800 outline-offset-8 rounded-lg object-cover object-center"
                  src={imageLink}
                  alt="gallery-photo"
                />
              </div>
            ))}
          </div>
          <div>
          <ProductCard/>
          </div>
        </div>
      </div>
    </div>
  );
  
}
