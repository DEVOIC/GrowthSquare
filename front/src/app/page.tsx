
// import { cookies } from "next/headers";
// import {useRouter} from "next/navigation";
// import { useEffect } from "react";

export default function Home() {
  // const router = useRouter()
  // useEffect(() => {
  //   const checkcookie = async () => {
  //     const cookieStore = await cookies()
  //     const token = cookieStore.get('token')
  //     if (token !=null ) {
  //    router.replace("/home")
  //     } else {
  //       router.replace("/login")
  //     }}
  //   checkcookie();
  // }, [])
  
 
  return (
    <>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        This is upcomming GrowthSQ by devoic website.
        please have patience.
      </div>
 
    </>
  );
}
