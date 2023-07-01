import express, { json } from "express";
import betRouter from "./routes/bet-router";

const app = express();
app.use(json());
app.use(betRouter);

const port: number = parseInt(process.env.PORT) || 5000;
app.listen(port, () => {
    console.log(`Server is up and running on port ${port}`);
})