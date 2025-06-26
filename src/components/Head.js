import React, { useEffect, useState } from 'react'
import { Auto_suggest, Hamburger_icon, User_icon, Youtube_logo } from '../utils/constants'
import { toggleMenu } from '../utils/appSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { cacheResults } from '../utils/searchSlice'
import { useNavigate } from 'react-router-dom'



const Head = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cacheSearch = useSelector((store) => store.search)

  const [searchQuery,setSearchQuery] = useState("");
  const [suggestions,setSuggestions] = useState([]);
  const [showSuggestions,setShowSuggestions] = useState(false);


  function handleSuggestions(suggestion){
    setSearchQuery(suggestion);
    setShowSuggestions(false);
    navigate(`/results?search_query=${encodeURIComponent(suggestion)}`);
  }

  

  async function getSuggestions (){

    const data = await fetch(Auto_suggest + searchQuery);
    const json = await data.json();
    setSuggestions(json[1])

    dispatch(cacheResults({
      [searchQuery] : json[1]
    }))
  }

  useEffect(()=>{

    const timer = setTimeout(()=>{
      if(cacheSearch[searchQuery]){
        setSuggestions(cacheSearch[searchQuery])
      }else{
        getSuggestions();
      }
    },200)

    return () => {
      clearTimeout(timer);

    }
  },[searchQuery])

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
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setShowSuggestions(false)}
        />
        <button className='border border-gray-400 rounded-r-full p-2'>Search</button>
      </div>
  
      {/* Suggestions */}
      { showSuggestions && 
      <ul className='absolute top-full mt-1 w-[30rem] mr-9 bg-white border border-gray-300 rounded-md shadow-md z-10'>
        {
          suggestions.map((suggestion) => (
            <li key={suggestion} className='p-2 cursor-pointer hover:bg-gray-200'  onMouseDown={()=>handleSuggestions(suggestion)}> {suggestion} </li>
        ))}
      </ul>
      }
    </div>
  
    {/* Right Avatar */}
    <div className='place-items-end col-span-1'>
      <img alt='user' className='h-8' src={User_icon} />
    </div>
  </div>
  )
}

export default Head