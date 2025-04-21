// 'use client'
// import React from 'react'
// import { Button } from '@/components/ui/button'
// import { Input } from '@/components/ui/input'
// import { useActionState } from 'react'
// import { forgotPassword } from './action'
// import Form from 'next/form'
// import { useEffect } from 'react'
// import { useToast } from '@/hooks/use-toast'
// import Link from 'next/link'
// export const dynamic = "force-dynamic";

// const Restpassword = () => {

//     const [state, action, pending] = useActionState(forgotPassword, null);
//     const { toast } = useToast()
//     useEffect(() => {

//         const showstate = () => {
//             toast({
//                 description: state,
//             })

//         }
//         showstate();
//     }
//         , [pending])

//     return (
//         <div className=" h-[100vh] md:min-h-screen grid lg:grid-cols-2">
//             {/* Left Section */}
//             <div className="bg-lightblue lg:inline hidden" />

//             {/* Right Section */}
//             <div className="flex flex-col items-center justify-center p-8">
//                 <div className="space-y-2 text-center mb-10 flex justify-center flex-col items-center">
//                     <h1 className="text-3xl md:text-4xl  font-bold font-transforma tracking-tight mb-4">Forgot your password? </h1>
//                     <p className="text-sm text-[12px] w-[70%] md:w-full font-regulartext-gray-500">No worries!
//                         Enter the email address associated with your account
//                         <br />
//                         and we&apos;ll send you a link to reset your password.
//                     </p>
//                 </div>
//                 <div className="flex justify-center md:justify-evenly items-center w-[60%] ">
//                     <Form action={action}>
//                         <label htmlFor="email" className="flex gap-4">
//                             <Input
//                                 id="email"
//                                 type="email"
//                                 name='email'
//                                 placeholder="Enter your email"
//                                 className=""
//                                 aria-label="Email Address"
//                                 required
//                             />
//                         </label>

//                         <div className="flex gap-10 mt-8">
//                             <Link href="/login">
//                                 <Button
//                                     type="button"
//                                     variant="outline"
//                                     className="text-darkblue"
//                                 >
//                                     Back to Login
//                                 </Button>
//                             </Link>

//                             <Button className="hover:bg-lightblue/80" type="submit">
//                                 {pending ? 'Sending mail...' : 'Reset Password'}
//                             </Button>
//                         </div>
//                     </Form>


//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Restpassword




'use client'

import React, { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useActionState } from 'react'
import { forgotPassword } from './action'
import Form from 'next/form'
import { useToast } from '@/hooks/use-toast'
import Link from 'next/link'

export const dynamic = "force-dynamic";

const Restpassword = () => {
    const [state, action, pending] = useActionState(forgotPassword, null)
    const { toast } = useToast()

    useEffect(() => {
        if (state) {
            toast({ description: state })
        }
    }, [pending])

    return (
        <div className="relative min-h-screen flex items-center justify-center bg-lightblue/10 px-4">
            {/* Optional background ellipses */}
            <div className="ellipse2 top-right -z-10 overflow-hidden"></div>
            <div className="ellipse2 bottom-0 left-0 -translate-x-1/3 -translate-y-1/3 absolute -z-10" />

            <div className="w-full max-w-md rounded-2xl shadow-xl bg-white p-8 space-y-6 border border-gray-100 text-center">
                <div className="space-y-2">
                    <h1 className="text-2xl md:text-4xl font-bold font-transforma text-gray-900">
                        Forgot your password?
                    </h1>
                    <p className="text-sm text-muted-foreground px-4">
                        No worries! Enter the email address associated with your account and we’ll send you a link to reset your password.
                    </p>
                </div>

                <Form action={action} className="space-y-6">
                    <Input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        required
                    />

                    <div className="flex justify-between gap-4 pt-2">
                        <Link href="/login" className="w-1/2">
                            <Button
                                type="button"
                                variant="outline"
                                className="w-full text-darkblue"
                            >
                                Back to Login
                            </Button>
                        </Link>

                        <Button
                            type="submit"
                            className="w-1/2 bg-lightblue hover:bg-blue-700"
                            disabled={pending}
                        >
                            {pending ? 'Sending mail...' : 'Reset Password'}
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default Restpassword
