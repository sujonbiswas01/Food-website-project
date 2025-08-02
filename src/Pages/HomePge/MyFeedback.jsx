import React from "react";
import Container from "../../Components/Container";

const MyFeedback = () => {
  return (
    <div className="w-full">
      <div className="py-32">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-[#1E1E1E] text-3xl font-semibold text-center">
            Discover more cool restaurants
          </h2>
          <button className="bg-[#1677BD] px-4 py-2 rounded-[23.5px] mt-4 text-white cursor-pointer">
            Show more{" "}
          </button>
        </div>
      </div>

      <div className="bg-[#F2F2F2] max-w-[1479px] mx-auto px-14">
        <div className=" flex flex-col md:flex-row gap-7 py-16 px-14">
          <div className="pt-30 px-14 ">
            <h2 className="max-w-[502px] font-extrabold mb-6 text-[26px] leading-[100%]">
              MyFeedback for Business has resources to help you plan, start,
              grow, and advertise your small business
            </h2>
            <p className="text-[#5E5E5E] max-w-[453px] mb-14">
              The lorem ipsum is, in printing, a series of meaningless words
              used temporarily to calibrate a layout.
            </p>
            <button className="px-4 py-2 bg-black rounded-full text-white cursor-pointer">
              {" "}
              Explore MyFeedback business
            </button>
          </div>
          <div>
            <img src="/images/feedback.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyFeedback;
