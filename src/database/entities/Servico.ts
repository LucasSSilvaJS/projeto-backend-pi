import { Column, Entity, PrimaryColumn } from "typeorm";
import { DBTable } from "../../constants/DBTable";

@Entity(DBTable.SERVICOS)
export class Servico{
    @PrimaryColumn()
    id_servico: number;

    @Column({nullable: false})
    nome: string;

    @Column({nullable: true})
    descricao: string;

    @Column({nullable: false})
    preco: number;

    @Column({nullable: false})
    duracao: number;

    @Column({nullable: false})
    qtd_profissionais: number;

    @Column({nullable: false})
    disponibilidade: string;

    @Column({nullable: false})
    id_categoria: number;
}