import React, { useEffect, useState } from "react";
import LocationIcon from "../../assets/svg/Location";
import ShortICon from "../../assets/svg/ShorIcon";

const AllResturant = () => {
  const [ResData, setResData] = useState([]);
  useEffect(() => {
    fetch("/database/resturent.json")
      .then((res) => {
        return res.json();
      })
      .then((res) => setResData(res));
  }, []);
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between gap-3 ">
        {/* left side */}
        <div className="py-6 md:py-20 pl-3">
          <div className="ml-[100px]">
            <h2 className="font-semibold text-[16px] text-black">
              Home / All restaurants
            </h2>
            <div className="flex gap-9 items-center justify-between">
              <h1 className="text-[32px] font-extrabold leading-[100px]">
                best restaurants in singapore
              </h1>
              <div>
                <ShortICon />
              </div>
            </div>
          </div>

          <div className="py-14 ml-[100px] space-y-10">
            {ResData.map((item, i) => {
              return (
                <div key={i} className="">
                  <div className="flex gap-7 mt-3 ">
                    <img src={item.img} alt="" />
                    <div className="space-y-2">
                      <h3 className="font-semibold text-[22px]">
                        {item.headding}
                      </h3>
                      <p className="font-medium text-base text-[#8F8F8F]">
                        {item.des}
                      </p>
                      <img src={item.rating} alt="" />
                    </div>
                  </div>

                   <div className="w-full border-1 border-[#DCDCDC] mt-14"></div>
                </div>
              );
            })}
               <button className="bg-[#1677BD] rounded-full font-medium text-white px-10 py-4 cursor-pointer">Show more</button>
          </div>

       
        </div>
        {/* ride side */}
        <div className="w-[100%] md:w-[50%] -mt-34 md:mt-0 px-20  md:mr-8">
          <LocationIcon className="w-[500px]  md:w-[720px] md:h-[1264px]" />
        </div>
      </div>
    </>
  );
};

export default AllResturant;
