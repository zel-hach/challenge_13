import React from 'react'

export default function DeleteSTudent(props:any) {

  const Cancel = () =>{
    props.setDelete_s(false)
  }

  const confirmedDelete = async() =>{
    try{
      const response = await fetch(`api/AddStudentDb`,
        {
          method:'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
          body:JSON.stringify({
            id:props.id
          })
        }
      )
      if(response.ok){
        props.setDelete_s(false)
        window.location.reload();
      }
    }catch(e)
    {
      console.log("feiled to fetch data: ",e);
    }
  }
  return (
    <div className='flex flex-col items-center gap-7 w-full m-12  bg-emerald-200 text-black p-3 rounded'>
      <div>
      <p>Are you sure you want to delete this student?</p>
      <p> This action cannot be undone.</p>
      </div>
      <div className='flex justify-between gap-4'>
        <button className='bg-green-700 p-3 rounded' onClick={Cancel}>cancel</button>
        <button className='bg-red-900 p-3 rounded' onClick={confirmedDelete}>confirm</button>
      </div>
    </div>
  )
}
