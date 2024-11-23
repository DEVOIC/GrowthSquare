import { MoveUpRight } from 'lucide-react';
import React from 'react'

const Shortimg= ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <div className='relative z-10 border-4 w-fit'>
<div className=' absolute -left-2 -bottom-2'>
    <MoveUpRight className=" text-white " size={40} />
</div>
{children}

    </div>
  )
}

export default Shortimg