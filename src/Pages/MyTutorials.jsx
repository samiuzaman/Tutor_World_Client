import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../Hook/useAuth";
import {
  Avatar,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "keep-react";
import Swal from "sweetalert2";
import { MdDeleteForever } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import useAxiosSecure from "../Hook/useAxiosSecure";

const MyTutorials = () => {
  const { user } = useAuth();
  const [myTutorials, setMyTutorials] = useState([]);
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    axiosSecure
      .get(`/my-added-tutorial?email=${user.email}`)
      .then((data) => setMyTutorials(data.data));
  }, [setMyTutorials]);

  const handleDeleteTutorial = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((data) => {
      if (data.isConfirmed) {
        axios
          .delete(`${import.meta.env.VITE_API_URL}/alltutorial/${id}`, {
            withCredentials: true,
          })
          .then((data) => {
            if (data.data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: " Tutorial has been deleted.",
                icon: "success",
              });
              const remainingData = myTutorials.filter(
                (tutorial) => tutorial._id !== id
              );
              setMyTutorials(remainingData);
            }
          });
      }
    });
  };

  return (
    <div className="bg-[#F5F6F9] dark:bg-metal-800 dark:border-metal-300">
      <Helmet>
        <title> My Tutorials | Tutor World</title>
        <link rel="canonical" href="/" />
      </Helmet>
      <Table className="w-11/12 lg:w-5/6 mx-auto my-12 dark:bg-metal-700 border dark:border-metal-200">
        <TableHeader className="">
          <TableRow className="text-center ">
            <TableHead className="dark:bg-metal-900">No</TableHead>
            <TableHead className="dark:bg-metal-900">Image</TableHead>
            <TableHead className="dark:bg-metal-900">Name</TableHead>
            <TableHead className="dark:bg-metal-900">language</TableHead>
            <TableHead className="dark:bg-metal-900">review</TableHead>
            <TableHead className="dark:bg-metal-900">description</TableHead>
            <TableHead className="dark:bg-metal-900"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {myTutorials?.map((item, index) => (
            <TableRow key={item._id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>
                <Avatar>
                  <img src={item.image} />
                </Avatar>
              </TableCell>

              <TableCell>{item.name}</TableCell>
              <TableCell>{item.language}</TableCell>
              <TableCell>{item.review}</TableCell>
              <TableCell>{item.description.substring(0, 28)}...</TableCell>
              <TableCell className="flex items-center">
                <Link to={`/update/${item?._id}`}>
                  <Button variant="link" color="success">
                    <CiEdit className="text-2xl mt-4" />
                  </Button>
                </Link>

                <Button
                  variant="link"
                  color="error"
                  className="text-2xl  mt-2"
                  onClick={() => handleDeleteTutorial(item._id)}
                >
                  <MdDeleteForever />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default MyTutorials;
