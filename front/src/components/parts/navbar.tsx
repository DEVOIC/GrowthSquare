"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import Logo from "../../../public/gslogo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import Cookies from 'js-cookie';
import { FaUserCircle } from "react-icons/fa";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [token, setToken] = useState<string | null>(null);

  const handleClick = () => setClick(!click);
  const router = useRouter()

  useEffect(() => {
    if (typeof document !== "undefined") {
      const tokenCookie = document.cookie
        .split(";")
        .find((row) => row.trim().startsWith("token="));
      if (tokenCookie) {
        const tokenValue = tokenCookie.split("=")[1];
        setToken(tokenValue);
      }
    }
  }, []);

  const logout = () => {
    Cookies.remove("token")
    setToken(null);
  };

  return (
    <>
      <nav
        style={{ zIndex: "100" }}
        className="container bg-darkblue customnav min-w-full px-10 sticky top-0 py-4"
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image src={Logo} alt="logo" />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-6 text-gray-300">
            <Link href="/home" className="hover:text-white">Home</Link>
            <div className="h-full w-1">|</div>
            <Link href="/about" className="hover:text-white">About</Link>
            <div className="h-full w-1">|</div>
            <Link href="https://blog.growthsq.in/" className="hover:text-white">Blog</Link>
          </div>

          {/* Buttons / User */}
          <div className="flex items-center gap-8">
            <div className="hidden md:block">
              <Link href="/contact">
                <Button variant="default">Become A Member</Button>
              </Link>
            </div>

            <div className="hidden md:block">
              {!token ? (
                <Link href="/login">
                  <Button className="bg-transparent border border-white text-white">Login</Button>
                </Link>
              ) : (
                <div className="relative group">
                  <FaUserCircle className="text-white text-3xl cursor-pointer" />
                  <div className="absolute right-0 mt-0 w-40 bg-transparent p-2 rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-opacity duration-300 z-50">
                    <div className="bg-white rounded-md shadow-lg">
                      <Link
                        href="/profile"
                        className="block px-4 py-2 text-sm rounded-md text-darkblue hover:bg-gray-100"
                      >
                        Profile
                      </Link>
                      <button
                        onClick={logout}
                        className="w-full text-left block px-4 rounded-md py-2 text-sm text-darkblue hover:bg-gray-100"
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Mobile Hamburger */}
            <GiHamburgerMenu
              className="md:hidden block text-[#015aff] h-8 w-8"
              onClick={handleClick}
            />
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className="w-[100vw] h-[100vh] right-0 top-0 absolute flex z-40"
          style={{
            opacity: click ? 1 : 0,
            visibility: click ? "visible" : "hidden",
          }}
        >
          <div
            className=" w-[40%] bg-black bg-opacity-50"
            onClick={handleClick}
          ></div>
          <div className="w-[60%] h-[100vh] bg-darkblue pl-4 md:px-12 py-8">
            <div className="w-[95%] flex justify-between">
              <Image src={Logo} alt="logo" />
              <IoCloseSharp
                className="h-8 w-8 text-white"
                onClick={handleClick}
              />
            </div>

            <div className="flex flex-col gap-6 py-12 pr-4">
              <Link
                href="/home"
                className="text-white bg-white bg-opacity-20 px-8 py-2 hover:bg-opacity-100 hover:text-darkblue text-xl"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-white bg-white bg-opacity-20 px-8 py-2 hover:bg-opacity-100 hover:text-darkblue text-xl"
              >
                About
              </Link>
              <Link
                href="https://blog.growthsq.in/"
                className="text-white bg-white bg-opacity-20 px-8 py-2 hover:bg-opacity-100 hover:text-darkblue text-xl"
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="text-white bg-white bg-opacity-20 px-8 py-2 hover:bg-opacity-100 hover:text-darkblue text-xl"
              >
                Join Us
              </Link>
              {!token ? (
                <Link
                  href="/login"
                  className="text-white bg-white bg-opacity-20 px-8 py-2 hover:bg-opacity-100 hover:text-darkblue text-xl"
                >
                  Login
                </Link>
              ) : (
                <>
                  <Link
                    href="/profile"
                    className="text-white bg-white bg-opacity-20 px-8 py-2 hover:bg-opacity-100 hover:text-darkblue text-xl"
                  >
                    Profile
                  </Link>
                  <button
                    onClick={() => {
                      logout();
                      setClick(false);
                    }}
                    className="text-left text-white bg-white bg-opacity-20 px-8 py-2 hover:bg-opacity-100 hover:text-darkblue text-xl"
                  >
                    Logout
                  </button>
                </>
              )}
            </div>
          </div>

        </div>
      </nav>
    </>
  );
};

export default Navbar;
