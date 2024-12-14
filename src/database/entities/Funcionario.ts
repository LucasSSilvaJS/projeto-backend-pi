import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { DBTable } from "../../constants/DBTable";

@Entity(DBTable.FUNCIONARIOS)
export class Funcionario{
    @PrimaryColumn()
    id_usuario: number;

    @PrimaryColumn()
    matricula: string;

    @Column({nullable: false})
    funcao: string;

    @Column({nullable: false})
    nome: string;

    @Column({nullable: false})
    disponibilidade: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}