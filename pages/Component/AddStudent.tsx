import React, { useState } from 'react'

export default function AddStudent() {

  const [firstName,setFirstName] = useState<string>("");
  const [lastName,setLastName] = useState<string>("");
  const [email,setEmail] = useState<string>("");
  const [note,setNote] = useState<string>("");
  const [firstN_empty,setFirstN_empty] = useState(false);
  const [LastN_empty,setLastN_empty] = useState(false);
  const [email_empty,Emailempty] = useState(false);
  const [note_empty,setNote_empty] = useState(false);


  const AddStudentDb = async () => {  
    try {
      if (!firstName || !lastName || !email || !note)
        {
          if(!firstName)
            setFirstN_empty(true);
          if(!lastName)
            setLastN_empty(true);
          if(!email)
            Emailempty(true);
          if(!note)
            setNote_empty(true);
        }
        else
        {
    const response = await fetch('/api/AddStudentDb', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body:JSON.stringify({
        first_name:firstName,
        last_name:lastName,
        email:email,
        note:note
      })
    });
    if (response.ok) {
      const data = await response.json();
      alert('Student added successfully');
    } else if (response.status === 409) {
      alert('Email already exists');
    }
  }
  } catch (error) {
    console.error("Error during table creation:", error);
  }

  }
   return (
    <div className='flex flex-col items-center gap-7 w-full m-12'>
    <form className='w-full flex justify-center items-center gap-7' onSubmit={AddStudentDb}>
    <div className='w-full flex flex-col '>
      <label className='invisible'>First Name</label>
      <input type='text' placeholder='FirstName' className='rounded p-2 bg-inherit border-b-2 outline-none' onChange={(e)=>{setFirstName(e.target.value)}}></input>
      {
        firstN_empty && <p className='text-red-600'>first name is empty</p>
      }
    </div>
    <div className='w-full flex flex-col'>
      <label className='invisible'>Last Name</label>
      <input type='text' placeholder='LastName' className='rounded p-2 bg-inherit border-b-2 outline-none' onChange={(e) => {setLastName(e.target.value)}}></input>
      {
        LastN_empty && <p className='text-red-600'>Lastname is empty</p>
      }
    </div>
    <div className=' w-full flex flex-col '>
      <label className='invisible'>Email</label>
      <input type='email' placeholder='Email' className='rounded p-2 bg-inherit border-b-2 outline-none' onChange={(e) =>{setEmail(e.target.value)}} ></input>
      {
        email_empty && <p className='text-red-600'>email is empty</p>
      }
    </div>
    <div className='w-full flex flex-col'>
        <label className='invisible'>Note</label>
        <input type='text' placeholder='Note' className='rounded p-2 bg-inherit border-b-2 outline-none' onChange={(e) => {setNote(e.target.value)}}></input>
        {
       note_empty && <p className='text-red-600'>Note is empty</p>
      }
    </div>
    <div className='w-full flex justify-center'>
      <button className='w-full p-3 bg-emerald-300 text-xl text-black rounded' >Add</button>
    </div>
    </form>
  </div>
  )
}
