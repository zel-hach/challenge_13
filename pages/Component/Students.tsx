import React, { useState } from 'react'
import Popup from 'reactjs-popup';
import Update from './Update';
import DeleteSTudent from './DeleteStudent';

export default function Students(props:any) {
    const [Update_s,setUpdate_s] = useState<boolean>(false);
    const [delete_s,setDelete_s] = useState<boolean>(false);
    const onclose = () =>{
        setUpdate_s(false);
      }
    
      const openPopup = () =>{
        setUpdate_s(true);
      }
    
    
      const oncloseDelete = () =>{
        setDelete_s(false);
      }
    
      const openDelete = () => {
        setDelete_s(true);
      }
  return (
    < >
        <tr className='flex justify-between p-3'>
                <td className='flex gap-3'>
                  <button className='bg-green-600 p-2 rounded' onClick={openPopup}>update</button>
                  <button className='bg-red-900 p-2 rounded' onClick={openDelete}>delete</button>
                </td>
                <td>{props.student.first_name}</td>
                <td>{props.student.last_name}</td>
                <td>{props.student.email}</td>
                <td>{props.student.note}</td>
            </tr>
            <Popup open={Update_s} closeOnDocumentClick onClose={onclose}>
                <Update id={props.student.id} setUpdate_s={setUpdate_s} student={props.student}></Update>
      </Popup>
      <Popup open={delete_s} closeOnDocumentClick onClose={oncloseDelete}>
        <DeleteSTudent id={props.student.id} setDelete_s={setDelete_s}></DeleteSTudent>
      </Popup>
    </>
  )
}
