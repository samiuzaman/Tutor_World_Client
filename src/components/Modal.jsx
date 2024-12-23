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
  SelectLabel,
} from "keep-react";
import useAuth from "../Hook/useAuth";
import axios from "axios";
import Swal from "sweetalert2";
// import Swal from "sweetalert2";

const ModalComponents = ({
  itme_id,
  itme_language,
  itme_price,
  itme_description,
  itme_item,
}) => {
  const { user } = useAuth();
  const handleUpdatTutorial = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const updatedData = Object.fromEntries(formData.entries());
    console.log(updatedData);
    axios
      .patch(`http://localhost:5000/alltutorial/${itme_id}`, updatedData)
      .then((data) => {
        console.log(data.data);
        if (data.data.modifiedCount > 0) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Tutorial Update Successfull",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div>
      <form onSubmit={handleUpdatTutorial}>
        <fieldset className="space-y-1">
          <Label htmlFor="customizatin">Name</Label>
          <div>
            <Input
              type="text"
              name="name"
              placeholder="Name"
              readOnly
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
              readOnly
              defaultValue={user?.email}
              placeholder="Email"
            />
          </div>
        </fieldset>

        <fieldset className="space-y-1">
          <Label htmlFor="Category">Language</Label>
          <Select name="language" defaultValue={itme_language}>
            <SelectAction className="w-full ">
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
        <div className="flex gap-4 pt-4 ">
          <fieldset className=" space-y-1">
            <Label htmlFor="name">Price</Label>
            <div>
              <Input
                type="number"
                name="price"
                placeholder="Price"
                defaultValue={itme_price}
              />
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
                className="border-black"
                name="description"
                placeholder="Write your description"
                defaultValue={itme_description}
                rows={2}
              />
            </div>
          </fieldset>

          <fieldset className="space-y-1 pb-4">
            <Label htmlFor="name">Image URL</Label>
            <div>
              <Input
                type="url"
                name="image"
                placeholder="Image URL"
                defaultValue={itme_item}
              />
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

export default ModalComponents;
