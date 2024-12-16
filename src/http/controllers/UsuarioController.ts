import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../../database/data-source";
import { ResponseUtil } from "../../utils/Response";
import { validateOrReject } from "class-validator";
import { CadastrarDTO, EntrarDTO } from "../dtos/UsuarioDTO";
import { Usuario } from "../../database/entities/Usuario";

export class UsuarioController {
    async cadastrar(req: Request, res: Response, next: NextFunction){
        const registerData = req.body;

        const dto = new CadastrarDTO();
        dto.email = registerData.email;
        dto.senha = registerData.senha;
        dto.tipo_usuario = registerData.tipo_usuario;

        await validateOrReject(dto);

        const repo = AppDataSource.getRepository(Usuario);
        const user = repo.create(registerData);
        await repo.save(user);

        ResponseUtil.sendResponse(res, "Cadastrado com sucesso", user, null);
    }

    async entrar(req: Request, res: Response, next: NextFunction){
        const {email, senha} =  req.body;

        const dto = new EntrarDTO();
        dto.email = email;
        dto.senha = senha;

        await validateOrReject(dto);

        const repo = AppDataSource.getRepository(Usuario);
        const user = await repo.findOneBy({email, senha});

        if(!user){
            ResponseUtil.sendError(res, "Credenciais inválidas", 401, null);
            return;
        }

        ResponseUtil.sendResponse(res, "Usuário entrou no sistema", null)
    }
}