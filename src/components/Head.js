import React, { useEffect, useState } from 'react'
import { Auto_suggest, Hamburger_icon, User_icon, Youtube_logo } from '../utils/constants'
import { toggleMenu } from '../utils/appSlice'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'



const Head = () => {

  const dispatch = useDispatch();

  const [searchQuery,setSearchQuery] = useState("");


  async function getSuggestions (){

    const data = await fetch(Auto_suggest + searchQuery);
    const json = await data.json();
    console.log(json[1]);
    
  }

  useEffect(()=>{

    const timer = setTimeout(()=>{
      getSuggestions();
    },200)

    return () => {
      clearTimeout(timer);

    }
  }

  ,[searchQuery])



  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  }


  return (
    <div className='grid grid-flow-col p-5 m-2 gap-7 shadow-lg relative'>
    {/* Left Menu */}
    <div className='flex gap-4 col-span-1'>
      <img alt='menu' className='h-8 cursor-pointer' src={Hamburger_icon} onClick={() => toggleMenuHandler()} />
      <img alt='Youtube-icon' className='h-16 -mt-4' src={Youtube_logo} />
    </div>
  
    {/* Search Bar + Suggestions */}
    <div className='col-span-10 items-center flex flex-col relative'>
      <div className='flex w-full justify-center'>
        <input
          type='text'
          placeholder='Search'
          className='w-1/2 rounded-l-full p-2 border border-gray-400'
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className='border border-gray-400 rounded-r-full p-2'>Search</button>
      </div>
  
      {/* Suggestions */}
      <ul className='absolute top-full mt-1 w-[30rem] mr-9 bg-white border border-gray-300 rounded-md shadow-md z-10'>
        <li className='p-2 hover:bg-gray-100 cursor-pointer'>Shorts</li>
        <li className='p-2 hover:bg-gray-100 cursor-pointer'>Home</li>
        <li className='p-2 hover:bg-gray-100 cursor-pointer'>Subscriptions</li>
      </ul>
    </div>
  
    {/* Right Avatar */}
    <div className='place-items-end col-span-1'>
      <img alt='user' className='h-8' src={User_icon} />
    </div>
  </div>
  )
}

export default Head