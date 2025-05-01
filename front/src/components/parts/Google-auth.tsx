"use client"
import { app } from "@/lib/firebase";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Button } from "../ui/button";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";


const googleAuth = () => {
    const handleGoogle = async () => {
    const auth = getAuth(app)
    const provider = new GoogleAuthProvider()
     try{
        const results = await signInWithPopup(auth, provider)
        console.log(results)
        const token = await results.user.getIdToken()

        const response = await axios.post(`${process.env.NEXT_PUBLIC_BACK_API}/${process.env.NEXT_PUBLIC_ROUTE}/auth/google-login`,{
            headers: {
                "Content-Type": "application/json",
                Authorization: token
            }
     })

     console.log(response.data)
     }
     catch(error){
        console.error("Error during sign-in:",error)
    }
  }
   
  return (
    <div>
        <Button onClick={handleGoogle}><FcGoogle/></Button>
    </div>
  )
 }

export default googleAuth