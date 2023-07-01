export type IdBetResult = {
    id: number,
    home: string,
    away: string,
    home_goals: number,
    away_goals: number
};

export type BetResult = Omit<IdBetResult, "id">;

export type idDelete = { id: number };