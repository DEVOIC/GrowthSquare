'use client'
import React from 'react'
import { Check, ChevronRight } from 'lucide-react'
import { CheckMark, PendingMark } from '@/components/ui/checkmark'
import { Checkbox } from "@/components/ui/checkbox"


export const Acknowledgement = ({ step }:{step:any}) => {
    return (
        <div>
            <div className='flex gap-4 lg:gap-8'>
                {step > 1 ? (
                    // Mark checked symbol
                    <CheckMark className=' scale-75 lg:scale-100 lg:mt-2'>
                        <Check size={48} color="#ffffff" strokeWidth={3} />
                    </CheckMark>
                ) : (
                    // Mark pending symbol
                    <PendingMark className='scale-75 lg:scale-100 lg:mt-2'>
                        <div className='rounded-full bg-lightblue w-[10px] h-[10px]' />
                    </PendingMark>
                )}

                <div className=" w-full flex flex-col text-md lg:text-xl text-darkblue  border-[1px] border-lightblue px-4 lg:px-10 bg-white z-10 relative py-2 lg:py-4 ">
                    <div className='flex items-center justify-between'>
                        <span className="font-semibold">3. Confirmation</span>
                        <div className="ml-auto lg:w-12 h-8 w-8 lg:h-12 rounded-full bg-blue-500 flex items-center justify-center text-white">
                            <ChevronRight />
                        </div>
                    </div>
                    {step > 1 && (
                        <div className="mt-8 space-y-4">
                            <div className="flex items-center gap-4">
                                <Checkbox
                                    id="terms"
                                    className="appearance-none h-4 w-4 border-2  bg-white checked:border-0 checked:z-10  checked:content-['✔']  flex items-center justify-center"
                                />
                                <label htmlFor="terms" className="text-sm">
                                    I agree to the Terms & Conditions and Refund Policy
                                </label>
                            </div>
                            <div className='flex  items-center gap-4 pb-4'>
                                <div className="lg:w-[20px] lg:h-[20px] p-1 lg:p-0 bg-[#00B200] rounded-full flex items-center justify-center">
                                    <Check size={12} color="#ffffff" strokeWidth={4} />
                                </div>
                                <p className='text-sm lg:text-lg'>Your payment is 100% secured with ABC encryption
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>

    )
}
