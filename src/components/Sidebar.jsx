import React from 'react'
import Addbutton from './addbutton';
import { useSelector, useDispatch } from 'react-redux';
import { openCreateModal } from '@/store/features/noteSlice';

const Sidebar = () => {
  const dispatch = useDispatch()
  return (
    <div onClick={() => dispatch(openCreateModal())} className='pt-4 px-2 fixed'>
        <Addbutton />
    </div>
  )
}

export default Sidebar
