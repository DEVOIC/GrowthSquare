'use client'
import React, { useActionState, useEffect } from 'react'
import Link from "next/link"
import Image from "next/image"
// import Logo from "../../../public/gslogo.svg"
import theGsq from '../../../public/thedevoic_logo.jpeg'
import Google from "../../../public/google.png"
import GitHub from "../../../public/github.png"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { loginUser } from './actions'
import { useToast } from '@/hooks/use-toast'
import Form from 'next/form'
import { useRouter } from 'next/navigation'
import { Eye, EyeOff } from 'lucide-react'

export const dynamic = "force-dynamic";

const Page = () => {
  const [state, action, pending] = useActionState(loginUser, null)
  const [showpassword, setShowPassword] = React.useState(false)
  const { toast } = useToast()
  const router = useRouter()

  useEffect(() => {
    const checkCookie = () => {
      const token = getCookie("token")
      if (token) {
        router.replace("/home")
      }
    }
    const getCookie = (name) => {
      const value = `; ${document.cookie}`
      const parts = value.split(`; ${name}=`)
      if (parts.length === 2) return parts.pop().split(";").shift()
    }
    checkCookie()
  }, [router])

  useEffect(() => {
    if (state === "Logged in successfully") {
      router.replace("/home")
    }
    if (state) {
      toast({ description: state })
    }
  }, [state])

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-lightblue/10 px-4">

      {/* Back to Home Button */}
      <Link
        href="/home"
        className="absolute top-4 left-4 text-lightblue text-sm font-medium hover:underline"
      >
        ← Back to Home
      </Link>
      <div className='ellipse2 top-right -z-10 overflow-hidden'></div>
      {/* <div className='ellipse2 bottom-left -z-10  overflow-hidden'></div> */}
      <div className='ellipse2 bottom-0 left-0 -translate-x-1/3 -translate-y-1/3 absolute -z-10' />

      {/* Login Card */}
      <div className="w-full max-w-md rounded-2xl shadow-xl bg-white p-8 space-y-8 border border-gray-100">

        {/* Header */}
        <div className="text-center space-y-1">
          <div className="flex items-center justify-center ">
            <Image src={theGsq} alt="GrowthSquare Logo" width={32} height={32} className="" />
            <h1 className='font-semibold leading-tight ml-2'>Growth <br />
              Square
            </h1>
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Welcome Back</h1>
          <p className="text-sm text-muted-foreground">Login to access your dashboard</p>
        </div>

        {/* Login Form */}
        <Form action={action} className="space-y-4">
          <div className="space-y-1">
            <label htmlFor="email" className="text-sm font-medium text-lightblue">Email Address</label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="johndoe@gmail.com"
              className="border-lightblue/30 focus-visible:ring-lightblue focus-visible:ring-2"
            />
          </div>

          <div className="space-y-1">
            <div className="flex justify-between items-center">
              <label htmlFor="password" className="text-sm font-medium text-lightblue">Password</label>
              <Link href="/login/forgot-password" className="text-sm text-lightblue hover:underline">
                Forgot password?
              </Link>
            </div>
      
            <div className="relative">
              <Input
                type={showpassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="••••••••"
                className="border-lightblue/30 focus-visible:ring-lightblue focus-visible:ring-2"
                required
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                onClick={() => setShowPassword(prev => !prev)}
                tabIndex={-1}
              >
                {showpassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>

          </div>

          <Button
            disabled={pending}
            className="w-full bg-lightblue hover:bg-blue-700 transition-colors duration-200 font-semibold"
            size="lg"
          >
            {pending ? "Logging in..." : "Login"}
          </Button>
        </Form>

        {/* OR Divider */}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-white px-2 text-muted-foreground">or continue with</span>
          </div>
        </div>

        {/* Social Login */}
        <div className="flex justify-center gap-4">
          <button
            title="Login with Google"
            className="p-2 border border-gray-300 rounded-full hover:bg-gray-100 transition"
          >
            <Image src={Google} alt="Google" width={24} height={24} />
          </button>
          <button
            title="Login with GitHub"
            className="p-2 border border-gray-300 rounded-full hover:bg-gray-100 transition"
          >
            <Image src={GitHub} alt="GitHub" width={24} height={24} />
          </button>
        </div>

        {/* Sign Up Prompt */}
        <p className="text-center text-sm text-muted-foreground">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="text-lightblue hover:underline font-medium">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Page
