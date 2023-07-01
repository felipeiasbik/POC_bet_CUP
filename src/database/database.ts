import pg from "pg";

const { Pool } = pg;

const db = new Pool({
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "1382",
    database: "palpites"
});

export { db };