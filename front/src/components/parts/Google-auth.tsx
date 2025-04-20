"use client"
import { app } from "@/lib/firebase";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Button } from "../ui/button";
import { FcGoogle } from "react-icons/fc";


const googleAuth = () => {
    const handleGoogle = async () => {
    const auth = getAuth(app)
    const provider = new GoogleAuthProvider()
     try{
        const results = await signInWithPopup(auth, provider)
        console.log(results)
        try{
            //api call
        }
        catch(error){
            console.log(error)
        }
     }
     catch(error){
        console.log(error)
    }
  }
   
  return (
    <div>
        <Button onClick={handleGoogle}><FcGoogle/></Button>
    </div>
  )
 }

export default googleAuth