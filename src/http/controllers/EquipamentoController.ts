import { Request, Response } from "express";
import { AppDataSource } from "../../database/data-source";
import { ResponseUtil } from "../../utils/Response";
import { Paginator } from "../../database/Paginator";
import { validateOrReject } from "class-validator";
import { Fornecedor } from "../../database/entities/Fornecedor";
import { FornecedorDTO } from "../dtos/FornecedorDTO";
import { Equipamento } from "../../database/entities/Equipamento";
import { EquipamentoDTO } from "../dtos/EquipamentoDTO";

export class EquipamentoController {
    async getEquipamentos(req: Request, res: Response){
        const builder = await AppDataSource.getRepository(Equipamento).createQueryBuilder();
        const {records: equipamentos, paginationInfo} = await Paginator.paginate(builder, req);
        ResponseUtil.sendResponse(res, "Equipamentos encontrados com sucesso", equipamentos, paginationInfo);
    }

    async getEquipamento(req: Request, res: Response){
        const {id} = req.params;
        const equipamento = await AppDataSource.getRepository(Equipamento).findOneByOrFail({
            id_equipamento: Number(id),
        });
        ResponseUtil.sendResponse(res, "Equipamento encontrado com sucesso", equipamento, null);
    }

    async create(req: Request, res: Response){
        const equipamentoData = req.body;

        const dto = new EquipamentoDTO();
        Object.assign(dto, equipamentoData);

        await validateOrReject(dto);

        const repo = await AppDataSource.getRepository(Equipamento);
        const equipamento = repo.create(equipamentoData);
        await repo.save(equipamento);

        ResponseUtil.sendResponse(res, "Novo equipamento criado com sucesso", equipamento, 200);
    }

    async update(req: Request, res: Response){
        const {id} = req.params;
        const equipamentoData = req.body;

        const dto = new EquipamentoDTO();
        Object.assign(dto, equipamentoData);
        dto.id_equipamento = parseInt(id);

        await validateOrReject(dto);

        const repo = AppDataSource.getRepository(Equipamento);

        const equipamento = await repo.findOneByOrFail({
            id_equipamento: Number(id),
        });

        repo.merge(equipamento, equipamentoData);
        await repo.save(equipamento);

        ResponseUtil.sendResponse(res, "Equipamento atualizado com sucesso", equipamento);
    }

    async delete(req: Request, res: Response){
        const {id} = req.params;

        const repo = AppDataSource.getRepository(Equipamento);

        const equipamento = await repo.findOneByOrFail({
            id_equipamento: Number(id),
        });

        await repo.remove(equipamento);

        ResponseUtil.sendResponse(res, "Equipamento deletado com sucesso", null);
    }
}