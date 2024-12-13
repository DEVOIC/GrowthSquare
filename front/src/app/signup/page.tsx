'use client'
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Form from 'next/form'
import { createUser } from "./actions"
import { useToast } from "@/hooks/use-toast"
import { useActionState, useEffect } from "react"

export default function SignupPage() {
  const [state, action, pending] = useActionState(createUser, null)

  const { toast } = useToast()
  // const status = useFormStatus()
  console.log(`${process.env.NEXT_PUBLIC_BACK_API} : ${process.env.NEXT_PUBLIC_PORT}`);
useEffect(() => {
  toast({
    description: state,
  })
}, [state])

  return (
    <div className="min-h-screen grid grid-cols-2">
      {/* Left Section */}
      <div className="bg-lightblue" />
      
      {/* Right Section */}
      <div className="flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold tracking-tight">Create Your Account</h1>
          </div>
          
          <Form action={action} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm text-lightblue" htmlFor="name">
                Name
              </label>
              <Input
                id="name"
                  name="name"
                placeholder="John Doe"
                type="text"
                className="border-lightblue/20"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-lightblue" htmlFor="email">
                Email ID
              </label>
              <Input
                id="email"
                name="email"
                placeholder="johndoe@gmail.com"
                type="email"
                className="border-lightblue/20"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-lightblue" htmlFor="password">
                Password
              </label>
              <Input
                id="password"
                        name="password"
                placeholder="strong password"
                type="password"
                className="border-lightblue/20"
                required
              />
            </div>
            
            <Button type="submit" disabled={pending} className="w-full bg-lightblue hover:bg-blue-700" size="lg">
           {pending?'Creating...':'Create Account'}   
            </Button>
          </Form>

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
            <p className="text-center text-sm text-lightblue">Sign Up with</p>
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
            Already have an account?{" "}
            <Link href="/login" className="text-lightblue hover:underline">
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

