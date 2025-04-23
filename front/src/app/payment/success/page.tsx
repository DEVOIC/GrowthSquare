import Link from "next/link"
import { Check } from 'lucide-react'
import Navbar from "@/components/parts/navbar"       //navbar imported from parts folder
import Footer from "@/components/parts/footer"       //footer imported from parts folder
import { Button } from "@/components/ui/button"
import Recommended from "@/components/parts/recommended"
export const dynamic = "force-dynamic";

export default function PaymentSuccessPage() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Navigation */}

      <Navbar />

      {/* Ellipses */}
      <div className="ellipse2 top-right mt-28 opacity-20  "></div>
      <div className="ellipse2 mid-left "></div>

      {/* Success Message */}
      <div className="max-w-4xl mx-auto md:mt-[170px] px-4 text-center">

        <div className="flex items-center md:flex-row flex-col mt-40 mdmt-0   justify-center gap-10">

          <div className="w-[72px] h-[72px] bg-[#00B200] rounded-full flex items-center justify-center ">
            <Check size={48} color="#ffffff" strokeWidth={3} />
          </div>

          <h1 className="text-[2.53rem] font-bold text-[#00B200]">Payment Successful</h1>

        </div>

        <p className="text-[#001233] font-medium  text-xl mt-[60px]">
          Lorem ipsum dolor sit amet sit amet lorem ipsum dolor sit amet sit amet lorem ipsum dolor sit amet
          lorem ipsum dolor sit amet
        </p>
        <div className=" mt-16 lg:mt-20 flex flex-col gap-8 items-center justify-center">

          {/* button for going back to homepage  */}

          <Link href="/home">
            <Button variant={'outline'} className="border-[1px] border-[#015AFF] w-[100%] lg:w-[430px] text-[1.2rem] hover:text-[#015AFF] py-7  text-[#015AFF] font-bold ">
              <p className="">Go To Homepage</p>
            </Button>
          </Link>

          <Link href="/courses">
            <Button variant={'default'} className="text-2xl w-[350px] lg:w-[430px] py-7  font-semibold">
              <p className="">Start Learning</p>
            </Button>
          </Link>

        </div>
      </div>
      <div className="h-[1px]  w-full bg-[#001233] mt-20 lg:mt-40">

      </div>
      {/* Recommended Courses */}

      <Recommended />

      {/* Footer */}
      <div className=" bg-darkblue">
        <Footer />
      </div>
    </div>
  )
}