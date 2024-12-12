import React from 'react'
import { SquareCheckBig } from 'lucide-react'

export const Courseadvantage = () => {
    return (
        <section className="bg-blue-600 py-10 lg:py-20  px-8 sm:px-16 md:px-28 ">
            <div className=" ">
                <h2 className=" text-3xl lg:text-5xl font-bold text-white mb-16">
                Lorem ipsum dolor sit amet,
                <br /> lit course advantage
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
                    {[1, 2, 3, 4, 5, 6].map((advantage) => (
                        <div key={advantage} className="bg-white p-6 rounded-none">
                            <SquareCheckBig className="w-6 h-6 text-green-500 mb-4" />
                            <p className="font-semibold text-darkblue text-xl">Lorem ipsum dolor sit amet sit amet sit</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
