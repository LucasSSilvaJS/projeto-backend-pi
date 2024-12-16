import { Request, Response } from "express";
import { AppDataSource } from "../../database/data-source";
import { ResponseUtil } from "../../utils/Response";
import { Paginator } from "../../database/Paginator";
import { validateOrReject } from "class-validator";
import { Horario } from "../../database/entities/Horario";
import { HorarioDTO } from "../dtos/HorarioDTO";

export class HorarioController {
    async getHorarios(req: Request, res: Response){
        const builder = await AppDataSource.getRepository(Horario).createQueryBuilder();
        const {records: horarios, paginationInfo} = await Paginator.paginate(builder, req);
        ResponseUtil.sendResponse(res, "Horários encontrados com sucesso", horarios, paginationInfo);
    }

    async getHorario(req: Request, res: Response){
        const {id} = req.params;
        const horario = await AppDataSource.getRepository(Horario).findOneByOrFail({
            id_horario: Number(id),
        });
        ResponseUtil.sendResponse(res, "Horário encontrado com sucesso", horario, null);
    }

    async create(req: Request, res: Response){
        const horarioData = req.body;

        const dto = new HorarioDTO();
        Object.assign(dto, horarioData);

        await validateOrReject(dto);

        const repo = await AppDataSource.getRepository(Horario);
        const horario = repo.create(horarioData);
        await repo.save(horario);

        ResponseUtil.sendResponse(res, "Novo horário criado com sucesso", horario, 200);
    }

    async update(req: Request, res: Response){
        const {id} = req.params;
        const horarioData = req.body;

        const dto = new HorarioDTO();
        Object.assign(dto, horarioData);
        dto.id_horario = parseInt(id);

        await validateOrReject(dto);

        const repo = AppDataSource.getRepository(Horario);

        const horario = await repo.findOneByOrFail({
            id_horario: Number(id),
        });

        repo.merge(horario, horarioData);
        await repo.save(horario);

        ResponseUtil.sendResponse(res, "Horário atualizado com sucesso", horario);
    }

    async delete(req: Request, res: Response){
        const {id} = req.params;

        const repo = AppDataSource.getRepository(Horario);

        const horario = await repo.findOneByOrFail({
            id_horario: Number(id),
        });

        await repo.remove(horario);

        ResponseUtil.sendResponse(res, "Horário deletado com sucesso", null);
    }
}