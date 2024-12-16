import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { DBTable } from "../../constants/DBTable";
import { Servico } from "./Servico";
import { Produto } from "./Produto";

@Entity(DBTable.SERVICO_PRODUTO)
export class ServicoProduto{
    @PrimaryColumn({nullable: false})
    id_servico: number;

    @PrimaryColumn({nullable: false})
    id_produto: number;

    @ManyToOne(() => Servico, (servico) => servico.servicoProdutos)
    @JoinColumn({name: "id_servico"})
    servico: Servico;

    @ManyToOne(() => Produto, (produto) => produto.servicoProdutos)
    @JoinColumn({name: "id_produto"})
    produto: Produto;
}