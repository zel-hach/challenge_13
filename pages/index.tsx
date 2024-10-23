import AddStudent from "@/pages/Component/AddStudent";
import DisplayAll from "./Component/DisplayAll";
import { useEffect, useState } from "react";
export default function Home() {

  const [data,setData] =  useState<any[]>([])

  async function createTable() {
    try {
      const response = await fetch('/api/createTableStudent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw "feiled fetch data";
      }
      const data = await response.json();
    } catch (error) {
      console.error("Error during table creation:", error);
    }
  }
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
  
  useEffect(() => {
    const createTableandDisplaystudents = async() =>{
      await createTable();
      window.location.reload();
      await getAllStudent();
    }
    createTableandDisplaystudents();
  },[]);
  return (
    <>
      <AddStudent />
      <DisplayAll data={data}/>
    </>
  );
}
