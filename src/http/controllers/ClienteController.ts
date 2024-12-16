import { Request, Response } from "express";
import { AppDataSource } from "../../database/data-source";
import { ResponseUtil } from "../../utils/Response";
import { Paginator } from "../../database/Paginator";
import { validateOrReject } from "class-validator";
import { Cliente } from "../../database/entities/Cliente";
import { ClienteDTO } from "../dtos/ClienteDTO";

export class ClienteController {
    async getClientes(req: Request, res: Response){
        const builder = await AppDataSource.getRepository(Cliente).createQueryBuilder();
        const {records: clientes, paginationInfo} = await Paginator.paginate(builder, req);
        ResponseUtil.sendResponse(res, "Clientes encontrados com sucesso", clientes, paginationInfo);
    }

    async getCliente(req: Request, res: Response){
        const {id} = req.params;
        const cliente = await AppDataSource.getRepository(Cliente).findOneByOrFail({
            id_usuario: parseInt(id)
        });
        ResponseUtil.sendResponse(res, "Cliente encontrado com sucesso", cliente, null);
    }

    async create(req: Request, res: Response){
        const clienteData = req.body;

        const dto = new ClienteDTO();
        Object.assign(dto, clienteData);
        dto.id_usuario = parseInt(clienteData.id_usuario);

        await validateOrReject(dto);

        const repo = await AppDataSource.getRepository(Cliente);
        const cliente = repo.create(clienteData);
        await repo.save(cliente);

        ResponseUtil.sendResponse(res, "Novo cliente criado com sucesso", cliente, 200);
    }

    async update(req: Request, res: Response){
        const {id} = req.params;
        const clienteData = req.body;

        const dto = new ClienteDTO();
        Object.assign(dto, clienteData);
        dto.id_usuario = parseInt(id);

        await validateOrReject(dto);

        const repo = AppDataSource.getRepository(Cliente);

        const cliente = await repo.findOneByOrFail({
            id_usuario: parseInt(id)
        });

        repo.merge(cliente, clienteData);
        await repo.save(cliente);

        ResponseUtil.sendResponse(res, "Cliente atualizado com sucesso", cliente);
    }

    async delete(req: Request, res: Response){
        const {id} = req.params;

        const repo = AppDataSource.getRepository(Cliente);

        const cliente = await repo.findOneByOrFail({
            id_usuario: parseInt(id)
        });

        await repo.remove(cliente);

        ResponseUtil.sendResponse(res, "Cliente deletado com sucesso", null);
    }
}