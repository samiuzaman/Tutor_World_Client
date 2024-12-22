import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../Hook/useAuth";
import { DotsThreeOutlineVertical } from "phosphor-react";
import {
  Avatar,
  Dropdown,
  DropdownAction,
  DropdownContent,
  DropdownItem,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "keep-react";

const MyTutorials = () => {
  const { user } = useAuth();
  const [myTutorials, setMyTutorials] = useState();
  useEffect(() => {
    axios
      .get(`http://localhost:5000/alltutorial?email=${user.email}`)
      .then((data) => setMyTutorials(data.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="bg-[#F5F6F9]">
      <Table className="w-11/12 lg:w-5/6 mx-auto my-12">
        <TableHeader>
          <TableRow className="text-center">
            <TableHead>No</TableHead>
            <TableHead>Image</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>language</TableHead>
            <TableHead>review</TableHead>
            <TableHead>description</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {myTutorials?.map((item, index) => (
            <TableRow key={item._id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>
                <Avatar>
                  <img src={item.company_logo} />
                </Avatar>
              </TableCell>

              <TableCell>{item.name}</TableCell>
              <TableCell>{item.language}</TableCell>
              <TableCell>{item.review}</TableCell>
              <TableCell>{item.description}</TableCell>

              <TableCell>
                <Dropdown>
                  <DropdownAction asChild>
                    <button>
                      <DotsThreeOutlineVertical className="size-4 fill-metal-900 dark:fill-white" />
                    </button>
                  </DropdownAction>
                  <DropdownContent
                    align="end"
                    className="w-[200px] border border-metal-100 p-3 dark:border-metal-800"
                  >
                    <DropdownItem>Edit</DropdownItem>
                    <DropdownItem>Delete</DropdownItem>
                  </DropdownContent>
                </Dropdown>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default MyTutorials;
