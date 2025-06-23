import React, { useEffect, useState } from 'react'
import { Youtube_Api } from '../utils/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

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
        videos.map((video)=> (
          <Link to={`/watch?v=${video.id}`} key={video.id}>
          <VideoCard key={video.id} info={video} />
          </Link>  ))
      }
    </div>
  )
}

export default VideoContainer