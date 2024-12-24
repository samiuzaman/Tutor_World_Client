import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../Hook/useAuth";
import {
  Avatar,
  Button,
  Modal,
  ModalAction,
  ModalContent,
  ModalFooter,
  ModalHeader,
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
import ModalComponents from "../components/Modal";

const MyTutorials = () => {
  const { user } = useAuth();
  const [myTutorials, setMyTutorials] = useState();
  useEffect(() => {
    axios
      .get(`http://localhost:5000/alltutorial?email=${user.email}`)
      .then((data) => setMyTutorials(data.data))
      .catch((error) => console.log(error));
  }, []);

  const handleDeleteTutorial = (id) => {
    console.log(id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((data) => {
      axios.delete(`http://localhost:5000/alltutorial/${id}`).then((data) => {
        console.log(data.data);
        if (data.data.deletedCount > 0) {
          Swal.fire({
            title: "Deleted!",
            text: " Tutorial has been deleted.",
            icon: "success",
          });
        }
      });
    });
  };

  return (
    <div className="bg-[#F5F6F9] dark:bg-metal-800 dark:border-metal-300">
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
              <TableCell>{item.description}</TableCell>

              <Modal className="w-[400px]">
                <div className="flex">
                  <ModalAction asChild>
                    <Button variant="link" color="success">
                      <CiEdit className="text-2xl mt-4" />
                    </Button>
                  </ModalAction>
                  <Button
                    variant="link"
                    color="error"
                    className="text-2xl  mt-2"
                    onClick={() => handleDeleteTutorial(item._id)}
                  >
                    {" "}
                    <MdDeleteForever />{" "}
                  </Button>
                </div>
                <ModalContent className="max-w-[20rem] lg:max-w-[26rem]">
                  <ModalHeader className="mb-6 flex flex-col items-center justify-center space-y-3">
                    <h4>Modal</h4>
                    <ModalComponents
                      itme_id={item._id}
                      itme_language={item.language}
                      itme_price={item.price}
                      itme_description={item.description}
                      itme_item={item.image}
                      key={item?._id}
                    ></ModalComponents>
                  </ModalHeader>
                </ModalContent>
              </Modal>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default MyTutorials;
