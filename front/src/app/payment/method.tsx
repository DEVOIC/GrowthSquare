"use client"
import React from 'react'
import { Check, ChevronRight } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Button } from "@/components/ui/button"
import { CheckMark, PendingMark } from '@/components/ui/checkmark'


interface PaymentMethod {
    value: string;
    label: string;
}

interface MethodProps {
    paymentMethod: string;
    setPaymentMethod: (method: string) => void;
    paymentMethods: PaymentMethod[];
    step: number;
}

export const Method: React.FC<MethodProps> = ({ paymentMethod, setPaymentMethod, paymentMethods, step }) => {
    return (
        <div>
            <div className='flex gap-4  lg:gap-8 mb-8'>
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

                <div className="w-full flex flex-col text-md lg:text-xl text-darkblue border-[1px] border-lightblue px-4 lg:px-10 bg-white z-10 relative  py-2 lg:py-4">
                    <div className='flex items-center justify-between'>
                        <span className="font-semibold">2. Select Payment Method</span>
                        <div className="ml-auto lg:w-12 h-8 w-8 lg:h-12 rounded-full bg-blue-500 flex items-center justify-center text-white">
                            <ChevronRight />
                        </div>
                    </div>

                    {step === 2 && (
                        <div className="mt-8 space-y-4">
                            <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                                {/* Mapping through the payment methods array */}
                                {paymentMethods.map((payment) => (
                                    <div key={payment.value} className="flex items-center space-x-4 mb-4">
                                        <RadioGroupItem value={payment.value} id={payment.value} />
                                        <Label htmlFor={payment.value} className="text-md lg:text-lg text-darkblue">{payment.label}</Label>
                                    </div>
                                ))}

                                {/* Conditionally rendering card payment details */}
                                {paymentMethod === "card" && (
                                    <div className="py-4 mb-8 px-4 lg:px-8 space-y-8 border-[1px] border-lightblue">
                                        <div className='flex lg:flex-row flex-col gap-4 w-full'>
                                            <Label htmlFor="cardNumber" className="text-md lg:text-lg w-[70%] font-medium">Card Number</Label>
                                            <Input id="cardNumber" placeholder="1234 - 5678 - 9012 - 3456" className="border-[2px] border-lightblue focus:border-transparent text-sm lg:text-lg  rounded-none  pl-4 font-semibold" />
                                        </div>
                                        <div className='flex lg:flex-row flex-col gap-4 w-full'>
                                            <Label htmlFor="cardName" className="text-md lg:text-lg w-[70%] font-medium">Card Holder Name</Label>
                                            <Input id="cardName" placeholder="John Doe" className="border-[2px] border-lightblue focus:border-transparent text-sm lg:text-lg  rounded-none  pl-4  font-semibold" />
                                        </div>

                                        <div className='flex lg:flex-row flex-col gap-4 w-full'>
                                            <Label htmlFor="expiry" className="text-md lg:text-lg w-[70%] font-medium">Expiry Date</Label>
                                            <Input id="expiry" placeholder="MM/YY" className="border-[2px] border-lightblue focus:border-transparent text-sm lg:text-lg  rounded-none  pl-4  font-semibold" />
                                        </div>
                                        <div className='flex lg:flex-row flex-col gap-4 w-full'>
                                            <Label htmlFor="cvv" className="text-md lg:text-lg w-[70%] font-medium">CVV Number</Label>
                                            <Input id="cvv" placeholder="123" className="border-[2px] border-lightblue focus:border-transparent text-sm lg:text-lg  rounded-none  pl-4  font-semibold" />
                                        </div>


                                        {/* Save & Continue Button using custom Button component */}
                                        <div className="">
                                            <Button
                                                variant="default"  // You can change this based on your design preference
                                                size="default"     // You can choose the button size as well (e.g., 'sm', 'lg')
                                                className="w-full mt-4"
                                            >
                                                Save & Continue
                                            </Button>
                                        </div>
                                    </div>
                                )}
                            </RadioGroup>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

