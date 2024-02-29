"use client"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNotes } from "@/store/features/noteAction";



export default function Home() {
  const notes = useSelector((state) => state.notes.notes)
  const dispatch = useDispatch()



  useEffect(() => {
    dispatch(getNotes())
  }, [])
  return (
    <div>
      {notes.map((note, index) => (
        <div key={index}>
          <h1>{note.description}</h1>
          <h1>{note.createdAt}</h1>
        </div>
      ) )}
    </div>
  );
}
