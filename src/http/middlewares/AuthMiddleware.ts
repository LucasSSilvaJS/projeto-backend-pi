import { NextFunction, Request, Response } from "express";
import { ResponseUtil } from "../../utils/Response";
import jwt from "jsonwebtoken";
import { AppDataSource } from "../../database/data-source";
import { User } from "../../database/entities/User";

export class AuthMiddleware{
    static async authenticate(req: Request, res: Response, next: NextFunction){
        const {authorization: tokenHeader} = req.headers;

        if(!tokenHeader){
            ResponseUtil.sendError(res, "Token not provided", 401, null);
            return;
        }

        const token = tokenHeader.split(" ")[1];

        try {
            const decoded = await jwt.verify(token, process.env.ACCESS_KEY_SECRET || "secret123");
            // @ts-ignore
            const {userId: id} = decoded;
            const repo = AppDataSource.getRepository(User);
            const user = await repo.findOneByOrFail({id});
            // @ts-ignore
            req.user = user;
        } catch (error) {
            console.error(error)
            ResponseUtil.sendError(res, "Invalid token", 401, null);
            return;
        }

        next();
    }
}