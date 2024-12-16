import { Request, Response } from "express";
import { AppDataSource } from "../../database/data-source";
import { ResponseUtil } from "../../utils/Response";
import { Paginator } from "../../database/Paginator";
import { validateOrReject } from "class-validator";
import { Fornecedor } from "../../database/entities/Fornecedor";
import { FornecedorDTO } from "../dtos/FornecedorDTO";

export class FornecedorController {
    async getFornecedores(req: Request, res: Response){
        const builder = await AppDataSource.getRepository(Fornecedor).createQueryBuilder();
        const {records: fornecedores, paginationInfo} = await Paginator.paginate(builder, req);
        ResponseUtil.sendResponse(res, "Fornecedores encontrados com sucesso", fornecedores, paginationInfo);
    }

    async getFornecedor(req: Request, res: Response){
        const {id} = req.params;
        const fornecedor = await AppDataSource.getRepository(Fornecedor).findOneByOrFail({
            id_fornecedor: Number(id),
        });
        ResponseUtil.sendResponse(res, "Fornecedor encontrado com sucesso", fornecedor, null);
    }

    async create(req: Request, res: Response){
        const fornecedorData = req.body;

        const dto = new FornecedorDTO();
        Object.assign(dto, fornecedorData);

        await validateOrReject(dto);

        const repo = await AppDataSource.getRepository(Fornecedor);
        const fornecedor = repo.create(fornecedorData);
        await repo.save(fornecedor);

        ResponseUtil.sendResponse(res, "Novo fornecedor criado com sucesso", fornecedor, 200);
    }

    async update(req: Request, res: Response){
        const {id} = req.params;
        const fornecedorData = req.body;

        const dto = new FornecedorDTO();
        Object.assign(dto, fornecedorData);
        dto.id_fornecedor = parseInt(id);

        await validateOrReject(dto);

        const repo = AppDataSource.getRepository(Fornecedor);

        const fornecedor = await repo.findOneByOrFail({
            id_fornecedor: Number(id),
        });

        repo.merge(fornecedor, fornecedorData);
        await repo.save(fornecedor);

        ResponseUtil.sendResponse(res, "Fornecedor atualizado com sucesso", fornecedor);
    }

    async delete(req: Request, res: Response){
        const {id} = req.params;

        const repo = AppDataSource.getRepository(Fornecedor);

        const fornecedor = await repo.findOneByOrFail({
            id_fornecedor: Number(id),
        });

        await repo.remove(fornecedor);

        ResponseUtil.sendResponse(res, "Fornecedor deletado com sucesso", null);
    }
}