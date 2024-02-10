"use client"
import { useState } from "react";

export default function Home() {
  const [file, setFile] = useState()
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(file);
    const data = new FormData();
    data.set('file', file);  // const file = data.get('file'); file name should be same data.get('file')=data.set('file',file);
    const result = await fetch("api/upload", { //wroute pathe
      method: "POST",
      body: data
    });
    if (!result.ok) throw new Error(await result.text());
    alert("Successfuly Uploaded");
    console.log(result)
  }
  return (

    <div>
      <h1>Upload Image</h1>

      <form action="" onSubmit={onSubmit}>
        <input
          type="file"
          name="file"
          onChange={(e) => { setFile(e.target.files?.[0]) }}
        />
        <button type="submit">Upload Image</button>

      </form>
    </div>
  );
}
