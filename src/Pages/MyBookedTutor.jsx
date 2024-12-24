import axios from "axios";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import useAuth from "../Hook/useAuth";
import { Button, CardDescription, CardTitle, Divider } from "keep-react";
import Swal from "sweetalert2";

const MyBookedTutor = () => {
  const { user } = useAuth();
  const [myBookedData, setMyBookedData] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/mybooked?email=${user.email}`)
      .then((data) => setMyBookedData(data.data));
  }, []);

  const handleUpdateReview = (id) => {
    
    axios.put(`http://localhost:5000/mybooked/${id}`).then((data) => {
      if (data.data.modifiedCount > 0) {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Thank you for the review",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };


  return (
    <div className="w-11/12 lg:w-4/5 mx-auto py-12">
      <h4 className="text-metal-800 dark:text-metal-200">
        {myBookedData.length} {myBookedData.length > 0 ? "Tutors" : "Tutor"} in
        Booked
      </h4>
      <Divider color="primary" className="my-4" />
      <div>
        {myBookedData?.map((bookData) => (
          <div className="border border-metal-300 bg-white dark:bg-metal-900 shadow-lg rounded-xl flex items-center p-4 gap-6 mb-5">
            <div className="w-40 h-28">
              <img
                className="w-full h-full rounded-lg border border-metal-200"
                src={bookData.image}
              />
            </div>
            <div className="w-full flex justify-between items-center space-y-2">
              <div className="space-y-2">
                <CardTitle className="text-xl font-medium">
                  {bookData.name}
                </CardTitle>
                <p className="text-metal-700 dark:text-metal-300">
                  {bookData.language} Tutor
                </p>
                <p className="text-xl font-medium text-error-500">
                  {" "}
                  ${bookData.price}
                </p>
              </div>

              <div className="space-y-2 lg:space-y-3 flex flex-col lg:flex-row justify-end items-center gap-4 ">
                <Button
                  onClick={() => handleUpdateReview(bookData.tutor_id)}
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
