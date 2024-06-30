import React from "react";
import { IoIosMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

const ProfileCard = ({
  toggleDarkMode,
  isDarkMode,
  img,
  name,
  profession,
  website,
}) => {
  return (
    <>
      {isDarkMode ? (
        <MdLightMode
          onClick={toggleDarkMode}
          className="top-64 absolute left-64 w-8 h-8 text-[#918E9B] cursor-pointer"
        />
      ) : (
        <MdDarkMode
          onClick={toggleDarkMode}
          className=" top-64 absolute left-64 w-8 h-8 text-[#918E9B] cursor-pointer"
        />
      )}
      <div
        className={` flex flex-col gap-4 justify-center  w-[317px] rounded-[10px] ${
          isDarkMode ? "bg-[#1A1B21]" : "bg-[#F5F5F5]"
        } `}>
        <img src={img} alt={name} />
        <div className="flex justify-center items-center gap-4 flex-col">
          <h2
            className={`text-[25px] ${
              isDarkMode ? "text-white" : "text-black"
            } font-bold	`}>
            {name}
          </h2>
          <h4 className="text-[#F47D27] text-[12.8px]">{profession}</h4>
          <p
            className={` ${
              isDarkMode ? "text-white" : "text-black"
            } text-[13px]	`}>
            {website}
          </p>
          <div className="flex gap-6">
            <button className="flex items-center gap-1 justify-center  rounded-md w-[115px] h-[34px] bg-[#FFFFFF]	">
              <IoIosMail></IoIosMail>
              <p className="text-[14px]">Email</p>
            </button>
            <button className="flex items-center gap-1 justify-center  rounded-md w-[115px] h-[34px] bg-[#5093E2] text-[#ffffff]	">
              <FaLinkedin></FaLinkedin>
              <p className="text-[14px]">LinkedIn</p>
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="px-8">
            <h3
              className={`${
                isDarkMode ? "text-[white]" : "text-[black]"
              } text-[16px] font-bold`}>
              About
            </h3>
            <p
              className={`${
                isDarkMode ? "text-[white]" : "text-[black]"
              } text-[10px] `}>
              I am a frontend developer with a particular interest in making
              things simple and automating daily tasks. I try to keep up with
              security and best practices, and am always looking for new things
              to learn.
            </p>
          </div>
          <div className="px-8">
            <h3
              className={`${
                isDarkMode ? "text-[white]" : "text-[black]"
              } text-[16px] font-bold`}>
              Interests
            </h3>
            <p
              className={`${
                isDarkMode ? "text-[white]" : "text-[black]"
              } text-[10px] `}>
              Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
              Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
            </p>
          </div>
        </div>
        <div
          className={`${
            isDarkMode ? "bg-[#161619]" : "bg-[#D5D4D8]"
          } flex justify-center items-center gap-8  mt-6 h-[64px]`}>
          <FaTwitterSquare className="w-8 h-8 text-[#918E9B]"></FaTwitterSquare>
          <FaFacebookSquare className="w-8 h-8 text-[#918E9B]"></FaFacebookSquare>
          <FaInstagramSquare className="w-8 h-8 text-[#918E9B]"></FaInstagramSquare>
          <FaGithubSquare className="w-8 h-8 text-[#918E9B]"></FaGithubSquare>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
