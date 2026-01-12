import React, { useState } from 'react'

import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import{useNavigate} from 'react-router-dom'
function SignUp() {
  const primaryColor = "#ff4d2d";
  const hoverColor = "#e64323";
  const bgColor = "#fff9f6";
  const borderColor = "#ddd";
  const [showPassword, setShowPassword] = useState(false)
  const [role, setRole] = useState("user")
  const navigate=useNavigate()

  return (
    <div className='min-h-screen w-full flex items-center justify-center p-4 ' style={{ backgroundColor: bgColor }} >
      <div className={`bg-white rounded-xl shadow-lg w-full max-w-md p-8 border`} style={{
        border: `1px solid ${borderColor}`
      }

      }>
        <h1 className={`text-3xl  font-bold mb-2`} style={{ color: primaryColor }}>AnnDooth</h1>
        <p className='text-gray-600 mb-8'>Create your account to get started with delicious food deliveries</p>

        {/* fullName */}
        <div className='mb-4' >
          <label htmlFor="fullname" className='block text-gray-700 font-medium mb-1'>Full Name</label>
          <input type="text" className='w-full border rounded-lg px-3 py-2 focus:outline-none focus:border-orange-500' placeholder='Enter your full name' style={{
            border: `1px solid ${borderColor}`
          }} />
        </div>

        {/* email */}
        <div className='mb-4' >
          <label htmlFor="email" className='block text-gray-700 font-medium mb-1'>Email Id</label>
          <input type="email" className='w-full border rounded-lg px-3 py-2 focus:outline-none focus:border-orange-500' placeholder='Enter your Email Id' style={{
            border: `1px solid ${borderColor}`
          }} />
        </div>

        {/* mobile */}
        <div className='mb-4' >
          <label htmlFor="mobile" className='block text-gray-700 font-medium mb-1'>Mobile Number</label>
          <input type="number" className='w-full border rounded-lg px-3 py-2 focus:outline-none focus:border-orange-500' placeholder='Enter your Mobile Number' style={{
            border: `1px solid ${borderColor}`
          }} />
        </div>

        {/* password */}
        <div className='mb-4' >
          <label htmlFor="password" className='block text-gray-700 font-medium mb-1'>Password</label>
          <div className='relative'>
            <input type={`${showPassword ? "text" : "password"}`} className='w-full border rounded-lg px-3 py-2 focus:outline-none focus:border-orange-500' placeholder='Enter your Password' style={{
              border: `1px solid ${borderColor}`
            }} />

            <button className='absolute  cursor-pointer right-3 top-3 text-gray-500' onClick={() => setShowPassword(prev => !prev)} > {!showPassword ? <FaRegEye /> : <FaRegEyeSlash />}</button>
          </div>
        </div>

        {/* role */}
        <div className='mb-4' >
          <label htmlFor="role" className='block text-gray-700 font-medium mb-1'>Role</label>

          <div className='flex gap-2'>
            {["User", "Owner", "Delivery"].map((r) =>
            (
              <button className='flex-1 border rounded-lg px-3 py-2 text-center font-medium transition-colors cursor-pointer'
                onClick={() => setRole(r)}
                style={
                  role == r ? {
                    backgroundColor: primaryColor, color: 'white'
                  } : { border: ` 1px solid ${primaryColor}`, color: primaryColor }
                }>{r}</button>
            ))}
          </div>
        </div>

        <button className="w-full font-semibold py-2 rounded-lg transition duration-200 cursor-pointer bg-[#ff4d2d] hover:bg-[#e64323] text-white">
          Sign Up
        </button>
        <button className='w-full mt-4 flex items-center justify-center gap-2 border rounded-lg px-4 py-2 transition duration-200 border-gray-400 hover:bg-gray-100 cursor-pointer'>
          <FcGoogle size={22}/>
          <span>Sign up with Google</span>

        </button>
        <p className='text-center mt-6 cursor-pointer' onClick={()=>navigate("/signin")}>Already have an account ? <span className='text-[#ff4d2d]'>Sign In</span></p>


      </div>




    </div>
  )
}

export default SignUp
