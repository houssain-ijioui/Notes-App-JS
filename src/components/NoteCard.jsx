import React from 'react'

const NoteCard = ({ description, createdAt }) => {
  return (
    <div className='bg-orange-300 py-5 px-1 rounded-lg h-72'>
      <h3 className='border-b-2 border-gray-500 px-5'>{createdAt}</h3>
      <p className='whitespace-normal break-all px-5 py-4'>{description}</p>
    </div>
  )
}

export default NoteCard;