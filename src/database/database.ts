import pg, { PoolConfig } from "pg";
import dotenv from "dotenv";

dotenv.config();

const { Pool } = pg;

const connection: PoolConfig = {
    connectionString: process.env.DATABASE_URL,
  };

  if (process.env.MODE === "prod") connection.ssl = true;

  export const db = new Pool(connection);