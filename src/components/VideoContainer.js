import React, { useEffect, useState } from 'react'
import { Youtube_Api } from '../utils/constants';
import VideoCard from './VideoCard';

const VideoContainer = () => {

  const [videos, setVideos] = useState([]);


  useEffect(()=>{
    getVideos();

  },[])

  async function getVideos(){ 
    const videos = await fetch(Youtube_Api);
    const json = await videos.json();
    setVideos(json.items)

  }

  return (
    <div className='flex flex-wrap'>
      {
        videos.map(video=> <VideoCard key={video.id} info={video} />)
      }
    </div>
  )
}

export default VideoContainer