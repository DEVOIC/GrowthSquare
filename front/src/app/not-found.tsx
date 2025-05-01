import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white px-4 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-100 rounded-full opacity-30 blur-3xl z-0"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-200 rounded-full opacity-20 blur-2xl z-0"></div>

      {/* Main Card */}
      <div className="relative z-10 bg-white rounded-2xl shadow-2xl max-w-xl w-full p-10 space-y-6 text-center">
        {/* SVG Illustration */}
        <div className="flex justify-center">
          <img
            src="https://img.freepik.com/free-vector/404-error-lost-space-concept-illustration_114360-7971.jpg?t=st=1745318227~exp=1745321827~hmac=098881ad8df13de46d3d5586d9b7f782ec74ba5b32a103e9b644b836dfbb29ce&w=826"
            alt="Astronaut floating in space"
            className="h-32 md:h-40"
          />
        </div>

        <h1 className="text-6xl font-bold text-blue-700 font-outfit">404</h1>
        <h2 className="text-2xl font-outfit text-gray-800">Lost in Space</h2>
        <p className="text-gray-600 font-ebgaramond leading-relaxed">
          Oops! We couldn’t find the page you’re looking for. It might have drifted off or never existed.
        </p>
        <Link href="/">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg mt-4">
            Return to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
