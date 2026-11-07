import React from 'react'

const Header = (props) => {
  const logOut=()=>{
    localStorage.setItem('logInData','')
    // window.location.reload()
    props.changeUser("")
  }
  return (
    <div className='flex justify-between items-end text-white px-15 py-10'>
        <h1 className='text-3xl font-medium'>Hello,<br></br><span className='text-5xl font-semibold'>{props.data.firstName}👋</span></h1>
        <button onClick={logOut} className='bg-red-500 px-5 py-2 text-2xl rounded-xl'>Log Out </button>
    </div>
  )
}

export default Header
