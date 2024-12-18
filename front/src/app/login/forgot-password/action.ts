'use server'

export async function forgotPassword(prestate: string, formData: FormData) {
    const rawFormData = {
        email: formData.get('email') as string,
    }
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACK_API}:${process.env.NEXT_PUBLIC_PORT}/${process.env.NEXT_PUBLIC_ROUTE}/auth/forgot-password`, {
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