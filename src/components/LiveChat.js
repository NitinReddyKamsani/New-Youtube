import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addChat} from '../utils/chatSlice';
import { getRandomMessage, getRandomName } from '../utils/helper';
import store from '../utils/store';

const LiveChat = () => {

    const dispatch = useDispatch();

    const ChatMessages = useSelector((store) => store.chat.messages)

    const [liveMessage,setLiveMessage] = useState("")


        useEffect(()=>{
            const i = setInterval(()=>{
                dispatch(addChat({
                    name : getRandomName(),
                    message : getRandomMessage()
                }))
            },2000)

            return () => {
                clearInterval(i);
            }
        },[])



  return (
    <>
    <div className='w-full h-[500px] border border-black p-2 bg-slate-100 rounded-md overflow-y-scroll flex flex-col-reverse'>
        {
            ChatMessages.map((message,index)=>(
                <ChatMessage key={index} name={message.name} message={message.message} />
            ))
        }
    </div>
   <form className='border border-black p-2 mt-2 w-full' onSubmit={(e)=>{
    e.preventDefault()
    dispatch(addChat({
        name : "Nitin Reddy",
        message : liveMessage
    })
    );
    setLiveMessage("")
    }}>
    <input type='text' placeholder='Type a message' className='w-72 border border-black rounded-md px-2' value={liveMessage} onChange={(e)=>{
        setLiveMessage(e.target.value)
        
    }}/>
    <button className='mx-1 bg-green-300 px-2 rounded-md '>Send</button>
   </form>

   </>
  )
}

export default LiveChat