'use server'

export async function createUser(prestate:string,formData: FormData) {
console.log(prestate);
    const rawFormData = {
        name: formData.get('name') as string,
        email: formData.get('email') as string,
        password: formData.get('password') as string,
      }
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACK_API}:${process.env.NEXT_PUBLIC_PORT}/auth/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(rawFormData),
    })
 
    // Handle response if necessary
    const data = await response.json()
    console.log(data);
 return data.message;
    // ...

    
}