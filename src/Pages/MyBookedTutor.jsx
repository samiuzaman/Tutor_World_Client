import axios from "axios";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import useAuth from "../Hook/useAuth";
import { Button, CardDescription, CardTitle, Divider } from "keep-react";

const MyBookedTutor = () => {
  const { user } = useAuth();
  const [myBookedData, setMyBookedData] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/mybooked?email=${user.email}`)
      .then((data) => setMyBookedData(data.data));
  }, []);

  console.log(myBookedData);
  return (
    <div className="w-11/12 lg:w-4/5 mx-auto my-12">
      <h4>
        {myBookedData.length} {myBookedData.length > 0 ? "Tutors" : "Tutor"} in
        Booked
      </h4>
      <Divider color="primary" className="my-4" />
      <div>
        {myBookedData?.map((bookData) => (
          <div className="border border-metal-300 bg-white shadow-lg rounded-xl flex items-start p-4 gap-6 mb-5">
            <div className="w-40 h-28">
              <img
                className="w-full h-full rounded-lg border border-error-500"
                src={bookData.image}
              />
            </div>
            <div className="w-full flex justify-between items-center space-y-2">
              <div className="space-y-2">
                <CardTitle className="text-xl font-medium">
                  {bookData.name}
                </CardTitle>
                <p>{bookData.language} Tutor</p>
                <p className="text-xl font-medium text-error-500">
                  {" "}
                  ${bookData.price}
                </p>
              </div>

              <div className="space-y-2 lg:space-y-3 flex flex-col lg:flex-row justify-end items-center gap-4 ">
                <p className="text-metal-500 font-medium text-base flex  gap-1 items-center">
                  5 <FaStar className="text-warning-400 " />:{bookData.review}
                </p>
                <Button
                  color="error"
                  className="hover:bg-error-600 hover:text-white text-white"
                >
                  Review
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBookedTutor;
