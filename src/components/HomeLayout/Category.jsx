import axios from "axios";
import { useEffect, useState } from "react";
import { SlArrowRight } from "react-icons/sl";
import { Link } from "react-router-dom";

const Category = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/category")
      .then((data) => setCategory(data.data));
  }, []);
  return (
    <div className="w-11/12 lg:w-5/6 mx-auto grid grid-cols-2 lg:grid-cols-3 gap-8 py-16">
      {category?.map((category) => (
        <Link to={`/findTutors?language=${category.category}`}>
          <div className="flex justify-around items-center gap-4 bg-white rounded-md p-4 border border-metal-400">
            <div className="flex items-center gap-2">
              <img className="w-5 h-5 md:w-10 md:h-10" src={category.icon} />
              <h4 className="text-lg md:text-2xl font-semibold">{category.category}</h4>
            </div>
            <SlArrowRight className="text-black"></SlArrowRight>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Category;
