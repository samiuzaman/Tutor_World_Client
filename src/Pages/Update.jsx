import {
  Button,
  Divider,
  Input,
  Label,
  Select,
  SelectAction,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectValue,
  Textarea,
} from "keep-react";
import { Helmet } from "react-helmet-async";
import useAuth from "../Hook/useAuth";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Update = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const [data, setData] = useState({});
  const [defaultLanguage, setDefaultLanguage] = useState("");
  const navigate = useNavigate();
  const { _id, image, language, description, price } = data;
  console.log(defaultLanguage);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/alltutorial/${id}`, {
        withCredentials: true,
      })
      .then((data) => {
        setData(data.data);
        setDefaultLanguage(data.data.language);
      });
  }, [setData]);
  console.log(data);

  const handleUpdateTutorial = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const updatedData = Object.fromEntries(formData.entries());
    axios
      .patch(
        `${import.meta.env.VITE_API_URL}/alltutorial/${data?._id}`,
        updatedData
      )
      .then((data) => {
        if (data.data.modifiedCount > 0) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Tutorial Update Successfull",
            showConfirmButton: false,
            timer: 1500,
          });

          navigate("/myTutorials");
        }
      });
  };
  return (
    <div className="dark:bg-metal-800">
      <Helmet>
        <title>Update | Tutor World</title>
        <link rel="canonical" href="/" />
      </Helmet>
      <div className="w-11/12 lg:w-4/5 mx-auto py-12">
        <form
          onSubmit={handleUpdateTutorial}
          className="w-11/12 lg:w-4/6 mx-auto space-y-2 rounded-lg border dark:border-metal-300 p-8 shadow-md "
        >
          <h3 className="text-4xl font-bold text-center text-primary-500 dark:text-metal-200">
            Add Tutorial
          </h3>
          <Divider color="primary" className="pt-5"></Divider>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <fieldset className="space-y-1">
              <Label htmlFor="customizatin">Name</Label>
              <div>
                <Input
                  required
                  type="text"
                  name="name"
                  placeholder="Name"
                  defaultValue={user?.displayName}
                />
              </div>
            </fieldset>
            <fieldset className="space-y-1">
              <Label htmlFor="customizatin">Email</Label>
              <div>
                <Input
                  required
                  type="email"
                  name="email"
                  defaultValue={user?.email}
                  placeholder="Email"
                />
              </div>
            </fieldset>
          </div>

          <div className="md:flex gap-4 pt-4 ">
            <fieldset className="space-y-1 w-1/2">
              <Label htmlFor="Category">Language</Label>
              <Select
                name="language"
                required
                value={defaultLanguage}
                onValueChange={setDefaultLanguage}
              >
                <SelectAction className="w-full">
                  <SelectValue placeholder="Language" />
                </SelectAction>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Language</SelectLabel>
                    <SelectItem value="Arabic">Arabic</SelectItem>
                    <SelectItem value="Bengali">Bengali </SelectItem>
                    <SelectItem value="English">English</SelectItem>
                    <SelectItem value="German">German</SelectItem>
                    <SelectItem value="Hindi">Hindi</SelectItem>
                    <SelectItem value="Italian">Italian</SelectItem>
                    <SelectItem value="Japanese">Japanese</SelectItem>
                    <SelectItem value="Korean">Korean</SelectItem>
                    <SelectItem value="Turkish">Turkish</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </fieldset>

            <fieldset className="w-full md:w-1/2 space-y-1">
              <Label htmlFor="name">Price</Label>
              <div>
                <Input
                  defaultValue={price}
                  required
                  type="number"
                  name="price"
                  placeholder="Price"
                />
              </div>
            </fieldset>
          </div>

          <div className="space-y-5 pt-5">
            <fieldset className="space-y-1">
              <Label htmlFor="customizatin">Description</Label>
              <div>
                <Textarea
                  defaultValue={description}
                  name="description"
                  className="border-black"
                  placeholder="Write your description"
                  rows={2}
                />
              </div>
            </fieldset>

            <fieldset className="space-y-1 pb-4">
              <Label htmlFor="name">Image URL</Label>
              <div>
                <Input
                  defaultValue={image}
                  required
                  type="url"
                  name="image"
                  placeholder="Image URL"
                />
              </div>
            </fieldset>
          </div>

          <Button size="sm" color="secondary" type="submit" className="w-full">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Update;
