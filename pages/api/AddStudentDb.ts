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
    //ADD students to table
    if (req.method === 'POST') {
        const { first_name, last_name, email, note } = req.body;
        try {
      const insertStudents = `INSERT INTO students (first_name,last_name,email,note)
                VALUES ($1, $2, $3, $4);`;
    await pool.query(insertStudents, [first_name, last_name, email, note]);
    res.status(200).json({ message: 'Table created successfully' });
    } catch (error) {
      console.error('failed insert to table:', error);
      res.status(500).json({ error: 'Failed to insert' });
    }
  } 
  //get ALL student
  else if (req.method === 'GET'){

        try{
            const getAllStudents = 'SELECT * FROM students';
            const result = await pool.query(getAllStudents); 
            const students = result.rows;
            res.status(200).json(students);
        }catch(error){
            console.log("failed to get Students: ",error);
            res.status(500).json({ error: 'Failed to Get' });
        }
  }
  // update Student
  else if (req.method === 'PUT'){
    const { id, first_name, last_name, email, note } = req.body;
    try{
        const updateStudents = `UPDATE students
        SET first_name=$1,last_name = $2, email= $3, note = $4
        where id =$5;
        `;
        await pool.query(updateStudents,[first_name,last_name,email,note,id])
    }catch(error){
        console.log("fieled to updating :",error);
        res.status(500).json({error:'feiled to updating'})
    }
  }
  //delete student from the table
  else if (req.method === 'DELETE'){
    const {id} = req.body;
    try{
        const deleteStudents = `DELETE FROM students
        Where id=$1;
       `;
       pool.query(deleteStudents,[id]);
       res.status(200).json({ message: 'student deleted successfully' });

    }catch(error){
        console.log("fieled to delete Students: ", error);
        res.status(500).json({error:'fieled to deleting students'});
    }
  }
    else {
    res.setHeader('Allow', ['POST', 'GET','PUT','DELETE']);
    res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }
}
