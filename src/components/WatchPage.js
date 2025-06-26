import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useParams, useSearchParams } from 'react-router-dom';
import CommentSection from './CommentSection';
import LiveChat from './LiveChat';

const WatchPage = () => {

  const dispatch = useDispatch(); 
  const [searchParams] = useSearchParams()
  console.log(searchParams.get('v'))

  useEffect(()=>{
    dispatch(closeMenu());
  },[])


  return (
    <div className='flex flex-col'>
    <div className='px-5 flex w-full'>
      <div className='w-full'>
      <iframe width="1000" height="500"
      src={`https://www.youtube.com/embed/${searchParams.get('v')}?si=srXqdX32SPiYo6vH&amp;start=1`}
      title="YouTube video player" 
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
       allowFullScreen 
      ></iframe>
      </div>
      <div className='mx-2 px-2 w-full'>
        <LiveChat />
      </div>
    </div>
        <CommentSection />
    </div>
  )
}

export default WatchPage