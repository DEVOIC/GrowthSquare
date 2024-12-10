// import { MoveUpRight } from 'lucide-react';
// import React from 'react'

// const Shortimg= ({
//     children,
//   }: Readonly<{
//     children: React.ReactNode;
//   }>) => {
//   return (
//     <div className='relative z-10 border-4 w-fit'>
// <div className=' absolute -left-2 -bottom-2'>
//     <MoveUpRight className=" text-white " size={40} />
// </div>
// {children}

//     </div>
//   )
// }

// export default Shortimg



import { MoveUpRight } from 'lucide-react';
import React from 'react';
import { cn } from '@/lib/utils';

const Shortimg = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        style={{
          boxShadow: '12px 32px 80px -20px rgba(32, 32, 32, 0.05)', // or you can customize as needed
        }}
        className={cn(
          "relative z-10 border-4 w-fit bg-card text-card-foreground shadow drop-shadow-lg shadow-gray-500",
          className
        )}
        {...props}
      >
        <div className="absolute -left-2 -bottom-2">
          <MoveUpRight className="text-white" size={40} />
        </div>
        {children}
      </div>
    );
  }
);

Shortimg.displayName = "Shortimg";

export default Shortimg;
