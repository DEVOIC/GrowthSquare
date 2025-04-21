// "use client"

// import { useActionState, useEffect,startTransition } from "react"
// import {
//     InputOTP,
//     InputOTPGroup,
//     InputOTPSlot,
// } from "@/components/ui/input-otp"
// import { useState } from "react"
// import { Button } from "../ui/button"
// import { verifyUser } from "@/app/signup/actions"
// import { useToast } from "@/hooks/use-toast"
// import { useRouter } from "next/navigation"

// export const Otp = () => {
//     const { toast } = useToast()
//     const [value, setValue] = useState("")
// const [message, action, pending] = useActionState(verifyUser, null)
// const router = useRouter()
// const  handleSubmit = async() => {
//     startTransition(()=>{
//         action(value)
//     })
// }
// useEffect(() => {
//     if(message==="Email verified successfully"){
//         router.replace("/")
//     }
//     const showstate = () =>
//     {
//       toast({
//         description: message,
//       })
//     }
//     showstate();
//   }, [pending])

//     return (
//         <div className=" h-[100vh] md:min-h-screen grid md:grid-cols-2">
//             {/* Left Section */}
//             <div className="bg-lightblue md:inline hidden" />

//             {/* Right Section */}
//             <div className="flex flex-col items-center justify-center p-8">
//                 <div className="space-y-2 text-center mb-10">
//                     <h1 className="text-3xl font-bold tracking-tight">Enter OTP you Received </h1>
//                     <p> Enter OTP to verify your account  </p>
//                 </div>



//                 <InputOTP
//                     maxLength={6}
//                     value={value}
//                     onChange={(value) => setValue(value)}
//                 >
//                     <InputOTPGroup>
//                         <InputOTPSlot index={0} />
//                         <InputOTPSlot index={1} />
//                         <InputOTPSlot index={2} />
//                         <InputOTPSlot index={3} />
//                         <InputOTPSlot index={4} />
//                         <InputOTPSlot index={5} />
//                     </InputOTPGroup>
//                 </InputOTP>
//                 <div className="text-center text-sm mt-4">
//                     {value === "" ? (
//                         <>Enter your one-time password.</>
//                     ) : (
//                         <>You entered: {value}</>
//                     )}
//                 </div>
//                 <div className="flex justify-evenly items-center w-[60%] mt-10 ">

//                     <Button onClick={()=>{
//                         router.push('/signup')
//                     }} variant={"outline"} className="text-darkblue"> Go Back </Button>
//                     <Button disabled ={pending} onClick={
//                         handleSubmit
//                     } className="">
//                         {pending ? "Verifying..." : "Verify"}

//                         </Button>
//                 </div>

//             </div>
//         </div>
//     )
// }





"use client"

import { useState, useEffect, startTransition } from "react"
import { useActionState } from "react"
import { useRouter } from "next/navigation"
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from "@/components/ui/input-otp"
import { Button } from "../ui/button"
import { verifyUser } from "@/app/signup/actions"
import { useToast } from "@/hooks/use-toast"

export const Otp = () => {
    const [value, setValue] = useState("")
    const [message, action, pending] = useActionState(verifyUser, null)
    const { toast } = useToast()
    const router = useRouter()

    const handleSubmit = () => {
        startTransition(() => {
            action(value)
        })
    }

    useEffect(() => {
        if (message === "Email verified successfully") {
            router.replace("/")
        }
        if (message) {
            toast({ description: message })
        }
    }, [pending])

    return (
        <div className="relative min-h-screen flex items-center justify-center bg-lightblue/10 px-4">
            <div className='ellipse2 top-right -z-10 overflow-hidden'></div>
            <div className='ellipse2 bottom-0 left-0 -translate-x-1/3 -translate-y-1/3 absolute -z-10' />

            <div className="w-full max-w-md rounded-2xl shadow-xl bg-white p-8 space-y-6 border border-gray-100 text-center">
                <h1 className="text-3xl font-bold text-gray-900">Enter OTP</h1>
                <p className="text-sm text-muted-foreground">
                    Enter the 6-digit code we sent to your email
                </p>

                {/* OTP Input */}
                <div className="flex justify-center">
                    <InputOTP
                        maxLength={6}
                        value={value}
                        onChange={setValue}
                    >
                        <InputOTPGroup>
                            {Array.from({ length: 6 }).map((_, index) => (
                                <InputOTPSlot key={index} index={index} />
                            ))}
                        </InputOTPGroup>
                    </InputOTP>
                </div>

                {/* Value info */}
                <div className="text-sm text-muted-foreground">
                    {value ? <>You entered: <span className="font-medium text-lightblue">{value}</span></> : <>Please enter the OTP</>}
                </div>

                {/* Buttons */}
                <div className="flex items-center justify-between gap-4 mt-4">
                    <Button
                        variant="outline"
                        className="text-darkblue"
                        onClick={() => router.push('/login')}
                    >
                        Go Back
                    </Button>
                    <Button
                        onClick={handleSubmit}
                        disabled={pending}
                        className=" bg-lightblue hover:bg-blue-700 transition-colors duration-200"
                    >
                        {pending ? "Verifying..." : "Verify"}
                    </Button>
                </div>
            </div>
        </div>
    )
}
