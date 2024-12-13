import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { DBTable } from "../../constants/DBTable";

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

    // @ManyToOne((type) => Cliente, (cliente) => cliente.agendamentos, {eager: true})
    // cliente: Cliente;

    @Column({nullable: false})
    matricula_func: string;

    // @ManyToOne((type) => Funcionario, (funcionario) => funcionario.agendamentos, {eager: true})
    // funcionario: Funcionario;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}