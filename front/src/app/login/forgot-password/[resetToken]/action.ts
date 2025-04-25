import axios from "axios";

export const resetPassword = async (formData: FormData) => {
    const resetToken = formData.get('resetToken') as string;
    if (!resetToken) {
        throw new Error('Invalid reset token');
    }
    const rawFormData = {
        password: formData.get('newPassword') as string,
    }
    try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_BACK_API}/${process.env.NEXT_PUBLIC_ROUTE}/auth/reset-password/${resetToken}`,
            {
                password: rawFormData.password,
            },
        )
        const data = response
        return data;
    }
    catch (error:any) {
        return {
            status: error.response?.status || 500,
            data: error.response?.data || { message: "Something went wrong" }
        }
    }

}