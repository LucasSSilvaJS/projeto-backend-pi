import { Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { DBTable } from "../../constants/DBTable";
import { Agendamento } from "./Agendamento";

@Entity(DBTable.CLIENTES)
export class Cliente{
    @PrimaryColumn()
    id_usuario: number;

    @PrimaryColumn({unique: true, nullable: false})
    cpf: string;

    @Column({nullable: false})
    nome: string;

    @Column({nullable: false})
    telefone: string;

    // @OneToMany((type) => Agendamento, (agendamento) => agendamento.cliente)
    // agendamentos: Agendamento[];

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}