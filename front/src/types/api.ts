export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

export interface Faq {
  _id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface FaqResponse {
  faqs: Faq[];
}

export interface Course {
  _id: string;
  title: string;
  description: string;
  price: number;
  duration: string;
  level: string;
}

export interface CourseResponse {
  courses: Course[];
}

export interface TeamMember {
  _id: string;
  name: string;
  position: string;
  bio: string;
  imageUrl?: string;
}

export interface Testimonial {
  _id: string;
  name: string;
  role: string;
  content: string;
  imageUrl?: string;
} 