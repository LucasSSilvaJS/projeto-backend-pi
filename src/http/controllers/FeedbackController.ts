import { Request, Response } from "express";
import { AppDataSource } from "../../database/data-source";
import { ResponseUtil } from "../../utils/Response";
import { Paginator } from "../../database/Paginator";
import { validateOrReject } from "class-validator";
import { Feedback } from "../../database/entities/Feedback";
import { FeedbackDTO } from "../dtos/FeedbackDTO";

export class FeedbackController {
    async getFeedbacks(req: Request, res: Response){
        const builder = await AppDataSource.getRepository(Feedback).createQueryBuilder();
        const {records: feedbacks, paginationInfo} = await Paginator.paginate(builder, req);
        ResponseUtil.sendResponse(res, "Feedbacks encontrados com sucesso", feedbacks, paginationInfo);
    }

    async getFeedback(req: Request, res: Response){
        const {id} = req.params;
        const feedback = await AppDataSource.getRepository(Feedback).findOneByOrFail({
            id_feedback: parseInt(id)
        });
        ResponseUtil.sendResponse(res, "Feedback encontrado com sucesso", feedback, null);
    }

    async create(req: Request, res: Response){
        const feedbackData = req.body;

        const dto = new FeedbackDTO();
        Object.assign(dto, feedbackData);
        // dto.id_agendamento = parseInt(feedbackData.id_agendamento);

        await validateOrReject(dto);

        const repo = await AppDataSource.getRepository(Feedback);
        const feedback = repo.create(feedbackData);
        await repo.save(feedback);

        ResponseUtil.sendResponse(res, "Novo feedback criado com sucesso", feedback, 200);
    }

    async update(req: Request, res: Response){
        const {id} = req.params;
        const feedbackData = req.body;

        const dto = new FeedbackDTO();
        Object.assign(dto, feedbackData);
        dto.id_feedback = parseInt(id);

        await validateOrReject(dto);

        const repo = AppDataSource.getRepository(Feedback);

        const feedback = await repo.findOneByOrFail({
            id_feedback: parseInt(id)
        });

        repo.merge(feedback, feedbackData);
        await repo.save(feedback);

        ResponseUtil.sendResponse(res, "Feedback atualizado com sucesso", feedback);
    }

    async delete(req: Request, res: Response){
        const {id} = req.params;

        const repo = AppDataSource.getRepository(Feedback);

        const feedback = await repo.findOneByOrFail({
            id_feedback: parseInt(id)
        });

        await repo.remove(feedback);

        ResponseUtil.sendResponse(res, "Feedback deletado com sucesso", null);
    }
}