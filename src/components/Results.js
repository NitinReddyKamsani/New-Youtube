import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { apiKey } from '../utils/constants';

const Results = () => {
  const [videos, setVideos] = useState([]);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const query = searchParams.get('search_query');

  useEffect(() => {
    const fetchResults = async () => {
      const data = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${query}&key=${apiKey}`);
      const json = await data.json();
      setVideos(json.items);
    };
    fetchResults();
  }, [query]);

  const handleVideoClick = (videoId) => {
    navigate(`/watch?v=${videoId}`);
  };

  return (
    <div className='p-5'>
      <h2 className='text-xl font-bold mb-4'>Search Results for "{query}"</h2>
      <div className='grid gap-4'>
        {videos.map(video => (
          <div 
            key={video.id.videoId} 
            className='cursor-pointer flex items-center gap-4 border p-2 rounded hover:bg-gray-100'
            onClick={() => handleVideoClick(video.id.videoId)}
          >
            <img 
              src={video.snippet.thumbnails.medium.url} 
              alt={video.snippet.title} 
              className='w-48 rounded'
            />
            <div>
              <p className='font-medium'>{video.snippet.title}</p>
              <p className='text-sm text-gray-600'>{video.snippet.channelTitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};



export default Results;
