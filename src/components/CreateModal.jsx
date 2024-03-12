import React, { useState } from 'react'
import { Modal } from 'flowbite-react';
import PrimaryButton from './PrimaryButton';
import { useSelector, useDispatch } from 'react-redux';
import { closeCreateModal } from '@/store/features/noteSlice';
import { getNotes } from '@/store/features/noteAction';


const CreateModal = () => {
    const dispatch = useDispatch();
    const openModal = useSelector(state => state.notes.createModal)
    const [ description, setDescription ] = useState('');


    const handleCreateNote = async () => {
      await fetch('http://localhost:3000/api/notes', {
        method: "POST",
        body: JSON.stringify({
          description: description
        })
      })
      dispatch(closeCreateModal())
      dispatch(getNotes())
      setDescription('')
    } 

  return (
    <>
      <Modal show={openModal} size="md" popup>
        <Modal.Body className={`bg-lightOrange rounded-xl w-5/12 m-auto mt-32 p-5`}>
          <div className=''>
            <form o className="mx-auto text-customblue rounded-xl">
              <div>
                <div className="mb-2 block">
                  <textarea className={`w-full p-2 border h-56 rounded-l resize-none bg-lightOrange`} placeholder="Enter note description ..." value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
                </div>
              </div>
              <div className='w-full flex flex-row justify-center'>
                <PrimaryButton onClick={() => dispatch(closeCreateModal())} color={"bg-red-700"} text={"Cancel"} />
                <PrimaryButton onClick={() => handleCreateNote()} color={"bg-darkButton"} text={"Create Note"} />
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default CreateModal
