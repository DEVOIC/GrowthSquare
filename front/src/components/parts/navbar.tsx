"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import Logo from "../../../public/gslogo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [token, setToken] = useState<string | null>(null);

  const handleClick = () => {
    setClick(!click);
  };

  useEffect(() => {
    // Safely access cookies
    if (typeof document !== 'undefined') {
      const cookies = document.cookie;
      const tokenCookie = cookies.split(';').find(row => row.trim().startsWith('token='));
      
      if (tokenCookie) {
        const tokenValue = tokenCookie.split('=')[1];
        setToken(tokenValue);
      }
    }
  }, []);

  const logout = () => {
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/home";
    setToken(null);
  }

  return (
    <>
      <nav
        style={{ zIndex: "100" }}
        className="container bg-darkblue customnav min-w-full  px-10  sticky top-0  py-4"
      >
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image src={Logo} alt="logo" />
          </Link>

          <div className="hidden md:flex items-center space-x-6 text-gray-300">
            <Link href="/home" className="hover:text-white">
              Home
            </Link>
            <div className="h-full w-1 ">|</div>
            <Link href="/about" className="hover:text-white">
              About
            </Link>
            <div className="h-full w-1 ">|</div>
            <Link href="https://blog.growthsq.in/" className="hover:text-white">
              Blog
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:block ">
              <Link href="/contact" className="text-white ">
                <Button variant={"default"}>Become A Member</Button>
              </Link>
            </div>
            <div className="hidden md:block ">
              {!token ? (
                <Link href="/login" className="text-white ">
                  <Button className="bg-transparent border border-white">Login</Button>
                </Link>
              ) : (
                <Link href="/home" className="text-white">
                  <Button
                    className="bg-transparent border border-white"
                    onClick={logout}
                  >
                    Logout
                  </Button>
                </Link>
              )}
            </div>
            <GiHamburgerMenu
              className="md:hidden block text-[#015aff] h-8 w-8"
              onClick={handleClick}
            />
          </div>

          <div
            className="w-[100vw] h-[100vh] left-0 top-0 absolute flex z-40"
            style={{
              opacity: click ? 1 : 0,
              visibility: click ? "visible" : "hidden",
            }}
          >
            <div className="w-[60%] h-[100vh] flex-[0.6] bg-darkblue px-12 py-8">
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
                <Link
                  href="/contact"
                  className="text-white bg-white bg-opacity-20 px-8  py-2 hover:bg-opacity-100 hover:text-darkblue text-xl"
                >
                  Become A Member
                </Link>
                {!token ? (
                  <Link
                    href="/login"
                    className="text-white bg-white bg-opacity-20 px-8  py-2 hover:bg-opacity-100 hover:text-darkblue text-xl"
                  >
                    Login
                  </Link>
                ) : (
                  <Link
                    href="/home"
                    className="text-white bg-white bg-opacity-20 px-8  py-2 hover:bg-opacity-100 hover:text-darkblue text-xl"
                    onClick={logout}
                  >
                    Logout
                  </Link>
                )}
              </div>
            </div>
            <div
              className="flex-[0.4] bg-black bg-opacity-50"
              onClick={handleClick}
            ></div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;