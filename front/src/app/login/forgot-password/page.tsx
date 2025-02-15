'use client'
import React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useActionState } from 'react'
import { forgotPassword } from './action'
import Form from 'next/form'
import { useEffect } from 'react'
import { useToast } from '@/hooks/use-toast'
import Link from 'next/link'
export const dynamic = "force-dynamic";

const Restpassword = () => {

    const [state, action, pending] = useActionState(forgotPassword, null);
    const { toast } = useToast()
    useEffect(() => {

        const showstate = () => {
            toast({
                description: state,
            })

        }
        showstate();
    }
        , [pending])

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
                    <Form action={action}>
                        <label htmlFor="email" className="flex gap-4">
                            <Input
                                id="email"
                                type="email"
                                name='email'
                                placeholder="Enter your email"
                                className=""
                                aria-label="Email Address"
                                required
                            />
                        </label>

                        <div className="flex gap-10 mt-8">
                            <Link href="/login">
                                <Button
                                    type="button"
                                    variant="outline"
                                    className="text-darkblue"
                                >
                                    Back to Login
                                </Button>
                            </Link>

                            <Button className="hover:bg-lightblue/80" type="submit">
                                {pending ? 'Sending mail...' : 'Reset Password'}
                            </Button>
                        </div>
                    </Form>


                </div>
            </div>
        </div>
    )
}

export default Restpassword