'use server'

export async function createContact(prestate: string, formData: FormData) {
  console.log(prestate);
  const rawFormData = {
    name: formData.get('name') as string,
    email: formData.get('email') as string,
    collegeName: formData.get('collegeName') as string,
    contactNumber: formData.get('contactNumber') as string,
    yearOfGraduation:Number( formData.get('yearOfGraduation') ),
  }
  const response = await fetch(`${process.env.NEXT_PUBLIC_BACK_API}:${process.env.NEXT_PUBLIC_PORT}/${process.env.NEXT_PUBLIC_ROUTE}/auth/contact/create-contact`, {
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

