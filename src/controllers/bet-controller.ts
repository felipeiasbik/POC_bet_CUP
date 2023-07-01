import { Request, Response } from "express";
import { BetResult, IdBetResult, idDelete } from "../protocols";
import * as betService from "../services/bet-service"
import httpStatus from "http-status";

export async function createBet(req: Request, res: Response): Promise<void>{
    const bet = req.body as BetResult; 
    betService.createBet(bet);

    res.sendStatus(httpStatus.CREATED);
}

export async function getBets(req: Request, res: Response): Promise<void>{
    const list = await betService.getBets();
    res.status(httpStatus.OK).send(list.rows);
}

export async function updateBet(req: Request, res: Response): Promise<void>{
    const bet = req.body as IdBetResult;
    betService.updateBet(bet);

    res.sendStatus(httpStatus.CREATED);
}

export async function deleteBet(req: Request, res: Response): Promise<void>{
    const id = req.body.id as idDelete;
    betService.deleteBet(id);

    res.sendStatus(httpStatus.OK);
}