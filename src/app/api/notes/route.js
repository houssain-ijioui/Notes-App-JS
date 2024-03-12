import { NextResponse } from "next/server"
import Note from "@/models/note.model"
import "@/lib/connectDB"


export async function GET(request) {
    const notes = await Note.find().sort({ createdAt: -1 });
    return NextResponse.json(notes)
}



export async function POST(request) {
    try {
        const data = await request.json()

        const note = new Note({
            description: data.description
        })

        await note.save()

        return NextResponse.json({
            message: "Note Created",
            note
        })
    } catch (error) {
        console.log(error);
    }
    
}

