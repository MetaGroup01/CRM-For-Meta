import React from 'react'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    // For demo, accept any non-empty email/password
    if (email.trim() && password.trim()) {
      navigate('/dashboard')
    } else {
      alert('Please enter email and password')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex w-full max-w-4xl rounded-lg shadow-lg overflow-hidden">
        {/* Left side with blue gradient and logo */}
        <div className="w-1/2 bg-gradient-to-br from-blue-400 to-blue-600 flex flex-col justify-center items-center p-10 text-white relative">
          <div className="text-6xl font-bold mb-6">B</div>
          <div className="text-2xl font-semibold mb-10">BLUEBACK</div>
          <p className="text-xs absolute bottom-4 left-6 right-6 opacity-70">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>

        {/* Right side with login form */}
        <form onSubmit={handleLogin} className="w-1/2 bg-white p-10 rounded-r-lg flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-blue-600 mb-2">Welcome</h2>
          <p className="text-gray-600 mb-8">Login in to your account to continue</p>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mb-4 w-full py-3 px-4 rounded-full bg-green-100 placeholder-green-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mb-2 w-full py-3 px-4 rounded-full bg-green-100 placeholder-green-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <div className="text-right mb-6">
            <a href="#" className="text-sm text-gray-500 hover:text-blue-600">forgot your password?</a>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-full font-semibold hover:bg-blue-700 transition"
          >
            LOG IN
          </button>

          <p className="mt-6 text-center text-gray-600 text-sm">
            Don&apos;t have an account?{' '}
            <a href="#" className="text-blue-600 hover:underline">
              Sign Up
            </a>
          </p>
        </form>
      </div>
    </div>
  )
}
