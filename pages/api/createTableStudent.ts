import type { NextApiRequest, NextApiResponse } from "next";
import pool from './db';

// create table students
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
      const createTableQuery = `
          CREATE TABLE IF NOT EXISTS students (
              id SERIAL PRIMARY KEY,
              first_name VARCHAR(50),
              last_name VARCHAR(50),
              email VARCHAR(100)  UNIQUE NOT NULL,
              note TEXT
          );
      `;
      await pool.query(createTableQuery);
      res.status(200).json({ message: 'Table created successfully' });
    } catch (error) {
      console.error('Error creating table:', error);
      res.status(500).json({ error: 'Failed to create table' });
    }
  } 
    else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }
}
