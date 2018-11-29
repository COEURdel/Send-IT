import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

let poolConfig = new Pool({
    connectionString: process.env.DATABASE_URL,
  });
 

const connect=()=> poolConfig.connect()

const db={
  connect,
  query:(text, params) => poolConfig.query(text, params),
}

export default db;
