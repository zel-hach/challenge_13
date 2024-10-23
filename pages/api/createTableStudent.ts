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
  if (req.method === 'POST') {
    try {
      await pool.query(`
        DO $$
        BEGIN
            IF NOT EXISTS (SELECT 1 FROM pg_class WHERE relname = 'students_id_seq') THEN
                CREATE SEQUENCE students_id_seq;
            END IF;
        END $$;
      `);

      await pool.query(`
        CREATE TABLE IF NOT EXISTS students (
            id SERIAL PRIMARY KEY,
            first_name VARCHAR(50),
            last_name VARCHAR(50),
            email VARCHAR(100),
            note TEXT
        );
      `);
      
      res.status(200).json({ message: 'Table created successfully' });
    } catch (error) {
      console.error('Error creating table:', error);
      res.status(500).json({ error: 'Failed to create table' });
    }
  } else {
    res.setHeader('Allow', ['POST', 'GET', 'PUT', 'DELETE']);
    res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }
}
