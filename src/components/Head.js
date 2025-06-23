import React from 'react'
import { Hamburger_icon, User_icon, Youtube_logo } from '../utils/constants'
import { toggleMenu } from '../utils/appSlice'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'



const Head = () => {

  const dispatch = useDispatch();


  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  }


  return (
    <div className='grid grid-flow-col p-5 m-2 gap-7 shadow-lg'>
      <div className='flex gap-4 col-span-1'>
        <img alt='menu' className='h-8 cursor-pointer' src={Hamburger_icon} onClick={()=> toggleMenuHandler()} />
        <img alt='Youtube-icon' className='h-16 -mt-4' src={Youtube_logo} />
      </div>
      <div className='col-span-10 items-center flex justify-center'>
        <input type='text' placeholder='Search' className='w-1/2 rounded-l-full p-2 border border-gray-400' />
        <button className='border border-gray-400 rounded-r-full p-2'>Search</button>
      </div>
      <div className='place-items-end col-span-1'>
        <img alt='user' className='h-8' src={User_icon} /> 
      </div>
    </div>
  )
}

export default Head