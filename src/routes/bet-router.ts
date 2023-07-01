import { Router } from "express";
import * as betController from "../controllers/bet-controller"
import { validateSchema } from "../middlewares/validateSchema";
import { betSchema, idBetSchema } from "../schemas/bet_schema";

const betRouter = Router();

betRouter.get("/bet", betController.getBets);
betRouter.post("/bet", validateSchema(betSchema), betController.createBet);
betRouter.put("/bet", validateSchema(idBetSchema), betController.updateBet);
betRouter.delete("/bet", betController.deleteBet);

export default betRouter;