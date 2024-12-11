import React from 'react'
import { SquareCheckBig } from 'lucide-react'

export const Courseadvan = () => {
    return (

        <div className='flex flex-wrap justify-center lg:justify-start lg:flex-row gap-6 mt-16 '>
            {[1, 2, 3, 4].map((advantage) => (
                <span key={advantage} className="shadow-sm bg-white z-30 w-70 relative flex gap-4 items-center py-4 px-4 rounded-none">
                    <SquareCheckBig className="w-4 h-4 text-green-500" />
                    <span className="font-semibold text-darkblue text-md">Lorem ipsum dolor sit </span>
                </span>
            ))}
        </div>
    )
}
