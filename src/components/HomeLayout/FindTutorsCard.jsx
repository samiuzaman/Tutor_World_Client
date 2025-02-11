import { Button, CardDescription, CardTitle } from "keep-react";
import { FaStar, FaRegHeart } from "react-icons/fa";

import { Link } from "react-router-dom";

const FindTutorsCard = ({ tutorial }) => {
  const { _id, name, email, language, price, review, description, image } =
    tutorial;
  return (
    <div>
      <div className="border border-metal-300 bg-white dark:bg-metal-900 shadow-lg rounded-xl flex items-start p-4 gap-6 h-full">
        <div className="w-36 h-28">
          <img
            className="w-full h-full rounded-lg border border-error-500"
            src={image}
          />
        </div>
        <div className="w-full space-y-2">
          <CardTitle className="text-xl font-medium">{name}</CardTitle>
          <CardDescription>{language} Language</CardDescription>
          <CardDescription>{description}</CardDescription>

          <div className="flex  items-center justify-end gap-5 ">
            <p className="text-metal-500 font-medium text-base flex justify-center gap-1 items-center">
              5
              <FaStar className="flex items-center text-warning-400 text-lg" />:{" "}
              {review}
            </p>
            <Button
              variant="link"
              shape="circle"
              className="text-2xl hover:bg-metal-300"
            >
              <FaRegHeart className="text-metal-700 " />
            </Button>
            <Link to={`/tutorDetails/${_id}`}>
              <Button
                color="error"
                className="hover:bg-error-600 hover:text-white text-white"
              >
                Details
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindTutorsCard;
