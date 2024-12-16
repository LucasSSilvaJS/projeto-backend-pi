import { Request, Response } from "express";
import { AppDataSource } from "../../database/data-source";
import { ResponseUtil } from "../../utils/Response";
import { Paginator } from "../../database/Paginator";
import { validateOrReject } from "class-validator";
import { Agendamento } from "../../database/entities/Agendamento";
import { AgendamentoDTO } from "../dtos/AgendamentoDTO";
import { Atendimento } from "../../database/entities/Atendimento";
import { AtendimentoDTO } from "../dtos/AtendimentoDTO";

export class AtendimentoController {
    async getAtendimentos(req: Request, res: Response){
        const builder = await AppDataSource.getRepository(Atendimento).createQueryBuilder();
        const {records: atendimentos, paginationInfo} = await Paginator.paginate(builder, req);
        ResponseUtil.sendResponse(res, "Atendimentos encontrados com sucesso", atendimentos, paginationInfo);
    }

    async getAgendamento(req: Request, res: Response){
        const {id} = req.params;
        const atendimento = await AppDataSource.getRepository(Atendimento).findOneByOrFail({
            id_atendimento: parseInt(id)
        });
        ResponseUtil.sendResponse(res, "Atendimento encontrado com sucesso", atendimento, null);
    }

    async create(req: Request, res: Response){
        const atendimentoData = req.body;

        const dto = new AtendimentoDTO();
        Object.assign(dto, atendimentoData);
        // dto.id_agendamento = parseInt(atendimentoData.id_agendamento);

        await validateOrReject(dto);

        const repo = await AppDataSource.getRepository(Atendimento);
        const atendimento = repo.create(atendimentoData);
        await repo.save(atendimento);

        ResponseUtil.sendResponse(res, "Novo atendimento criado com sucesso", atendimento, 200);
    }

    async update(req: Request, res: Response){
        const {id} = req.params;
        const atendimentoData = req.body;

        const dto = new AtendimentoDTO();
        Object.assign(dto, atendimentoData);
        dto.id_atendimento = parseInt(id);

        await validateOrReject(dto);

        const repo = AppDataSource.getRepository(Atendimento);

        const atendimento = await repo.findOneByOrFail({
            id_atendimento: parseInt(id)
        });

        repo.merge(atendimento, atendimentoData);
        await repo.save(atendimento);

        ResponseUtil.sendResponse(res, "Atendimento atualizado com sucesso", atendimento);
    }

    async delete(req: Request, res: Response){
        const {id} = req.params;

        const repo = AppDataSource.getRepository(Atendimento);

        const atendimento = await repo.findOneByOrFail({
            id_atendimento: parseInt(id)
        });

        await repo.remove(atendimento);

        ResponseUtil.sendResponse(res, "Atendimento deletado com sucesso", null);
    }
}