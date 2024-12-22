import React from "react";
import { useLoaderData } from "react-router-dom";
import FindTutorsCard from "../components/HomeLayout/FindTutorsCard";

const FindTutors = () => {
  const loadedData = useLoaderData();
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
        <div className="w-11/12 lg:w-5/6 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loadedData.map((tutorial) => (
            <FindTutorsCard
              key={tutorial._id}
              tutorial={tutorial}
            ></FindTutorsCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FindTutors;
