import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
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
    id_cliente: number;

    @Column({nullable: false})
    id_funcionario: number;

    @ManyToOne((type) => Cliente, (cliente) => cliente.agendamentos)
    @JoinColumn({ name: "id_cliente" })
    cliente: Cliente;
    
    @ManyToOne((type) => Funcionario, (funcionario) => funcionario.agendamentos)
    @JoinColumn({ name: "id_funcionario" })
    funcionario: Funcionario;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}