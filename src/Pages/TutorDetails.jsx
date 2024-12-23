import { useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { Button, CardDescription, CardTitle } from "keep-react";
import { FaStar, FaRegHeart, FaDollarSign } from "react-icons/fa";
import axios from "axios";
import useAuth from "../Hook/useAuth";
import Swal from "sweetalert2";
import { RiGraduationCapLine } from "react-icons/ri";

const TutorDetails = () => {
  const { user } = useAuth();
  const loadedDetails = useLoaderData();
  const navigate = useNavigate();
  const [details, setDetails] = useState(loadedDetails);
  const { _id, name, email, language, price, review, description, image } =
    details;

  const handleBookNow = (tutor_id) => {
    console.log(tutor_id);
    const myBookedTutor = {
      tutor_id,
      tutor_email: email,
      bookers_email: user.email,
      name,
      language,
      price,
      image,
    };
    console.log(myBookedTutor);
    axios.post(`http://localhost:5000/mybooked`, myBookedTutor).then((data) => {
      console.log(data.data);
      if (data.data.insertedId) {
        Swal.fire({
          title: "Tutor has been booked",
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/myBookedTutors");
      }
    });
  };

  return (
    <div className="w-11/12 lg:w-5/6 mx-auto my-6 flex flex-col lg:flex-row gap-6">
      <div className=" bg-white rounded-xl p-8 w-full">
        <div className="flex gap-6">
          <div className="w-48 h-40">
            <img className="w-full h-full rounded-lg border " src={image} />
          </div>
          <div className="w-full space-y-2 flex justify-between">
            <div className="space-y-3">
              <CardTitle className="text-2xl lg:text-3xl font-semibold">
                {name}
              </CardTitle>
              <p>
                <span className="flex items-center font-medium gap-2">
                  <RiGraduationCapLine className="text-metal-600"></RiGraduationCapLine>{" "}
                  Teaches
                </span>
                <span className="text-metal-600">{language} Language</span>
              </p>
              <CardDescription>{description}</CardDescription>
            </div>
          </div>
        </div>
      </div>
      <div className="shadow-xl px-8 bg-white rounded-xl w-full lg:w-96 space-y-4 py-6">
        <div className="">
          <div className="flex justify-evenly gap-6">
            <p className="text-metal-500 font-medium flex flex-col items-center">
              <span className="flex items-center gap-1 text-2xl">
                5 <FaStar className="text-warning-400 " />
              </span>
              <span className="text-sm">{review} review</span>
            </p>
            <p className="text-metal-500 font-medium flex flex-col items-center">
              <span className="flex items-center text-2xl">
                <FaDollarSign className=" text-xl" /> {price}
              </span>
              <span className="text-sm"> price</span>
            </p>
          </div>
        </div>

        <Button
          onClick={() => handleBookNow(_id)}
          color="error"
          className="w-full hover:bg-error-600 hover:text-white text-white"
        >
          book Now
        </Button>
        <Button
          variant="softBg"
          className="w-full text-metal-700 font-medium  hover:bg-metal-300"
        >
          <FaRegHeart className="text-lg mr-2" /> Wish List
        </Button>
      </div>
    </div>
  );
};

export default TutorDetails;
