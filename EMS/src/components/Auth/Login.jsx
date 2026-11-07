import React, { useState } from 'react'

const Login = ({handleLogin}) => {
    const[email,setEmail]= useState('')
    const[password,setPassword]=useState('')

    const Submit= (e)=>{
        e.preventDefault()
        handleLogin(email,password)
        setEmail('')
        setPassword('')
    }

    const Email=(e)=>{
        setEmail(e)
    }
    const Pass=(e)=>{
        setPassword(e)
    }
  return (
    <div className='h-screen w-screen flex justify-center items-center'>
        <div className='border-emerald-400 border-2 p-25 rounded-2xl'>
            <form onSubmit={(e)=>{
                Submit(e)
            }} className='flex flex-col justify-center items-center'>
                <input onChange={(e)=>{
                    Email(e.target.value)
                }} className='text-gray-400 bg-transparent text-xl border-emerald-400 border-2 rounded-full px-10 py-4' type='email' value={email} placeholder='Enter Your E-mail'>
                </input >
                <input onChange={(e)=>{
                    Pass(e.target.value)
                }} className='text-gray-400 bg-transparent text-xl border-emerald-400 border-2 rounded-full mt-5 px-10 py-4' type='password' value={password} placeholder='Enter Your Password'>
                </input>
                <button className='text-white text-md px-5 py-2 bg-emerald-400 text-md border-2 rounded-2xl mt-6'>Log in</button>
            </form>
        </div>
      
    </div>
  )
}

export default Login
