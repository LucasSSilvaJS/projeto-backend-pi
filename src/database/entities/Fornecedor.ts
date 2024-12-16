import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { DBTable } from "../../constants/DBTable";
import { Equipamento } from "./Equipamento";

@Entity(DBTable.FORNECEDORES)
export class Fornecedor{
    @PrimaryGeneratedColumn()
    id_fornecedor: number;

    @Column({nullable: false})
    nome: string;

    @Column({nullable: false})
    telefone: string;

    @Column({nullable: false})
    email: string;

    @OneToMany(() => Equipamento, (equipamento) => equipamento.fornecedor)
    equipamentos: Equipamento[];
}