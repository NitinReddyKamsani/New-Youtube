import React from 'react'

const Sidebar = () => {
  return (
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