"use client"; // This is a client component
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed w-full h-20 shadow-xl z-[100] ">
      <div className="flex justify-between items-center h-full px-10 2xl:px-16 bg-[#ecf0f3]">
        <Image src="/img/logo-website.png" alt="logo" width={70} height={50} />
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase text-gray-700 hover:text-[#C49F00] ease-in duration-300">
                Home
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase text-gray-700 hover:text-[#C49F00] ease-in duration-300">
                About
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase text-gray-700 hover:text-[#C49F00] ease-in duration-300">
                Skills
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase text-gray-700 hover:text-[#C49F00]">
                Projects
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase text-gray-700 hover:text-[#C49F00] ease-in duration-300">
                Contact
              </li>
            </Link>
          </ul>
          <div
            onClick={handleNav}
            className="md:hidden rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer bg-[#D7BE69]/50 hover:scale-110 ease-in duration-300"
          >
            <AiOutlineMenu size={20} />
          </div>
        </div>
      </div>

      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Image
                src="/img/logo-website.png"
                alt="logo"
                width={80}
                height={50}
              />
              <div
                onClick={handleNav}
                className="rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer bg-[#D7BE69]/50 hover:scale-110 ease-in duration-300"
              >
                <AiOutlineClose />
              </div>
            </div>
          </div>
          <div className="border-b border-[#C49F00]/50 my-4">
            <p className="w-[80%] md:w-[90%] py-4">
              {"Let's build something extraordinary together!"}
            </p>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li className="py-4 text-sm hover:text-[#C49F00] ease-in duration-300">Home</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm hover:text-[#C49F00] ease-in duration-300">About</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm hover:text-[#C49F00] ease-in duration-300">Skills</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm hover:text-[#C49F00] ease-in duration-300">Projects</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm hover:text-[#C49F00] ease-in duration-300">Contact</li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest]">{"Let's connect"}</p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <div className="rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300 bg-[#D7BE69]/50">
                  <FaLinkedinIn />
                </div>
                <div className="rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300 bg-[#D7BE69]/50">
                  <FaGithub />
                </div>
                <div className="rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300 bg-[#D7BE69]/50">
                  <AiOutlineMail />
                </div>
                <div className="rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300 bg-[#D7BE69]/50">
                  <BsFillPersonLinesFill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
