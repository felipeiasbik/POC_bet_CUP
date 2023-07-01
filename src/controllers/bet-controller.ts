import { Request, Response } from "express";
import { BetResult, IdBetResult, idDelete } from "../protocols";
import * as betService from "../services/bet-service"
import httpStatus from "http-status";

export async function createBet(req: Request, res: Response): Promise<void>{
    try {
        const bet = req.body as BetResult; 
        betService.createBet(bet);
    
        res.sendStatus(httpStatus.CREATED);
        
    } catch (error) {
        console.log(error);
    }
}

export async function getBets(req: Request, res: Response): Promise<void>{
    try {
        const list = await betService.getBets();
        res.status(httpStatus.OK).send(list.rows);

    } catch (error) {
        console.log(error);
    }
}

export async function updateBet(req: Request, res: Response): Promise<void>{
    try {
        const bet = req.body as IdBetResult;
        betService.updateBet(bet);
    
        res.sendStatus(httpStatus.CREATED);
        
    } catch (error) {
        console.log(error);
    }
}

export async function deleteBet(req: Request, res: Response): Promise<void>{
    try {
        const id = req.body.id as idDelete;
        betService.deleteBet(id);
    
        res.sendStatus(httpStatus.OK);
        
    } catch (error) {
        console.log(error);
    }
}