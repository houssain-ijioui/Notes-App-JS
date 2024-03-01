'use client';
import { closeUpdateModel } from '@/store/features/noteSlice';
import { Button, Label, Modal } from 'flowbite-react';
import { useSelector, useDispatch } from 'react-redux';
import PrimaryButton from './PrimaryButton';
import { useState } from 'react';

const UpdateModal = () => {
  const openModal = useSelector((state) => state.notes.updateModal)
  const noteToBeUpdated = useSelector((state) => state.notes.noteToBeUpdated)
  const [description, setDescription] = useState('');
  console.log(description);
  const dispatch = useDispatch();
  return (
    <>
      <Modal show={openModal} size="md" popup>
        <Modal.Body className='bg-lightOrange rounded-xl w-5/12 m-auto mt-32 p-5'>
          <div className=''>
            <form o className="mx-auto text-customblue rounded-xl">
              <div>
                <div className="mb-2 block">
                  <textarea value={noteToBeUpdated.description} onChange={(e) => setDescription(e.target.value)} className="w-full p-2 border h-56 rounded-l resize-none bg-lightOrange" placeholder="Enter note description ..."></textarea>
                </div>
              </div>
              <div className='w-full grid grid-cols-4 gap-4'>
                <PrimaryButton onClick={() => dispatch(closeUpdateModel())} color={"bg-red-700"} text={"Cancel"} />
                <PrimaryButton color={"bg-buttonColor"} text={"Add Note"} />
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default UpdateModal;