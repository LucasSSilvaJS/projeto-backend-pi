import { Request, Response } from "express";
import { AppDataSource } from "../../database/data-source";
import { ResponseUtil } from "../../utils/Response";
import { Paginator } from "../../database/Paginator";
import { validateOrReject } from "class-validator";
import { Categoria } from "../../database/entities/Categoria";
import { CategoriaDTO } from "../dtos/CategoriaDTO";

export class CategoriaController {
    async getCategorias(req: Request, res: Response){
        const builder = await AppDataSource.getRepository(Categoria).createQueryBuilder();
        const {records: categorias, paginationInfo} = await Paginator.paginate(builder, req);
        ResponseUtil.sendResponse(res, "Categorias encontradas com sucesso", categorias, paginationInfo);
    }

    async getCategoria(req: Request, res: Response){
        const {id} = req.params;
        const categoria = await AppDataSource.getRepository(Categoria).findOneByOrFail({
            id_categoria: parseInt(id)
        });
        ResponseUtil.sendResponse(res, "Categoria encontrada com sucesso", categoria, null);
    }

    async create(req: Request, res: Response){
        const cateogriaData = req.body;

        const dto = new CategoriaDTO();
        Object.assign(dto, cateogriaData);

        await validateOrReject(dto);

        const repo = await AppDataSource.getRepository(Categoria);
        const categoria = repo.create(cateogriaData);
        await repo.save(categoria);

        ResponseUtil.sendResponse(res, "Nova categoria criada com sucesso", categoria, 200);
    }

    async update(req: Request, res: Response){
        const {id} = req.params;
        const categoriaData = req.body;

        const dto = new CategoriaDTO();
        Object.assign(dto, categoriaData);
        dto.id_categoria = parseInt(id);

        await validateOrReject(dto);

        const repo = AppDataSource.getRepository(Categoria);

        const categoria = await repo.findOneByOrFail({
            id_categoria: parseInt(id)
        });

        repo.merge(categoria, categoriaData);
        await repo.save(categoria);

        ResponseUtil.sendResponse(res, "Categoria atualizada com sucesso", categoria);
    }

    async delete(req: Request, res: Response){
        const {id} = req.params;

        const repo = AppDataSource.getRepository(Categoria);

        const categoria = await repo.findOneByOrFail({
            id_categoria: parseInt(id)
        });

        await repo.remove(categoria);

        ResponseUtil.sendResponse(res, "Categoria deletada com sucesso", null);
    }
}