import { Request, Response } from "express";
import { AppDataSource } from "../../database/data-source";
import { ResponseUtil } from "../../utils/Response";
import { Paginator } from "../../database/Paginator";
import { validateOrReject } from "class-validator";
import { Pagamento } from "../../database/entities/Pagamento";
import { PagamentoDTO } from "../dtos/PagamentoDTO";

export class PagamentoController {
    async getPagamentos(req: Request, res: Response){
        const builder = await AppDataSource.getRepository(Pagamento).createQueryBuilder();
        const {records: pagamentos, paginationInfo} = await Paginator.paginate(builder, req);
        ResponseUtil.sendResponse(res, "Pagamentos encontrados com sucesso", pagamentos, paginationInfo);
    }

    async getPagamento(req: Request, res: Response){
        const {id} = req.params;
        const pagamento = await AppDataSource.getRepository(Pagamento).findOneByOrFail({
            id_pagamento: Number(id),
        });
        ResponseUtil.sendResponse(res, "Pagamento encontrado com sucesso", pagamento, null);
    }

    async create(req: Request, res: Response){
        const pagamentoData = req.body;

        const dto = new PagamentoDTO();
        Object.assign(dto, pagamentoData);

        await validateOrReject(dto);

        const repo = await AppDataSource.getRepository(Pagamento);
        const pagamento = repo.create(pagamentoData);
        await repo.save(pagamento);

        ResponseUtil.sendResponse(res, "Novo pagamento criado com sucesso", pagamento, 200);
    }

    async update(req: Request, res: Response){
        const {id} = req.params;
        const pagamentoData = req.body;

        const dto = new PagamentoDTO();
        Object.assign(dto, pagamentoData);
        dto.id_pagamento = parseInt(id);

        await validateOrReject(dto);

        const repo = AppDataSource.getRepository(Pagamento);

        const pagamento = await repo.findOneByOrFail({
            id_pagamento: Number(id),
        });

        repo.merge(pagamento, pagamentoData);
        await repo.save(pagamento);

        ResponseUtil.sendResponse(res, "Pagamento atualizado com sucesso", pagamento);
    }

    async delete(req: Request, res: Response){
        const {id} = req.params;

        const repo = AppDataSource.getRepository(Pagamento);

        const pagamento = await repo.findOneByOrFail({
            id_pagamento: Number(id),
        });

        await repo.remove(pagamento);

        ResponseUtil.sendResponse(res, "Pagamento deletado com sucesso", null);
    }
}