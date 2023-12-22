import { NextResponse } from "next/server";
import Contact from "@/app/models/contact";
import connectDB from "@/app/lib/mongodb";
import mongoose from "mongoose";

export const GET = async (request) => {
    try {
        await connectDB();
        const posts = await Contact.find();
        return new NextResponse(JSON.stringify(posts), {status: 200})
        
    } catch(error){
        return new NextResponse("Error"+ error,{status:500})
    }
}