import React from 'react'
import { User_icon } from '../utils/constants'

const CommentSection = () => {

  const CommentData = [
    {
        name: "Nitin Reddy",
        text: "This is nested comment section",
        replies: []
    },
    {
        name: "Nitin Reddy",
        text: "This is nested comment section",
        replies: [
            {
                name: "Nitin Reddy",
                text: "This is nested comment section",
                replies: []
            },
        ]
    },
    {
        name: "Nitin Reddy",
        text: "This is nested comment section",
        replies: [
            {
                name: "Nitin Reddy",
                text: "This is nested comment section",
                replies: []
            },
        ]
    },
    {
        name: "Nitin Reddy",
        text: "This is nested comment section",
        replies: [
            {
                name: "Nitin Reddy",
                text: "This is nested comment section",
                replies: [
                    {
                        name: "Nitin Reddy",
                        text: "This is nested comment section",
                        replies: []
                    },
                ]
            },
        ]
    },
    {
        name: "Nitin Reddy",
        text: "This is nested comment section",
        replies: []
    },
    {
        name: "Nitin Reddy",
        text: "This is nested comment section",
        replies: []
    },
    {
        name: "Nitin Reddy",
        text: "This is nested comment section",
        replies: [
            {
                name: "Nitin Reddy",
                text: "This is nested comment section",
                replies: []
            },
        ]
    },
  ];

  const Comment = ({ data }) => {
    const { name, text } = data;

    return (
      <div className='flex gap-4 bg-white p-4 rounded-lg shadow-sm my-3'>
        <img className="w-10 h-10 rounded-full" src={User_icon} alt="user-icon" />
        <div>
          <p className='font-semibold text-gray-800'>{name}</p>
          <p className='text-gray-700'>{text}</p>
        </div>
      </div>
    );
  };

  const CommentList = ({ comments, level = 0 }) => {
    return comments.map((comment, index) => (
      <div key={index} className={`ml-${level * 6} pl-4 border-l-2 border-gray-300`}>
        <Comment data={comment} />
        {comment.replies?.length > 0 && (
          <CommentList comments={comment.replies} level={level + 1} />
        )}
      </div>
    ));
  };

  return (
    <div className='max-w-[63rem] p-6 bg-gray-50 rounded-lg ml-5 my-3'>
      <h1 className='font-bold text-2xl mb-4'>Comments</h1>
      <CommentList comments={CommentData} />
    </div>
  );
};

export default CommentSection;
