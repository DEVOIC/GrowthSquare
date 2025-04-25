import axios from "axios";

const API_BASE = `${process.env.NEXT_PUBLIC_BACK_API}/${process.env.NEXT_PUBLIC_ROUTE}`;

export const getUser = async () => {
    const response = await axios.get(`/api/auth/check-auth`, {
        withCredentials: true,
    });
    return response.data.data;
};

export const getUserProfile = async () => {
    const response = await axios.get(`/api/auth/get-user`, {
        withCredentials: true,
    });
    return response.data.data;
}


export const updateUserProfile = async (updatedProfile: FormData) => {
    const response = await axios.put(
        `${API_BASE}/auth/edit-profile`,
        updatedProfile,
        {
            withCredentials: true,
        }
    );
    return response.data.data;
};
