
import { writeFile } from 'fs/promises'
import { NextResponse } from "next/server";

export async function POST(req) {
    const data = await req.formData();
    const file = data.get('file');
    if (!file) {
        return NextResponse.json({ "message": "No file provided.", success: false });
    }
    const byteData = await file.arrayBuffer();
    const buffer = Buffer.from(byteData);
    const path = `./public/${file.name}` //where file is store path name
    await writeFile(path, buffer);
    return NextResponse.json({ "message": "file uploaded", success: true })
}