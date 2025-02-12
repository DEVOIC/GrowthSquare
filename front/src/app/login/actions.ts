'use server'
import { cookies } from 'next/headers'
export async function loginUser(prestate:string,formData: FormData) {
  const cookieStore = await cookies()

    const rawFormData = {
        email: formData.get('email') as string,
        password: formData.get('password') as string,
      }
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACK_API}:${process.env.NEXT_PUBLIC_PORT}/${process.env.NEXT_PUBLIC_ROUTE}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',

      },
      credentials: 'include',
      body: JSON.stringify(rawFormData),
    })
    console.log("login",response);
 const token = response.headers.get('set-cookie');

 if (token) {
   

   cookieStore.set('token', token.slice(6, token.indexOf(';')));
 }
    // Handle response if necessary
    const data = await response.json()
    console.log(data);
 return data.message;
    // ...

    
}

export async function verifyUser(prestate:string,number:string) {
    
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACK_API}:${process.env.NEXT_PUBLIC_PORT}/${process.env.NEXT_PUBLIC_ROUTE}/auth/verify-email`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({verificationCode:number}),
        })
        // Handle response if necessary
        const data = await response.json()
        console.log(data);
     return data.message;
        // ...
    
        
    }