import {
  Avatar,
  AvatarImage,
  Button,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "keep-react";
import { FaStar, FaRegHeart } from "react-icons/fa";

import { Link } from "react-router-dom";

const FindTutorsCard = ({ tutorial }) => {
  const { _id, name, email, language, price, review, description, image } =
    tutorial;
  console.log(tutorial);
  return (
    <div>
      <div className="border border-metal-300 bg-white shadow-lg rounded-xl pt-6 pb-3 ">
        <CardHeader className="flex items-center gap-4 px-4">
          <Avatar>
            <AvatarImage src={image} />
          </Avatar>
          <div>
            <h4 className="text-xl font-medium">{name}</h4>
            <p className="text-metal-500 font-medium text-base flex gap-2 items-center">
              {" "}
              <FaStar className="text-warning-400 text-lg" /> {review}
            </p>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          <CardTitle>{}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardContent>
        <CardFooter className="flex justify-between items-center px-6 pb-3">
          <Button
            variant="link"
            shape="circle"
            className="text-2xl hover:bg-metal-300"
          >
            <FaRegHeart className="text-metal-700 " />
          </Button>
          <Link to={`/findTutors/${_id}`}>
            <Button
              color="error"
              className="hover:bg-primary-700 hover:text-white text-white"
            >
              Details
            </Button>
          </Link>
        </CardFooter>
      </div>
    </div>
  );
};

export default FindTutorsCard;
