import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { DBTable } from "../../constants/DBTable";
import { Produto } from "./Produto";
import { Atendimento } from "./Atendimento";

@Entity(DBTable.PRODUTO_ATENDIMENTO)
export class ProdutoAtendimento{
    @PrimaryColumn({nullable: false})
    id_produto: number;

    @PrimaryColumn({nullable: false})
    id_atendimento: number;

    @ManyToOne(() => Produto, (produto) => produto.produtoAtendimentos)
    @JoinColumn({name: "id_produto"})
    produto: Produto;

    @ManyToOne(() => Atendimento, (atendimento) => atendimento.produtoAtendimentos)
    @JoinColumn({name: "id_atendimento"})
    atendimento: Atendimento;

}