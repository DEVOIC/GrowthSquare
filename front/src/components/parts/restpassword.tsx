'use client'
import React from 'react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { useState } from 'react'

export const Restpassword = () => {

    const [email, setEmail] = useState("");
    const handlechange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(email)
    }

    return (
        <div className=" h-[100vh] md:min-h-screen grid lg:grid-cols-2">
            {/* Left Section */}
            <div className="bg-lightblue lg:inline hidden" />

            {/* Right Section */}
            <div className="flex flex-col items-center justify-center p-8">
                <div className="space-y-2 text-center mb-10 flex justify-center flex-col items-center">
                    <h1 className="text-3xl md:text-4xl  font-bold font-transforma tracking-tight mb-4">Forgot your password? </h1>
                    <p className="text-sm text-[12px] w-[70%] md:w-full font-regulartext-gray-500">No worries!
                        Enter the email address associated with your account
                        <br />
                        and we&apos;ll send you a link to reset your password.
                    </p>
                </div>
                <div className="flex justify-center md:justify-evenly items-center w-[60%] ">
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="email" className="flex gap-4">
                            <Input
                                id="email"
                                type="email"
                                placeholder="Enter your email"
                                className=""
                                onChange={handlechange}
                                aria-label="Email Address"
                                required
                            />
                        </label>

                        <div className="flex gap-10 mt-8">
                            <Button
                                variant="outline"
                                className="text-darkblue"
                            >
                                Back to Login
                            </Button>
                            <Button className="hover:bg-lightblue/80" type="submit">
                                Reset Password
                            </Button>
                        </div>
                    </form>


                </div>
            </div>
        </div>
    )
}
