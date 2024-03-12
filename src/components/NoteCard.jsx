import React from 'react'
import { FaPen } from "react-icons/fa6";
import { MdDeleteOutline } from "react-icons/md";
import { openUpdateModal, populateUpdateModel, fillUpdateModalColor } from '@/store/features/noteSlice';
import { useDispatch, useSelector } from 'react-redux';
import handleDeleteNote from '@/util/deleteNote';
import { getNotes } from '@/store/features/noteAction';


const NoteCard = ({ description, createdAt, id, bgColor }) => {

  const dispatch = useDispatch()
  const handleUpdate = (id) => {
    dispatch(openUpdateModal())
    dispatch(populateUpdateModel(id))
    dispatch(fillUpdateModalColor(bgColor))
  }

  const handleDelete = async (id) => {
    await handleDeleteNote(id)
    dispatch(getNotes())
  }


  return (
    <div className={`${bgColor} py-5 px-2 rounded-lg h-72 flex flex-col justify-between`}>
      <div>
        <h3 className='border-b-2 border-gray-500 px-5'>{createdAt}</h3>
        <p className='whitespace-normal break-all px-5 py-4'>{description}</p>
      </div>
      <div className='flex flex-row self-end'>
        <MdDeleteOutline onClick={() => handleDelete(id)} className='text-white cursor-pointer text-2xl mr-2' />
        <FaPen onClick={() => handleUpdate(id)} className='text-white cursor-pointer self-end mb-1' />
      </div>
    </div>
  )
}

export default NoteCard;