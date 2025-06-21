import React from 'react'
import { Hamburger_icon, Youtube_logo } from './utils/constants'

const Head = () => {
  return (
    <div>
      <div>
        <img alt='menu' src={Hamburger_icon} />
        <img alt='Youtube-icon' src={Youtube_logo} />
      </div>
    </div>
  )
}

export default Head