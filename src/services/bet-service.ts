import * as betRepository from "../respositories/bet-repository"
import { BetResult, IdBetResult, idDelete } from "../protocols"
import { QueryResult } from "pg";

export async function createBet(bet: BetResult): Promise<void>{
    return await betRepository.createBet(bet);
}

export async function getBets(): Promise<QueryResult<IdBetResult>>{
    return await betRepository.getBets();
}

export async function updateBet(bet: IdBetResult): Promise<void>{
    return await betRepository.updateBet(bet);
}

export async function deleteBet(betDelete: idDelete) : Promise<void>{
    return await betRepository.deleteBet(betDelete);
}