import React, { useEffect, useState } from 'react'

export default function Update(props:any) {

  const [firstName,setFirstName] = useState<string>("");
  const [lastName,setLastName] = useState<string>("");
  const [email,setEmail] = useState<string>("");
  const [note,setNote] = useState<string>("");


  const UpdateDb = async () => {
      try {
    if (!firstName || !lastName || email || !note)
    {
      return;     
    }
    else
    {
    const response = await fetch('/api/AddStudentDb', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body:JSON.stringify({
        first_name:firstName,
        last_name:lastName,
        email:email,
        note:note,
        id:props.id
      })
    });
    if (response.ok) {
      const data = await response.json();
      alert('Student added successfully');
    } else
    {
      alert('Email already exists');
    }
  }
  } catch (error) {
    console.error("Error during table creation:", error);
  }
  }
  return (
    <div className='flex flex-col items-center gap-7 w-full m-12 bg-slate-800 rounded p-3'>
      <h1>Update information for student: <span className='bg-emerald-300'>{props.student.first_name} {props.student.last_name}</span></h1>
    <form className='w-full flex flex-col items-center gap-7' onSubmit={UpdateDb}>
  <div className='w-full flex flex-col '>
    <label className='invisible'>First Name</label>
    <input type='text' placeholder={props.student.first_name} className='rounded p-2 bg-inherit border-b-2 outline-none placeholder-opacity-hover' onChange={(e) => {setFirstName(e.target.value)}}></input>
  </div>
  <div className='w-full flex flex-col'>
    <label className='invisible'>Last Name</label>
    <input type='text' placeholder={props.student.last_name} className='rounded p-2 bg-inherit border-b-2 outline-none placeholder-opacity-hover'  onChange={(e) => {setLastName(e.target.value)}}></input>
  </div>
  <div className=' w-full flex flex-col '>
    <label className='invisible'>Email</label>
    <input type='email' placeholder={props.student.email} className='rounded p-2 bg-inherit border-b-2 outline-none placeholder-opacity-hover'  onChange={(e) => {setEmail(e.target.value)}}></input>
  </div>
  <div className='w-full flex flex-col'>
      <label className='invisible'>Note</label>
      <input type='text' placeholder={props.student.note } className='rounded p-2 bg-inherit border-b-2 outline-none placeholder-opacity-hover' onChange={(e) => {setNote(e.target.value)}}></input>
  </div>
  <div className='w-full flex justify-between gap-2'>
    <button className='w-full p-3 bg-emerald-600 rounded' >Cancel</button>
    <button className='w-full p-3 bg-zinc-950 rounded' >Update</button>
  </div>
  </form>
</div>
  )
}
