"use client"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNotes } from "@/store/features/noteAction";
import Navbar from "@/components/Navbar";
import NoteCard from "@/components/NoteCard";
import Sidebar from "@/components/Sidebar";
import UpdateModal from "@/components/UpdateModal";


export default function Home() {
  const {notes, updateModal} = useSelector((state) => state.notes)
  const dispatch = useDispatch()

  const bgColors = ["bg-lightOrange", "bg-buttonColor", "bg-secondOrange", "bg-firstBlue", "bg-thirdOrange", "bg-lila"]
  let colorIndex = 0;
  function getNextColor() {
    const nextColor = bgColors[colorIndex];
    colorIndex = (colorIndex + 1) % bgColors.length; 
    return nextColor;
  }

  useEffect(() => {
    dispatch(getNotes())
  }, [])
  return (
    <div className={updateModal ? 'filter blur-sm': ''} >
      <Navbar />
      <div className="flex flex-row">
        <Sidebar />
        <div className="grid grid-cols-3 gap-4 ml-20 py-5 pr-4">
          {notes.map((note, index) => {
            return (
              <NoteCard key={index} id={note._id} description={note.description} createdAt={note.createdAt} bgColor={getNextColor()} />
            )
          })}
        </div>
        <UpdateModal />
      </div>
    </div>
  );
}
