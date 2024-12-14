import { Request, Response } from "express";
import { AppDataSource } from "../../database/data-source";
import { ResponseUtil } from "../../utils/Response";
import { Paginator } from "../../database/Paginator";
import { validateOrReject } from "class-validator";
import { Agendamento } from "../../database/entities/Agendamento";
import { AgendamentoDTO } from "../dtos/AgendamentoDTO";
import { Notificacao } from "../../database/entities/Notificacao";
import { NotificacaoDTO } from "../dtos/NotificacaoDTO";

export class NotificacaoController {
    async getNotificacoes(req: Request, res: Response){
        const builder = await AppDataSource.getRepository(Notificacao).createQueryBuilder();
        const {records: notificacoes, paginationInfo} = await Paginator.paginate(builder, req);
        ResponseUtil.sendResponse(res, "Notificações encontradas com sucesso", notificacoes, paginationInfo);
    }

    async getNotificacao(req: Request, res: Response){
        const {id} = req.params;
        const notificacao = await AppDataSource.getRepository(Notificacao).findOneByOrFail({
            id_notificacao: Number(id),
        });
        ResponseUtil.sendResponse(res, "Notificação encontrada com sucesso", notificacao, null);
    }

    async create(req: Request, res: Response){
        const notificacaoData = req.body;

        const dto = new NotificacaoDTO();
        Object.assign(dto, notificacaoData);

        await validateOrReject(dto);

        const repo = await AppDataSource.getRepository(Notificacao);
        const notificacao = repo.create(notificacaoData);
        await repo.save(notificacao);

        ResponseUtil.sendResponse(res, "Nova notificação criada com sucesso", notificacao, 200);
    }

    async update(req: Request, res: Response){
        const {id} = req.params;
        const notificacaoData = req.body;

        const dto = new NotificacaoDTO();
        Object.assign(dto, notificacaoData);
        dto.id_notificacao = parseInt(id);

        await validateOrReject(dto);

        const repo = AppDataSource.getRepository(Notificacao);

        const notificacao = await repo.findOneByOrFail({
            id_notificacao: Number(id),
        });

        repo.merge(notificacao, notificacaoData);
        await repo.save(notificacao);

        ResponseUtil.sendResponse(res, "Notificação atualizada com sucesso", notificacao);
    }

    async delete(req: Request, res: Response){
        const {id} = req.params;

        const repo = AppDataSource.getRepository(Notificacao);

        const notificacao = await repo.findOneByOrFail({
            id_notificacao: Number(id),
        });

        await repo.remove(notificacao);

        ResponseUtil.sendResponse(res, "Notificação deletada com sucesso", null);
    }
}