import "../../index.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export const ProductList = ({ onCategoryClick }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/routes/getCategories"
        );
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories: ", error.message);
      }
    };
    fetchCategories();
  }, [categories]);

  const handleCategoryClick = (category, subCategory = null) => {
    if (subCategory) {
      navigate(`/bakery/${category.toLowerCase()}/${subCategory.toLowerCase()}`);
    } else {
      navigate(`/bakery/${category.toLowerCase()}`);
    }
    onCategoryClick(category, subCategory);
  };

  return (
    <ul className="pl-6 pt-5 pb-5 w-[300px] md:w-[300px] lg:w-[300px] xl:w-[320px] 2xl:w-[330px]  rounded-r-2xl bg-c3 text-c2 hover:text-c1 flex flex-col space-y-1">
      {categories.map((category) => (
        <li key={category.category} className="px-4 py-2 hover:text-white">
          <Link to={`/bakery/${category.category.toLowerCase()}`}>
            <span
              className="text-lg font-bold font-[Montserrat]"
              onClick={() => handleCategoryClick(category.category)}
            >
              {category.category}
            </span>
            {category.subCategory && (
              <ul className="pl-4">
                  <li key={category.subCategory} className="px-2 py-1 hover:text-white">
                    <span
                      className="text-md font-[Montserrat] cursor-pointer"
                      onClick={() => handleCategoryClick(category.category, category.subCategory)}
                    >
                      {category.subCategory}
                    </span>
                  </li>
              </ul>
            )}
          </Link>
        </li>
      ))}
    </ul>
  );
};
