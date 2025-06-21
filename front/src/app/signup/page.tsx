'use client'
import React, { useActionState, useEffect } from 'react'
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Form from 'next/form'
import theGsq from '../../../public/thedevoic_logo.jpeg'
import { createUser } from "./actions"
import { useToast } from "@/hooks/use-toast"
import { Otp } from "@/components/parts/otp"
//import GoogleAuth from "@/components/parts/Google-auth"
//import GithubAuth from "@/components/parts/Github-auth"
import { useRouter } from 'next/navigation'
import { Eye, EyeOff } from 'lucide-react'
export const dynamic = "force-dynamic";

export default function SignupPage() {
  const [state, action, pending] = useActionState(createUser, null)
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
    if (state) {
      toast({ description: state })
    }
  }, [pending])

  // if (1) {
  if (state === "User created successfully") {
    return <Otp />
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-lightblue/10 px-4">

      {/* Back to Home */}
      <Link
        href="/home"
        className="absolute top-4 left-4 text-lightblue text-sm font-medium hover:underline"
      >
        ← Back to Home
      </Link>
      <div className='ellipse2 top-right -z-10 overflow-hidden'></div>
      <div className='ellipse2 bottom-0 left-0 -translate-x-1/3 -translate-y-1/3 absolute -z-10' />

      {/* Signup Card */}
      <div className="w-full max-w-md rounded-2xl shadow-xl bg-white p-8 space-y-8 border border-gray-100">

        {/* Header */}
        <div className="text-center space-y-1">
          <div className="flex items-center justify-center">
            <Image src={theGsq} alt="GrowthSquare Logo" width={32} height={32} />
            <h1 className="font-semibold leading-tight ml-2">
              Growth <br /> Square
            </h1>
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Create Your Account</h1>
          <p className="text-sm text-muted-foreground">Sign up to get started</p>
        </div>

        {/* Signup Form */}
        <Form action={action} className="space-y-4">
          <div className="space-y-1">
            <label htmlFor="name" className="text-sm font-medium text-lightblue">Name</label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="John Doe"
              className="border-lightblue/30 focus-visible:ring-lightblue focus-visible:ring-2"
              required
            />
          </div>

          <div className="space-y-1">
            <label htmlFor="email" className="text-sm font-medium text-lightblue">Email Address</label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="johndoe@gmail.com"
              className="border-lightblue/30 focus-visible:ring-lightblue focus-visible:ring-2"
              required
            />
          </div>

          <div className="space-y-1">
            <label htmlFor="password" className="text-sm font-medium text-lightblue">Password</label>
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
            type="submit"
            disabled={pending}
            className="w-full bg-lightblue hover:bg-blue-700 transition-colors duration-200 font-semibold"
            size="lg"
          >
            {pending ? "Creating..." : "Sign Up"}
          </Button>
        </Form>

        {/* OR Divider
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-white px-2 text-muted-foreground">or continue with</span>
          </div>
        </div>

            <div className="space-y-4">
              <p className="text-center text-sm text-lightblue">Sign Up with</p>
              <div className="flex justify-center gap-4">
                <GoogleAuth />
                <GithubAuth />
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
            </div> */}

        {/* Login Prompt */}
        <p className="text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link href="/login" className="text-lightblue hover:underline font-medium">
            Log In
          </Link>
        </p>
      </div>
    </div>
  )
}
