import Joi from "joi";
import { BetResult, IdBetResult} from "../protocols";

export const betSchema = Joi.object<BetResult>({
    home: Joi.string().required(),
    away: Joi.string().required(),
    home_goals: Joi.number().required(),
    away_goals: Joi.number().required()
});

export const idBetSchema = Joi.object<IdBetResult>({
    id: Joi.number().required(),
    home: Joi.string().required(),
    away: Joi.string().required(),
    home_goals: Joi.number().required(),
    away_goals: Joi.number().required()
});