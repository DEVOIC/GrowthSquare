import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen grid grid-cols-2">
      {/* Left Section */}
      <div className="bg-lightblue" />
      
      {/* Right Section */}
      <div className="flex items-center justify-center p-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">404</h1>
          <h2 className="text-2xl font-semibold text-gray-700">Page Not Found</h2>
          <p className="text-gray-600 max-w-md mx-auto">
            Sorry, we couldn&#39;t find the page youre looking for. It might have been removed, renamed, or doesn&#39;t exist.
          </p>
          <Button asChild className="bg-lightblue hover:bg-blue-700">
            <Link href="/">
              Return to Home
            </Link>
          </Button>
        </div>
      </div>
      
    </div>
  )
}

