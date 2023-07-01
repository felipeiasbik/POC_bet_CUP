import { QueryResult } from "pg";
import { db } from "../database/database";
import { BetResult, IdBetResult, idDelete } from "../protocols";

export async function createBet(bet: BetResult): Promise<void>{
    await db.query(`
    INSERT INTO "games" (home, away, home_goals, away_goals) VALUES ($1, $2, $3, $4)
    `, [bet.home, bet.away, bet.home_goals, bet.away_goals]);
}

export async function getBets(): Promise<QueryResult<IdBetResult>>{
    const query = await db.query<IdBetResult>(`
    SELECT * FROM games
    `);

    return query;
}

export async function updateBet(bet: IdBetResult): Promise<void>{
    await db.query(`
    UPDATE games
    SET (home, away, home_goals, away_goals) = ($1, $2, $3, $4)
    WHERE id = $5
    `, [bet.home, bet.away, bet.home_goals, bet.away_goals, bet.id]);
}

export async function deleteBet(betDelete: idDelete): Promise<void>{
    await db.query(`
    DELETE FROM games wHERE id = $1`, [betDelete]);
}