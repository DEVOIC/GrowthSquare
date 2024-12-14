"use client"

import { useActionState, useEffect,startTransition } from "react"
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from "@/components/ui/input-otp"
import { useState } from "react"
import { Button } from "../ui/button"
import { verifyUser } from "@/app/signup/actions"
import { useToast } from "@/hooks/use-toast"
import { useRouter } from "next/navigation"

export const Otp = () => {
    const { toast } = useToast()
    const [value, setValue] = useState("")
const [message, action, pending] = useActionState(verifyUser, null)
const router = useRouter()
const  handleSubmit = async() => {
    startTransition(()=>{
        action(value)
    })
}
useEffect(() => {
    if(message==="Email verified successfully"){
        router.replace("/")
    }
    const showstate = () =>
    {
      toast({
        description: message,
      })
    }
    showstate();
  }, [pending])

    return (
        <div className=" h-[100vh] md:min-h-screen grid md:grid-cols-2">
            {/* Left Section */}
            <div className="bg-lightblue md:inline hidden" />

            {/* Right Section */}
            <div className="flex flex-col items-center justify-center p-8">
                <div className="space-y-2 text-center mb-10">
                    <h1 className="text-3xl font-bold tracking-tight">Enter OTP you Received </h1>
                    <p> Enter OTP to verify your account  </p>
                </div>


        
                <InputOTP
                    maxLength={6}
                    value={value}
                    onChange={(value) => setValue(value)}
                >
                    <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                        <InputOTPSlot index={3} />
                        <InputOTPSlot index={4} />
                        <InputOTPSlot index={5} />
                    </InputOTPGroup>
                </InputOTP>
                <div className="text-center text-sm mt-4">
                    {value === "" ? (
                        <>Enter your one-time password.</>
                    ) : (
                        <>You entered: {value}</>
                    )}
                </div>
                <div className="flex justify-evenly items-center w-[60%] mt-10 ">

                    <Button onClick={()=>{
                        router.push('/signup')
                    }} variant={"outline"} className="text-darkblue"> Go Back </Button>
                    <Button disabled ={pending} onClick={
                        handleSubmit
                    } className="">
                        {pending ? "Verifying..." : "Verify"}

                        </Button>
                </div>

            </div>
        </div>
    )
}



