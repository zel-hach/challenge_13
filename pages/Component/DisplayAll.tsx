import React, { useEffect, useState } from 'react'

import { ST } from 'next/dist/shared/lib/utils';
import Students from './Students';


export default function DisplayAll(props:any) {


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
              props.data.map((student:any,index:number) => [
                <Students key={student.id} student={student} index={index}></Students>
              ])
            }
            </tbody>
        </table>
      
    </div>
  )
}
 