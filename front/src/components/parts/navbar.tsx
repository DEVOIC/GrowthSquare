
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import Logo from '../../../public/gslogo.svg';

const Navbar = () => {
  return (
    <>
      <nav style={{ zIndex: "100" }} className="container bg-darkblue customnav min-w-full  px-10  sticky top-0  py-4">
        <div className="flex items-center  justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image src={Logo} alt="logo" />
          </Link>
          <div className="hidden md:flex items-center space-x-6 text-gray-300">
            <Link href="/home" className="hover:text-white">Home</Link>
            <div className='h-full w-1 '>|</div>
            <Link href="/about" className="hover:text-white">About</Link>
            <div className='h-full w-1 '>|</div>
            <Link href="/courses" className="hover:text-white">Courses</Link>
            <div className='h-full w-1 '>|</div>
            <Link href="https://blog.growthsq.in/" className="hover:text-white">Blog</Link>
          </div>
          <div className="flex items-center space-x-4 z-30">
            <Link href="/contact" className="text-white">
            <Button variant={'default'}>
              Become A Member
            </Button>
            </Link>
            <Link href="/login" className="text-white">
            <Button variant="outline">
              Login
            </Button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar