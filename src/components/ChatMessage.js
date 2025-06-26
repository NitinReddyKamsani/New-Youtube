import React, { useEffect } from 'react'
import { User_icon } from '../utils/constants'

const ChatMessage = ({name,message}) => {

  return (
    <div className='flex items-center gap-2'>
        <img src={User_icon} className='w-8 h-8' />
        <span className='font-bold'>{name}</span>
        <span>{message}</span>
    </div>
  )
}

export default ChatMessage