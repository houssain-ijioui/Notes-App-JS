"use client"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNotes } from "@/store/features/noteAction";
import Navbar from "@/components/Navbar";
import NoteCard from "@/components/NoteCard";


export default function Home() {
  const notes = useSelector((state) => state.notes.notes)
  const dispatch = useDispatch()



  useEffect(() => {
    dispatch(getNotes())
  }, [])
  return (
    <div className="">
      <Navbar />
      <div className="flex flex-row">
        <Sidebar />
        <div className="grid grid-cols-3 gap-4 mt-4 ml-3 px-4">
          <NoteCard />
          <NoteCard />
          <NoteCard />
          <NoteCard />
          <NoteCard />
          <NoteCard />
          <NoteCard />
          <NoteCard />
          <NoteCard />
          <NoteCard />
          <NoteCard />
          <NoteCard />
          <NoteCard />
          <NoteCard />
        </div>
      </div>
    </div>
  );
}
