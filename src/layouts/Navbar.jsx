import React, { useState } from "react";
import Container from "../Components/Container";
import { IoSearch } from "react-icons/io5";
import { FaEarthAsia } from "react-icons/fa6";
import { Button } from "@heroui/react";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import Responsive from "./Responsive";
const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  return (
    <div className="border-b-1 border-gray-300">
      <Container
        className={`py-0.5 sm:pt-8 sm:pb-3 ${
          isMenuOpen
            ? "bg-black sm:bg-white sm:text-black transition duration-200  text-white "
            : ""
        }`}
      >
        <nav className="flex justify-between items-center ">
          <div>
            <img
              src="/images/Logo.png"
              className="bg-contain sm:mt-0 mt-4"
              alt=""
            />
          </div>
          <div className="hidden sm:flex w-[625px] justify-between items-center border-1 px-4 py-2 rounded-full">
            <div className="border-r-2 sm:pr-2 sm:text-sm lg:text-[16px] lg:pr-25">
              restaurant, hotel, service....
            </div>
            <div className=" sm:ml-5 lg:-ml-30 sm:text-sm lg:text-[16px]">
              Singapour...
            </div>
            <div>
              <IoSearch />
            </div>
          </div>
          <div className="hidden sm:flex gap-3 items-center justify-center ">
            <FaEarthAsia />
            <Button className="bg-black text-white rounded-full">
              MyFeedback for business
            </Button>
          </div>
        </nav>

        <div
          onClick={() => setMenuOpen(!isMenuOpen)}
          className="sm:hidden flex justify-end -mt-10 mr-5 text-2xl"
        >
          {isMenuOpen ? <RxCross2 /> : <FaBars />}
        </div>
        <div>
          <Responsive isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
