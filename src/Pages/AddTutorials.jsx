import Swal from "sweetalert2";
import {
  Button,
  Input,
  Label,
  Select,
  SelectAction,
  SelectContent,
  SelectValue,
  SelectGroup,
  SelectItem,
  Textarea,
  Divider,
  SelectLabel,
} from "keep-react";
import useAuth from "../Hook/useAuth";
import axios from "axios";

const AddTutorials = () => {
  const { user } = useAuth();

  const handleAddTutorial = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const initialData = Object.fromEntries(formData.entries());
    console.log(initialData);
    axios
      .post("http://localhost:5000/alltutorial", initialData)
      .then((data) => {
        console.log(data.data);
        if (data.data.acknowledged) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Successfully Added Tutorials",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  console.log(user);
  return (
    <div className="w-11/12 lg:w-4/5 mx-auto">
      <form
        onSubmit={handleAddTutorial}
        className="w-11/12 lg:w-4/6 mx-auto space-y-2 rounded-lg border p-8 shadow-md my-12 "
      >
        <h3 className="text-4xl font-bold text-center text-primary-500">
          Add Tutorial
        </h3>
        <Divider className="pt-5"></Divider>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <fieldset className="space-y-1">
            <Label htmlFor="customizatin">Name</Label>
            <div>
              <Input
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
                type="email"
                name="email"
                defaultValue={user?.email}
                placeholder="Email"
              />
            </div>
          </fieldset>
        </div>

        <div className="md:flex gap-4 pt-4 ">
          <fieldset className="space-y-1">
            <Label htmlFor="Category">Language</Label>
            <Select name="jobType">
              <SelectAction className="w-full md:w-[16rem]">
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

          <fieldset className=" space-y-1">
            <Label htmlFor="name">Price</Label>
            <div>
              <Input type="number" name="price" placeholder="Price" />
            </div>
          </fieldset>
          <fieldset className="space-y-1">
            <Label htmlFor="customizatin">Review</Label>
            <div>
              <Input
              readOnly
                type="text"
                name="review"
                defaultValue={0}
                placeholder="Review"
              />
            </div>
          </fieldset>
        </div>

        <div className="space-y-5 pt-5">
          <fieldset className="space-y-1">
            <Label htmlFor="customizatin">Description</Label>
            <div>
              <Textarea
                name="description"
                placeholder="Write your description"
                rows={2}
              />
            </div>
          </fieldset>

          <fieldset className="space-y-1 pb-4">
            <Label htmlFor="name">Image URL</Label>
            <div>
              <Input type="url" name="image" placeholder="Image URL" />
            </div>
          </fieldset>
        </div>

        <Button size="sm" color="secondary" type="submit" className="w-full">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default AddTutorials;
