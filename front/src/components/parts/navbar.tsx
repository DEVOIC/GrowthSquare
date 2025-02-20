"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import Logo from "../../../public/gslogo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
// import { cookies } from 'next/headers';
// import { redirect } from 'next/navigation';
const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  // commented this only for the purpose of testing the logout function

  // const cookieStore = await cookies()
  // const value = cookieStore.has('token')
  // async function logout() {
  //     const cookieStore = await cookies()
  //     cookieStore.delete('token');
  //     redirect('/')
  //     // Redirect to login page or perform other actions after logout
  // }

  // const value = false;

  return (
    <>
      <nav
        style={{ zIndex: "100" }}
        className="container bg-darkblue customnav min-w-full  px-10  sticky top-0  py-4"
      >
        <div className="flex items-center  justify-between">
          <Link href="/" className="md:flex hidden items-center space-x-2">
            <Image src={Logo} alt="logo" />
          </Link>
          <GiHamburgerMenu
            className="md:hidden block text-[#015aff] h-8 w-8"
            onClick={handleClick}
          />
          <div
            className="w-[100vw] h-[100vh] left-0 top-0 absolute flex z-40"
            style={{
              opacity: click ? 1 : 0,
              visibility: click ? "visible" : "hidden",
            }}
          >
            <div className="w-[60%] h-[100vh]  flex-[0.6] bg-darkblue px-12 py-8">
              <div className="w-[95%] flex justify-between">
                <span className="">
                  <Image src={Logo} alt="logo" className="opacity-100" />
                </span>
                <IoCloseSharp
                  className="h-8 w-8 grid justify-self-end text-white"
                  onClick={handleClick}
                />
              </div>
              <div className="flex flex-col gap-6  py-12">
                <Link
                  href="/home"
                  className="text-white bg-white bg-opacity-20 px-8  py-2 hover:bg-opacity-100 hover:text-darkblue text-xl"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="text-white bg-white bg-opacity-20 px-8  py-2 hover:bg-opacity-100 hover:text-darkblue text-xl"
                >
                  About
                </Link>
                <Link
                  href="https://blog.growthsq.in/"
                  className="text-white bg-white bg-opacity-20 px-8  py-2 hover:bg-opacity-100 hover:text-darkblue text-xl"
                >
                  Blog
                </Link>
              </div>
            </div>
            <div
              className="w-[40%] h-[100vh] bg-black opacity-30 flex-[0.4]"
              onClick={handleClick}
            ></div>
          </div>
          <div className="hidden md:flex items-center space-x-6 text-gray-300">
            <Link href="/home" className="hover:text-white">
              Home
            </Link>
            <div className="h-full w-1 ">|</div>
            <Link href="/about" className="hover:text-white">
              About
            </Link>
            <div className="h-full w-1 ">|</div>
            {/* <Link href="/courses" className="hover:text-white">Courses</Link> */}
            {/* <div className='h-full w-1 '>|</div> */}
            <Link href="https://blog.growthsq.in/" className="hover:text-white">
              Blog
            </Link>
          </div>
          <div className="flex items-center space-x-4 z-30">
            <Link href="/contact" className="text-white">
              <Button variant={"default"}>Become A Member</Button>
            </Link>
            {/* <div>
                            {value ?
                                <Button onClick={logout} className='text-white' variant="outline">
                                    Logout
                                </Button>
                                : <Link href="/login" className="text-white">
                                    <Button variant="outline">
                                        Login
                                    </Button>
                                </Link>}
                        </div> */}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
