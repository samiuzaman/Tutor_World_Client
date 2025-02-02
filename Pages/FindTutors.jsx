import { Link, useLoaderData, useLocation } from "react-router-dom";
import FindTutorsCard from "../components/HomeLayout/FindTutorsCard";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  buttonVariants,
  Empty,
  EmptyImage,
  EmptyTitle,
  Select,
  SelectAction,
  SelectContent,
  SelectValue,
  SelectGroup,
  SelectItem,
  Input,
} from "keep-react";
import Learn from "../assets/Learn.json";
import Lottie from "lottie-react";
import { Helmet } from "react-helmet-async";

const FindTutors = () => {
  const loadedData = useLoaderData();
  const location = useLocation();
  const [tutorData, setTutorData] = useState(loadedData);
  const [search, setSearch] = useState("");

  const handleSearch = (event) => {
    setSearch(event.target.value);
    axios
      .get(`${import.meta.env.VITE_API_URL}/alltutorial?search=${search}`)
      .then((data) => setTutorData(data.data));
  };
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/alltutorial${location.search}`)
      .then((data) => setTutorData(data.data));
  }, []);

  const handleSelected = (select) => {
    console.log(select);

  }

  return (
    <div className="bg-white dark:bg-metal-900 border-t border-metal-300">
      <Helmet>
        <title>Find Tutors | Tutor World</title>
        <link rel="canonical" href="/" />
      </Helmet>
      <div>
        <div className="w-11/12 lg:w-5/6 mx-auto flex  flex-col-reverse lg:flex-row justify-between items-center gap-8 py-8">
          <div className="w-full lg:w-2/3">
            <h2></h2>
            <h2 className="text-[#313140] dark:text-white text-2xl lg:text-4xl font-bold font-Fira">
              Find your Language teacher online
            </h2>
            <p className="text-metal-700 dark:text-metal-300 mt-4">
              Find Tutors ensures that users can easily find the best tutors
              tailored to their learning preferences, making the process of
              connecting with experts both simple and efficient.
            </p>
          </div>
          <div className="w-full lg:w-1/3">
            <Lottie animationData={Learn}></Lottie>
          </div>
        </div>
        <div className="w-11/12 lg:w-5/6 mx-auto flex justify-between items-center mb-4 gap-3">
          <div>
            <Select name="language">
              <SelectAction className="w-full md:w-[16rem] border-2 border-metal-400">
                <SelectValue placeholder="English" />
              </SelectAction>
              <SelectContent>
                <SelectGroup>
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
          </div>
          <div>
            <Input
              onChange={handleSearch}
              placeholder="Search"
              name="search"
              type="text"
              className="border-2 border-metal-400"
            />
          </div>
        </div>
      </div>
      <div className="bg-[#F5F6F9] dark:bg-metal-800 py-12">
        {tutorData.length > 0 ? (
          <div className="w-11/12 lg:w-5/6 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
            {tutorData.map((tutorial) => (
              <FindTutorsCard
                key={tutorial._id}
                tutorial={tutorial}
              ></FindTutorsCard>
            ))}
          </div>
        ) : (
          <div className=" flex flex-col justify-center ">
            <Empty>
              <EmptyImage>
                <img
                  src="https://staticmania.cdn.prismic.io/staticmania/16994ca5-ac01-4868-8ade-1b9e276ccdb3_Property+1%3DFolder_+Property+2%3DLg.svg"
                  height={234}
                  width={350}
                  alt="404"
                />
              </EmptyImage>
              <EmptyTitle className="mb-[14px] mt-5">No Data Found</EmptyTitle>

              <Link href="/" className={buttonVariants({ color: "primary" })}>
                Go to home
              </Link>
            </Empty>
          </div>
        )}
      </div>
    </div>
  );
};

export default FindTutors;
