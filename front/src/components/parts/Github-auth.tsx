"use client"
import { app } from "@/lib/firebase";
import { getAuth, GithubAuthProvider, signInWithPopup } from "firebase/auth";
import { Button } from "../ui/button";
import { FaGithub } from "react-icons/fa";
import axios from "axios";
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

const GithubAuth = () => {
    const router = useRouter()
    const handleGithub = async () => {
    const auth = getAuth(app)
    const provider = new GithubAuthProvider()
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
     router.push('/')
     }
     catch(error){
        console.error("Error during sign-in:",error)
    }
  }
   
  return (
    <div>
        <Button onClick={handleGithub}><FaGithub/></Button>
    </div>
  )
 }

export default GithubAuth