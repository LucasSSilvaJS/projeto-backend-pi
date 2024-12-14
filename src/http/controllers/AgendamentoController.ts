import { Request, Response } from "express";
import { AppDataSource } from "../../database/data-source";
import { ResponseUtil } from "../../utils/Response";
import { Paginator } from "../../database/Paginator";
import { validateOrReject } from "class-validator";
import { Agendamento } from "../../database/entities/Agendamento";
import { AgendamentoDTO } from "../dtos/AgendamentoDTO";

export class AgendamentoController {
    async getAgendamentos(req: Request, res: Response){
        const builder = await AppDataSource.getRepository(Agendamento).createQueryBuilder();
        const {records: agendamentos, paginationInfo} = await Paginator.paginate(builder, req);
        ResponseUtil.sendResponse(res, "Agendamentos encontrados com sucesso", agendamentos, paginationInfo);
    }

    async getAgendamento(req: Request, res: Response){
        const {id} = req.params;
        const agendamento = await AppDataSource.getRepository(Agendamento).findOneByOrFail({
            id_agendamento: Number(id),
        });
        ResponseUtil.sendResponse(res, "Agendamento encontrado com sucesso", agendamento, null);
    }

    async create(req: Request, res: Response){
        const agendamentoData = req.body;

        const dto = new AgendamentoDTO();
        Object.assign(dto, agendamentoData);

        await validateOrReject(dto);

        const repo = await AppDataSource.getRepository(Agendamento);
        const agendamento = repo.create(agendamentoData);
        await repo.save(agendamento);

        ResponseUtil.sendResponse(res, "Novo agendamento criado com sucesso", agendamento, 200);
    }

    async update(req: Request, res: Response){
        const {id} = req.params;
        const agendamentoData = req.body;

        const dto = new AgendamentoDTO();
        Object.assign(dto, agendamentoData);
        dto.id_agendamento = parseInt(id);

        await validateOrReject(dto);

        const repo = AppDataSource.getRepository(Agendamento);

        const agendamento = await repo.findOneByOrFail({
            id_agendamento: Number(id),
        });

        repo.merge(agendamento, agendamentoData);
        await repo.save(agendamento);

        ResponseUtil.sendResponse(res, "Agendamento atualizado com sucesso", agendamento);
    }

    async delete(req: Request, res: Response){
        const {id} = req.params;

        const repo = AppDataSource.getRepository(Agendamento);

        const agendamento = await repo.findOneByOrFail({
            id_agendamento: Number(id),
        });

        await repo.remove(agendamento);

        ResponseUtil.sendResponse(res, "Agendamento deletado com sucesso", null);
    }
}