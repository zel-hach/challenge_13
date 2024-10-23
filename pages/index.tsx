import AddStudent from "@/pages/Component/AddStudent";
import DisplayAll from "./Component/DisplayAll";
import { useEffect } from "react";
export default function Home() {

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

  useEffect(() => {
    createTable();
  },[]);

  return (
    <>
      <AddStudent />
      <DisplayAll />
    </>
  );
}
