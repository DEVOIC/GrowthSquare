import { Loader2 } from 'lucide-react'

export default function Loading() {
  return (
    <div className="min-h-screen items-center bg-white">
      {/* Left Section */}
      {/* Right Section */}
      <div className="flex items-center justify-center p-8">
        <div className="text-center space-y-4">
          <Loader2 className="w-16 h-16 animate-spin text-lightblue mx-auto" />
          <h1 className="text-2xl font-bold text-gray-900">Loading...</h1>
          <p className="text-gray-600">Please wait while we prepare your content.</p>
        </div>
      </div>
    </div>
  )
}
