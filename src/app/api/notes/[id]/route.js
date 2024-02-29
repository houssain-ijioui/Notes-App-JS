import { NextResponse } from "next/server"
import Note from "@/models/note.model"
import "@/lib/connectDB"


export async function GET(request, context) {
    try {
        const { id } = context.params
        const note = await Note.findById(id)
        return NextResponse.json({
            note
        })
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: `Oops Something went wrong`
        })
    }
}


export async function PUT(request, context) {
    try {
        const data = await request.json()
        const { id } = context.params
        await Note.findByIdAndUpdate(id, { description: data.description })
        return NextResponse.json({
            message: `${id} Updated`
        })
    } catch (error) {
        return NextResponse.json({
            message: `Oops something went wrong`
        })
    }
}


export async function DELETE(request, context) {
    try {
        const { id } = context.params
        await Note.findByIdAndDelete(id)
        return NextResponse.json({
            message: `Note Deleted`
        })
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: `Oops Something went wrong`
        })
    }
}

