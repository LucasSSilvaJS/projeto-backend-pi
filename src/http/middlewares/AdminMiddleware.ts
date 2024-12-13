import { NextFunction, Request, Response } from "express";
import { User } from "../../database/entities/User";
import { Role } from "../../constants/Role";
import { ResponseUtil } from "../../utils/Response";

export class AdminMiddleware{
    static async check(req: Request, res: Response, next: NextFunction){
        // @ts-ignore
        const user = req.user as User;
        if(user.role != Role.ADMIN){
            ResponseUtil.sendError(res, "Unauthorized", 403, null);
            return;
        }
        next();
    }
}