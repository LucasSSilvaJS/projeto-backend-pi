import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { DBTable } from "../../constants/DBTable";
import { Cliente } from "./Cliente";
import { Funcionario } from "./Funcionario";

@Entity(DBTable.AGENDAMENTOS)
export class Agendamento{
    @PrimaryGeneratedColumn()
    id_agendamento: number;

    @Column({nullable: false})
    data: Date;
    
    @Column({nullable: false})
    hora: string;

    @Column({nullable: false})
    cpf_cliente: string;

    @Column({nullable: false})
    matricula_func: string;

    @ManyToOne((type) => Cliente, (cliente) => cliente.agendamentos)
    cliente: Cliente;

    @ManyToOne((type) => Funcionario, (funcionario) => funcionario.agendamentos)
    funcionario: Funcionario;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}