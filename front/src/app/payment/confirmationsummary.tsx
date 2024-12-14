import React from 'react'
import { SquareCheckBig } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const Confirmationsummary = () => {
    return (
        <>
            <div className="lg:col-span-1 mt-6">
                <div className="bg-white  border-[1px] border-lightblue md:w-[550px] z-10 relative">
                    <div>
                        <h2 className="text-md pl-10 font-bold  text-darkblue py-6">ORDER SUMMARY - #07111124</h2>
                    </div>

                    {/* order details  */}

                    <div className='border-t-[1px] border-lightblue px-10'>

                        <div className='mt-8 flex gap-20 items-center text-xl font-semibold text-lightblue'>
                            <h3 className=" mb-2">Lorem ipsum dolor sit amet sit amet sit dolor</h3>
                            <span>₹999</span>
                        </div>

                        {/* course description */}

                        <div className="mt-2  flex justify-between items-center">
                            <p className="text-sm text-darkblue">
                                Lorem ipsum dolor sit amet sit amet lorem ipsum dolor sit amet sit amet lorem ipsum dolor sit amet sit amet lorem ipsum dolor sit
                            </p>
                        </div>
                        <div className='flex flex-wrap gap-4 mt-6 mb-12'>
                            {
                                [1, 2, 3, 4].map((item) => (
                                    <div key={item} className=" flex gap-4 items-center text-darkblue ">
                                        <SquareCheckBig size={15} strokeWidth={2} className='text-[#00B200]' />
                                        <span className='text-darkblue text-sm' >Lorem ipsum dolor sit</span>
                                    </div>
                                ))
                            }

                        </div>
                    </div>

                    <div className="border-t-[1px] border-lightblue px-10 py-4">
                        <div className='flex justify-between'>
                            <label
                                htmlFor="coupon"
                                className="text-md font-semibold"
                            >
                                Apply Coupon
                            </label>
                            <div className="flex items-center gap-3">
                                <input
                                    id="coupon"
                                    type="text"
                                    placeholder="Enter coupon code"
                                    className="w-full border-[2px] border-lightblue px-4 py-2 text-darkblue text-sm focus:outline-none focus:ring-1 focus:ring-lightblue"
                                />
                            </div>
                        </div>

                        <div className="mt-4 flex justify-between items-center text-darkblue">
                            <span className="text-md font-semibold">Est. Tax 5%</span>
                            <span className="text-xl font-semibold text-lightblue">₹50</span>
                        </div>
                        <div className="mt-6 flex justify-between items-center text-darkblue font-bold">
                            <span className="text-md font-semibold">Total Amount</span>
                            <span className="text-xl font-semibold text-lightblue">₹1049</span>
                        </div>
                    </div>

                    <div className="text-center text-sm mt-4 py-5 text-gray-500 border-t-[1px] border-lightblue">
                        <span className='text-darkblue text-lg font-semibold'>

                            {new Date().toLocaleDateString('en-US', { weekday: 'long' })}

                        </span>
                        <br />
                        <span className='text-darkblue font-medium'> {Date().slice(3, 16)} | {new Date().getHours()} : {new Date().getMinutes()} </span>
                    </div>
                    <div className='w-full flex justify-center py-4'>
                         <Button className="w-[60%] rounded-none hover:bg-lightblue/80" size="lg">
                        Purchase Now
                    </Button>
                    </div>
                   
                </div>
            </div>
        </>
    )
}
