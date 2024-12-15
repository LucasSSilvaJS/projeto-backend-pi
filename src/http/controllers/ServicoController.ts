import { Request, Response } from "express";
import { AppDataSource } from "../../database/data-source";
import { ResponseUtil } from "../../utils/Response";
import { Paginator } from "../../database/Paginator";
import { validateOrReject } from "class-validator";
import { Pagamento } from "../../database/entities/Pagamento";
import { PagamentoDTO } from "../dtos/PagamentoDTO";
import { Servico } from "../../database/entities/Servico";
import { ServicoDTO } from "../dtos/ServicoDTO";

export class ServicoController {
    async getServicos(req: Request, res: Response){
        const builder = await AppDataSource.getRepository(Servico).createQueryBuilder();
        const {records: servicos, paginationInfo} = await Paginator.paginate(builder, req);
        ResponseUtil.sendResponse(res, "Serviços encontrados com sucesso", servicos, paginationInfo);
    }

    async getServico(req: Request, res: Response){
        const {id} = req.params;
        const servico = await AppDataSource.getRepository(Servico).findOneByOrFail({
            id_servico: Number(id),
        });
        ResponseUtil.sendResponse(res, "Serviço encontrado com sucesso", servico, null);
    }

    async create(req: Request, res: Response){
        const servicoData = req.body;

        const dto = new ServicoDTO();
        Object.assign(dto, servicoData);

        await validateOrReject(dto);

        const repo = await AppDataSource.getRepository(Servico);
        const servico = repo.create(servicoData);
        await repo.save(servico);

        ResponseUtil.sendResponse(res, "Novo serviço criado com sucesso", servico, 200);
    }

    async update(req: Request, res: Response){
        const {id} = req.params;
        const servicoDTO = req.body;

        const dto = new ServicoDTO();
        Object.assign(dto, servicoDTO);
        dto.id_servico = parseInt(id);

        await validateOrReject(dto);

        const repo = AppDataSource.getRepository(Servico);

        const servico = await repo.findOneByOrFail({
            id_servico: Number(id),
        });

        repo.merge(servico, servicoDTO);
        await repo.save(servico);

        ResponseUtil.sendResponse(res, "Serviço atualizado com sucesso", servico);
    }

    async delete(req: Request, res: Response){
        const {id} = req.params;

        const repo = AppDataSource.getRepository(Servico);

        const servico = await repo.findOneByOrFail({
            id_servico: Number(id),
        });

        await repo.remove(servico);

        ResponseUtil.sendResponse(res, "Serviço deletado com sucesso", null);
    }
}