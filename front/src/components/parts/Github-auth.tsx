"use client"
import { app } from "@/lib/firebase";
import { getAuth, GithubAuthProvider, signInWithPopup } from "firebase/auth";
import { Button } from "../ui/button";
import { FaGithub } from "react-icons/fa";


const githubAuth = () => {
    const handleGithub = async () => {
    const auth = getAuth(app)
    const provider = new GithubAuthProvider()
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
        <Button onClick={handleGithub}><FaGithub/></Button>
    </div>
  )
 }

export default githubAuth