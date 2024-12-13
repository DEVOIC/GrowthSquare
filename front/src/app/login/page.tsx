import React from 'react'
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"


const page = () => {
  return (
        <div className="min-h-screen grid grid-cols-2">
          {/* Left Section */}
          <div className="bg-lightblue" />
          
          {/* Right Section */}
          <div className="flex items-center justify-center p-8">
            <div className="w-full max-w-md space-y-8">
              <div className="space-y-2 text-center">
                <h1 className="text-3xl font-bold tracking-tight">Log Into Your Account</h1>
              </div>
              
              <form className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm text-lightblue" htmlFor="email">
                    Email ID
                  </label>
                  <Input
                    id="email"
                    placeholder="johndoe@gmail.com"
                    type="email"
                    className="border-lightblue/20"
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="text-sm text-lightblue" htmlFor="password">
                      Password
                    </label>
                    <Link 
                      href="/forgot-password"
                      className="text-sm text-lightblue hover:underline"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <Input
                    id="password"
                    placeholder="strong password"
                    type="password"
                    className="border-lightblue/20"
                  />
                </div>
                
                <Button className="w-full bg-lightblue hover:bg-blue-700" size="lg">
                  Login
                </Button>
              </form>
    
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white px-2 text-muted-foreground">
                    or
                  </span>
                </div>
              </div>
    
              <div className="space-y-4">
                <p className="text-center text-sm text-lightblue">Login with</p>
                <div className="flex justify-center gap-4">
                  <button className="p-2 border rounded-full hover:bg-gray-50">
                    <Image
                      src="/placeholder.svg"
                      alt="Google"
                      width={24}
                      height={24}
                      className="w-6 h-6"
                    />
                  </button>
                  <button className="p-2 border rounded-full hover:bg-gray-50">
                    <Image
                      src="/placeholder.svg"
                      alt="GitHub"
                      width={24}
                      height={24}
                      className="w-6 h-6"
                    />
                  </button>
                  <button className="p-2 border rounded-full hover:bg-gray-50">
                    <Image
                      src="/placeholder.svg"
                      alt="Apple"
                      width={24}
                      height={24}
                      className="w-6 h-6"
                    />
                  </button>
                </div>
              </div>
    
              <p className="text-center text-sm">
                Don&apos;t have an account?{" "}
                <Link href="/signup" className="text-lightblue hover:underline">
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
    
    
  )
}

export default page