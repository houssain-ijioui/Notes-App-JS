import React from 'react'
import { Modal } from 'flowbite-react';
import PrimaryButton from './PrimaryButton';
import { useSelector, useDispatch } from 'react-redux';
import { closeCreateModal } from '@/store/features/noteSlice';


const CreateModal = () => {
    const dispatch = useDispatch();
    const openModal = useSelector(state => state.notes.createModal)

  return (
    <>
      <Modal show={openModal} size="md" popup>
        <Modal.Body className={`bg-firstBlue rounded-xl w-5/12 m-auto mt-32 p-5`}>
          <div className=''>
            <form o className="mx-auto text-customblue rounded-xl">
              <div>
                <div className="mb-2 block">
                  <textarea className={`w-full p-2 border h-56 rounded-l resize-none bg-firstBlue`} placeholder="Enter note description ..." required></textarea>
                </div>
              </div>
              <div className='w-full flex flex-row justify-center'>
                <PrimaryButton onClick={() => dispatch(closeCreateModal())} color={"bg-red-700"} text={"Cancel"} />
                <PrimaryButton color={"bg-darkButton"} text={"Create Note"} />
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default CreateModal
