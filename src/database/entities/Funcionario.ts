import { Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { DBTable } from "../../constants/DBTable";
import { Agendamento } from "./Agendamento";

@Entity(DBTable.FUNCIONARIOS)
export class Funcionario{
    @PrimaryColumn()
    id_usuario: number;

    @PrimaryColumn({unique: true, nullable: false})
    matricula: string;

    @Column({nullable: false})
    funcao: string;

    @Column({nullable: false})
    nome: string;

    @Column({nullable: false})
    disponibilidade: string;

    // @OneToMany((type) => Agendamento, (agendamento) => agendamento.funcionario)
    // agendamentos: Agendamento[];

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}