// 'use client'
// import React, { useActionState, useEffect } from 'react'
// import Link from "next/link"
// import Image from "next/image";
// import Logo from "../../../public/gslogo.svg";
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { loginUser } from './actions'
// import { useToast } from '@/hooks/use-toast'
// import Form from 'next/form'
// import { useRouter } from 'next/navigation'

// export const dynamic = "force-dynamic";

// const Page = () => {
//   const [state, action, pending] = useActionState(loginUser, null)
//   const { toast } = useToast()
//   const router = useRouter()
//   useEffect(() => {
//     if (state === "Logged in successfully") {
//       router.replace("/")
//     }
//     const showstate = () => {
//       toast({
//         description: state,
//       })
//     }
//     showstate();
//   }
//     , [pending])

//   return (
//     <div className="min-h-screen grid lg:grid-cols-2">
//       {/* Left Section */}
//       <div className="bg-lightblue flex justify-center items-center lg:min-h-screen h-[40%]">
//         <h1 className="lg:hidden block text-7xl text-white font-bold font-transform">Growthsquare</h1>

//       </div>
//       {/* Right Section */}
//       <div className="flex flex-1 w-full items-center justify-center p-8">
//         <div className="w-full max-w-md space-y-8">
//           <div className="space-y-2 text-center">
//             <h1 className="text-3xl font-bold tracking-tight">Log Into Your Account</h1>
//           </div>

//           <Form action={action} className="space-y-4">
//             <div className="space-y-2">
//               <label className="text-sm text-lightblue" htmlFor="email">
//                 Email ID
//               </label>
//               <Input
//                 id="email"
//                 name='email'
//                 placeholder="johndoe@gmail.com"
//                 type="email"
//                 className="border-lightblue/20"
//               />
//             </div>
//             <div className="space-y-2">
//               <div className="flex items-center justify-between">
//                 <label className="text-sm text-lightblue" htmlFor="password">
//                   Password
//                 </label>
//                 <Link
//                   href="/login/forgot-password"
//                   className="text-sm text-lightblue hover:underline"
//                 >
//                   Forgot password?
//                 </Link>
//               </div>
//               <Input
//                 id="password"
//                 name='password'
//                 placeholder="strong password"
//                 type="password"
//                 className="border-lightblue/20"
//               />
//             </div>

//             <Button disabled={pending} className="w-full bg-lightblue hover:bg-blue-700" size="lg">
//               {pending ? "Logining in" : "Login"}
//             </Button>
//           </Form>

//           <div className="relative">
//             <div className="absolute inset-0 flex items-center">
//               <div className="w-full border-t" />
//             </div>
//             <div className="relative flex justify-center text-xs uppercase">
//               <span className="bg-white px-2 text-muted-foreground">
//                 or
//               </span>
//             </div>
//           </div>

//           <div className="space-y-4">
//             <p className="text-center text-sm text-lightblue">Login with</p>
//             <div className="flex justify-center gap-4">
//               <button className="p-2 border rounded-full hover:bg-gray-50">
//                 <Image
//                   src="/placeholder.svg"
//                   alt="Google"
//                   width={24}
//                   height={24}
//                   className="w-6 h-6"
//                 />
//               </button>
//               <button className="p-2 border rounded-full hover:bg-gray-50">
//                 <Image
//                   src="/placeholder.svg"
//                   alt="GitHub"
//                   width={24}
//                   height={24}
//                   className="w-6 h-6"
//                 />
//               </button>
//               <button className="p-2 border rounded-full hover:bg-gray-50">
//                 <Image
//                   src="/placeholder.svg"
//                   alt="Apple"
//                   width={24}
//                   height={24}
//                   className="w-6 h-6"
//                 />
//               </button>
//             </div>
//           </div>

//           <p className="text-center text-sm">
//             Don&apos;t have an account?{" "}
//             <Link href="/signup" className="text-lightblue hover:underline">
//               Sign Up
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>


//   )
// }

// export default Page



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

export const dynamic = "force-dynamic";

const Page = () => {
  const [state, action, pending] = useActionState(loginUser, null)
  const { toast } = useToast()
  const router = useRouter()

  useEffect(() => {
    if (state === "Logged in successfully") {
      router.replace("/")
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
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="••••••••"
              className="border-lightblue/30 focus-visible:ring-lightblue focus-visible:ring-2"
            />
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
