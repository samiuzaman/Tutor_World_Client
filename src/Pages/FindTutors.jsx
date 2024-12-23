import { Link, useLoaderData, useLocation } from "react-router-dom";
import FindTutorsCard from "../components/HomeLayout/FindTutorsCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { buttonVariants, Empty, EmptyImage, EmptyTitle } from "keep-react";

const FindTutors = () => {
  const loadedData = useLoaderData();
  const location = useLocation();
  const [tutorData, setTutorData] = useState(loadedData);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/alltutorial${location.search}`)
      .then((data) => setTutorData(data.data));
  }, []);
  console.log("location", location);
  console.log(loadedData);

  return (
    <div className="border-t border-metal-300">
      <div className="w-11/12 lg:w-5/6 mx-auto flex flex-col lg:flex-row justify-between items-center py-8">
        <div className="w-full lg:w-2/3">
          <h2 className="text-[#313140] text-2xl lg:text-4xl font-bold font-Fira">
            Find your Language teacher online
          </h2>
          <p className="text-metal-700 mt-4">
            Find Tutors ensures that users can easily find the best tutors
            tailored to their learning preferences, making the process of
            connecting with experts both simple and efficient.
          </p>
        </div>
        <div>Animation</div>
      </div>
      <div className="bg-[#F5F6F9] py-12">
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
