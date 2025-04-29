import {
    ApiResponse,
    // Faq,
    FaqResponse,
    // Course,
    CourseResponse,
    // TeamMember,
    Testimonial
} from '@/types/api';

// Base URL for API requests
//const BASE_URL = `${process.env.NEXT_PUBLIC_BACK_API}/${process.env.NEXT_PUBLIC_ROUTE}`;

// Generic fetch function with error handling
async function fetchAPI<T>(endpoint: string, options: RequestInit = {}): Promise<ApiResponse<T>> {
    const url = `/api${endpoint}`;
    try {
        const response = await fetch(url, {
            ...options,
            headers: {
                'Content-Type': 'application/json',
                ...options.headers,
            },
        });

        if (!response.ok) {
            throw new Error(`API error: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('API request failed:', error);
        throw error;
    }
}

// FAQ API
export async function getFaqs() {
    return fetchAPI<FaqResponse>('/auth/faq/get-faqs');
}

// Courses API
export async function getCourses() {
    return fetchAPI<CourseResponse>('/auth/course/get-all-courses');
}

// Testimonials API
export async function getTestimonials() {
    return fetchAPI<Testimonial[]>('/auth/testimonials/get-testimonials');
}
