import React, { useEffect, useState } from 'react'

import { ST } from 'next/dist/shared/lib/utils';
import Students from './Students';


export default function DisplayAll() {

  const [data,setData] =  useState<any[]>([])

  
 
  useEffect(()=>{
    const getAllStudent = async () =>{
      try{
        const response = await fetch(`/api/AddStudentDb`,
          {
            method:'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )
        if(response.ok)
        {
          const data = await response.json()
          setData(data);
        }
      }catch(e)
      {
        console.log("failed to fetch data: ",e)
      }

    }
    getAllStudent();
  },[])

  return (
    <div className='flex justify-center gap-7  m-12'>
        <table className='w-full m-auto'>
            <tbody className='w-full m-auto'>
            <tr className='flex justify-between p-2 text-xl text-black bg-emerald-300'>
                <th>Action</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Note</th>
            </tr>
            {
              data.map((student,index) => [
                <Students key={student.id} student={student} index={index}></Students>
              ])
            }
            </tbody>
        </table>
      
    </div>
  )
}
 