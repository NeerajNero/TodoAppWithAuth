import React from 'react'
import Link from 'next/link'

function UnauthorizedPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 text-white px-4">
      <div className="text-center max-w-md">
        <h1 className="text-4xl font-bold mb-4">🚫 Unauthorized Access</h1>
        <p className="text-gray-300 mb-6">
          You don’t have permission to view this page. Please sign in to continue.
        </p>
        <Link
          href="/api/auth/signin"
          className="inline-block px-6 py-3 bg-white text-gray-900 rounded-md font-semibold hover:bg-gray-200 transition"
        >
          Sign In
        </Link>
      </div>
    </div>
  )
}

export default UnauthorizedPage