import React from "react";

const BellaItalia = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="bg-[url(/images/italiaBg.png)] bg-hero-gradient h-[552px] w-[1440px] bg-center bg-no-repeat bg-cover">
        <div className="w-[50%] px-20 py-14 space-y-3.5 relative z-10">
          <h1 className="font-semibold text-[52px] text-white relative">Bella italia</h1>
          <img src="/images/rating5.png" alt="" />
          <p className="text-[19px] text-white leading-[30px]">
            The lorem ipsum is, in printing, a series of meaningless words used
            temporarily to calibrate a layout. The lorem ipsum is, in printing,
            a series of meaningless words used temporarily to calibrate a
            layout.
          </p>

          <div className="mt-14 space-y-4">
            <h2 className="flex gap-3"><img src="/images/location.png" alt="" /> <span className="text-white">Singapour, Bishan-Ang Mo Kio Park </span></h2>
            <p className="text-white">⏰  7j/7, 08:00 - 22:00</p>
          </div>
        </div>
        <div className=" -bottom-14 relative z-30 ">
          <img src="/images/italiaLogo.png" className="w-[100px] mx-auto" alt="" />
        </div>

        <div className="pt-40 pb-5 space-y-2 w-[70%] px-30">
          <h2 className="text-[34px] font-semibold">Discover our magnificent place in photos</h2>
          <p className="text-[#5E5E5E] max-w-[601px]">The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing.</p>
        </div>

        <div className="w-[100%] ml-8 px-20 flex  gap-3">
          <div className="w-[45%]">
            <img src="/images/italiacard1.png" className="w-[595px] h-[552px]" alt="" />
          </div>
            <div className="w-[45%]">
              <div className="flex gap-3">
                <img src="/images/italiacard2.png" alt="" />
                <img src="/images/italiacard4.svg" className="rounded-r-2xl" alt="" />
              </div>
              <div className="flex gap-3 mt-3">
                <img src="/images/italiacard5.png" alt="" />
                <img src="/images/italiacard6.png" className="rounded-b-2xl" alt="" />
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default BellaItalia;
