import type { NextApiRequest, NextApiResponse } from "next";
import pool from './db';

type Data = {
  message?: string; 
  error?: string; 
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    //get student with id
   if (req.method === 'GET'){
        const {id} = req.query;
        try{
            const getAllStudents = 'SELECT * FROM students Where id=$1';
            const result = await pool.query(getAllStudents,[id]); 
            const students = result.rows;
            res.status(200).json(students);
        }catch(error){
            console.log("failed to get Students: ",error);
            res.status(500).json({ error: 'Failed to Get' });
        }
  }
    else {
    res.setHeader('Allow', ['POST', 'GET','PUT','DELETE']);
    res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }
}
