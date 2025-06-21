"use client"
import { app } from "@/lib/firebase";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Button } from "../ui/button";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

const GoogleAuth = () => {

    const router = useRouter()
    const handleGoogle = async () => {
    const auth = getAuth(app)
    const provider = new GoogleAuthProvider()
     try{
        const results = await signInWithPopup(auth, provider)
        const token = await results.user.getIdToken()
        Cookies.set('token', token, {
                expires: 7,
                secure: true,
                sameSite: "Lax"
            });
        const response = await axios.post(`${process.env.NEXT_PUBLIC_BACK_API}/${process.env.NEXT_PUBLIC_ROUTE}/auth/google-login`,{},{
            headers: {
                "Content-Type": "application/json",
                Authorization: token
            }
     })
        if(response.status === 200){
            console.log("User logged in successfully")
        }
        else{
            console.error("Error logging in user")
        }
        console.log("User logged in successfully")
     router.push('/')
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

export default GoogleAuth