import React from 'react'

const VideoCard = ({ info }) => {

    if (!info) return null

    const {snippet,statistics} = info;
    const {channelTitle,title,thumbnails} = snippet;
    const {viewCount,likeCount} = statistics;
  
  return (

    <div className='p-2 m-2 w-72 h-72 shadow-lg rounded-lg'>
        <img className="rounded-lg" alt="thumbnails" src={thumbnails.medium.url} />
        <ul>
    <li className='font-bold py-2 text-sm truncate'>{channelTitle}</li>
    <li className='text-sm line-clamp-2 break-words'>{title}</li>
    <li className='text-xs text-gray-600'>{viewCount} views</li>
    <li className='text-xs text-gray-600'>{likeCount} likes</li>

        </ul>
    </div>
  )
}

export default VideoCard