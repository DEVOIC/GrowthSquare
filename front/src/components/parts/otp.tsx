"use client"

import * as React from "react"
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from "@/components/ui/input-otp"
import { useState } from "react"
import { Button } from "../ui/button"

export const Otp = () => {
    const [value, setValue] = useState("")

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

                    <Button variant={"outline"} className="text-darkblue"> Go Back </Button>
                    <Button className="">Verify</Button>

                </div>
            </div>
        </div>
    )
}



