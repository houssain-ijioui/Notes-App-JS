'use client';
import { closeUpdateModel } from '@/store/features/noteSlice';
import { Modal } from 'flowbite-react';
import { useSelector, useDispatch } from 'react-redux';
import PrimaryButton from './PrimaryButton';
import { useCallback, useEffect, useState } from 'react';
import { getNotes } from "@/store/features/noteAction";

const UpdateModal = ({ bgColor }) => {
  const openModal = useSelector((state) => state.notes.updateModal)
  const noteToBeUpdated = useSelector((state) => state.notes.noteToBeUpdated)
  const updatedNoteId = useSelector((state) => state.notes.updatedNoteId)
  const [ newDescription, setNewDescription ] = useState("")
  const dispatch = useDispatch();

  const handleUpdate = useCallback(async (e) => {
    try {
      await fetch(`http://localhost:3000/api/notes/${updatedNoteId}`, {
        method: "PUT",
        body: JSON.stringify({
          description: newDescription
        }), 
      })
      dispatch(closeUpdateModel())
      dispatch(getNotes())
    } catch (error) {
      console.log("Updating Error", error);
    }
  }, [dispatch, newDescription, updatedNoteId])

  useEffect(() => {
    setNewDescription(noteToBeUpdated)
  }, [noteToBeUpdated])



  return (
    <>
      <Modal show={openModal} size="md" popup>
        <Modal.Body className={`bg-lightOrange rounded-xl w-5/12 m-auto mt-32 p-5`}>
          <div className=''>
            <form o className="mx-auto text-customblue rounded-xl">
              <div>
                <div className="mb-2 block">
                  <textarea value={newDescription} onChange={(e) => setNewDescription(e.target.value)} className={`w-full p-2 border h-56 rounded-l resize-none bg-lightOrange`} placeholder="Enter note description ..." required></textarea>
                </div>
              </div>
              <div className='w-full grid grid-cols-4 gap-4'>
                <PrimaryButton onClick={() => dispatch(closeUpdateModel())} color={"bg-red-700"} text={"Cancel"} />
                <PrimaryButton onClick={handleUpdate} color={"bg-buttonColor"} text={"Update Note"} />
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default UpdateModal;