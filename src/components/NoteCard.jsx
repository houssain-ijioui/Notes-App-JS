import React from 'react'
import { FaPen } from "react-icons/fa6";
import { openUpdateModal, populateUpdateModel } from '@/store/features/noteSlice';
import { useDispatch, useSelector } from 'react-redux';


const NoteCard = ({ description, createdAt, id, bgColor }) => {

  const dispatch = useDispatch()
  const handleUpdate = (id) => {
    dispatch(openUpdateModal())
    dispatch(populateUpdateModel(id))
  }


  return (
    <div className={`${bgColor} py-5 px-2 rounded-lg h-72 flex flex-col justify-between`}>
      <div>
        <h3 className='border-b-2 border-gray-500 px-5'>{createdAt}</h3>
        <p className='whitespace-normal break-all px-5 py-4'>{description}</p>
      </div>
      <FaPen onClick={() => handleUpdate(id)} className='text-white cursor-pointer self-end' />
    </div>
  )
}

export default NoteCard;