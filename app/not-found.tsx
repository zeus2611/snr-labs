import { Home } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function NotFound() {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <Image
          src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWY2ZThpaHlybWR5b3pycmtyazZmNDdrb3pqZ2Z3Zm10N2s2YTV6cSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/C21GGDOpKT6Z4VuXyn/giphy.gif"
          alt="Funny 404 Not Found"
          width={400}
          height={300}
          className="object-contain mx-auto mb-4"
        />
        <p className="text-gray-600 mb-6">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          <Home className="mr-2 w-5 h-5" />
          Return Home
        </Link>
      </div>
    </div>
  )
}