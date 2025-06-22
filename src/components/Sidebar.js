import React from 'react'
import { useSelector } from 'react-redux'

const Sidebar = () => {

  const isMenuOpen  = useSelector((store) => store.app.isMenuOpen);

    return (
    isMenuOpen && 
    <div className='col-span-1 p-5 shadow-lg w-48'>
      <h1 className='font-bold text-xl'>Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Movies</li>
        <li>Gaming</li>
        <li>Learning</li>
        <li>Fashion</li>
        <li>Comedy</li>
      </ul>
      <h1 className='font-bold text-xl'>Watch Later</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Movies</li>
        <li>Gaming</li>
        <li>Learning</li>
        <li>Fashion</li>
        <li>Comedy</li>
      </ul>
      <h1 className='font-bold text-xl'>History</h1> 
      <ul>
          <li>Music</li>
          <li>Sports</li>
          <li>Movies</li> 
          <li>Gaming</li>
          <li>Learning</li>
          <li>Fashion</li>
      </ul>
    </div>
  )
}

export default Sidebar