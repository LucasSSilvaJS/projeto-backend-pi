import { Request, Response } from "express";
import { AppDataSource } from "../../database/data-source";
import { ResponseUtil } from "../../utils/Response";
import { Paginator } from "../../database/Paginator";
import { validateOrReject } from "class-validator";
import { Produto } from "../../database/entities/Produto";
import { ProdutoDTO } from "../dtos/ProdutoDTO";

export class ProdutoController {
    async getProdutos(req: Request, res: Response){
        const builder = await AppDataSource.getRepository(Produto).createQueryBuilder();
        const {records: produtos, paginationInfo} = await Paginator.paginate(builder, req);
        ResponseUtil.sendResponse(res, "Produtos encontrados com sucesso", produtos, paginationInfo);
    }

    async getProduto(req: Request, res: Response){
        const {id} = req.params;
        const produto = await AppDataSource.getRepository(Produto).findOneByOrFail({
            id_produto: Number(id),
        });
        ResponseUtil.sendResponse(res, "Produto encontrado com sucesso", produto, null);
    }

    async create(req: Request, res: Response){
        const produtoData = req.body;

        const dto = new ProdutoDTO();
        Object.assign(dto, produtoData);

        await validateOrReject(dto);

        const repo = await AppDataSource.getRepository(Produto);
        const produto = repo.create(produtoData);
        await repo.save(produto);

        ResponseUtil.sendResponse(res, "Novo produto criado com sucesso", produto, 200);
    }

    async update(req: Request, res: Response){
        const {id} = req.params;
        const produtoData = req.body;

        const dto = new ProdutoDTO();
        Object.assign(dto, produtoData);
        dto.id_produto = parseInt(id);

        await validateOrReject(dto);

        const repo = AppDataSource.getRepository(Produto);

        const produto = await repo.findOneByOrFail({
            id_produto: Number(id),
        });

        repo.merge(produto, produtoData);
        await repo.save(produto);

        ResponseUtil.sendResponse(res, "Produto atualizado com sucesso", produto);
    }

    async delete(req: Request, res: Response){
        const {id} = req.params;

        const repo = AppDataSource.getRepository(Produto);

        const produto = await repo.findOneByOrFail({
            id_produto: Number(id),
        });

        await repo.remove(produto);

        ResponseUtil.sendResponse(res, "Produto deletado com sucesso", null);
    }
}