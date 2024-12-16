import { Request, Response } from "express";
import { AppDataSource } from "../../database/data-source";
import { ResponseUtil } from "../../utils/Response";
import { Paginator } from "../../database/Paginator";
import { validateOrReject } from "class-validator";
import { Funcionario } from "../../database/entities/Funcionario";
import { FuncionarioDTO } from "../dtos/FuncionarioDTO";

export class FuncionarioController {
    async getFuncionarios(req: Request, res: Response){
        const builder = await AppDataSource.getRepository(Funcionario).createQueryBuilder();
        const {records: funcionarios, paginationInfo} = await Paginator.paginate(builder, req);
        ResponseUtil.sendResponse(res, "Funcionários encontrados com sucesso", funcionarios, paginationInfo);
    }

    async getFuncionario(req: Request, res: Response){
        const {id} = req.params;
        const funcionario = await AppDataSource.getRepository(Funcionario).findOneByOrFail({
            id_usuario: parseInt(id)
        });
        ResponseUtil.sendResponse(res, "Funcionário encontrado com sucesso", funcionario, null);
    }

    async create(req: Request, res: Response){
        const funcionarioData = req.body;

        const dto = new FuncionarioDTO();
        Object.assign(dto, funcionarioData);
        dto.id_usuario = parseInt(funcionarioData.id_usuario);

        await validateOrReject(dto);

        const repo = await AppDataSource.getRepository(Funcionario);
        const funcionario = repo.create(funcionarioData);
        await repo.save(funcionario);

        ResponseUtil.sendResponse(res, "Novo funcionário criado com sucesso", funcionario, 200);
    }

    async update(req: Request, res: Response){
        const {id} = req.params;
        const funcionarioData = req.body;

        const dto = new FuncionarioDTO();
        Object.assign(dto, funcionarioData);
        dto.id_usuario = parseInt(id);

        await validateOrReject(dto);

        const repo = AppDataSource.getRepository(Funcionario);

        const funcionario = await repo.findOneByOrFail({
            id_usuario: parseInt(id)
        });

        repo.merge(funcionario, funcionarioData);
        await repo.save(funcionario);

        ResponseUtil.sendResponse(res, "Funcionário atualizado com sucesso", funcionario);
    }

    async delete(req: Request, res: Response){
        const {id} = req.params;

        const repo = AppDataSource.getRepository(Funcionario);

        const funcionario = await repo.findOneByOrFail({
            id_usuario: parseInt(id)
        });

        await repo.remove(funcionario);

        ResponseUtil.sendResponse(res, "Funcionário deletado com sucesso", null);
    }
}