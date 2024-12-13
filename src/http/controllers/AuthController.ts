import { NextFunction, Request, Response } from "express";
import { LoginDTO, RegisterDTO } from "../dtos/AuthDTO";
import { validateOrReject } from "class-validator";
import { AppDataSource } from "../../database/data-source";
import { User } from "../../database/entities/User";
import { ResponseUtil } from "../../utils/Response";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

export class AuthController{
    async register(req: Request, res: Response, next: NextFunction){
        const registerData = req.body;

        const dto = new RegisterDTO();
        dto.email = registerData.email;
        dto.name = registerData.name;
        dto.password = registerData.password;

        await validateOrReject(dto);

        const repo = AppDataSource.getRepository(User);
        const user = repo.create(registerData);
        await repo.save(user);

        ResponseUtil.sendResponse(res, "Successfully registered", user, null);
    }

    async login(req: Request, res: Response, next: NextFunction){
        const {email, password} =  req.body;

        const dto = new LoginDTO();
        dto.email = email;
        dto.password = password;

        await validateOrReject(dto);

        const repo = AppDataSource.getRepository(User);
        const user = await repo.findOneBy({email});

        if(!user){
            ResponseUtil.sendError(res, "Invalid credentials", 401, null);
            return;
        }

        let passwordMatches = await compare(password, user.password);

        if(!passwordMatches){
            ResponseUtil.sendError(res, "Invalid credentials", 401, null);
            return;
        }

        let accessToken = sign({userId: user.id}, process.env.ACCESS_KEY_SECRET || "secret123", {
            expiresIn: "30m"
        });

        const returnUser = user.toResponse();

        ResponseUtil.sendResponse(res, "User login success", {user: returnUser, accessToken})
    }
}