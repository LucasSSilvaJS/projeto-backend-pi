import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { DBTable } from "../../constants/DBTable";
import { Cliente } from "./Cliente";

@Entity(DBTable.NOTIFICACOES)
export class Notificacao{
    @PrimaryGeneratedColumn()
    id_notificacao: number;

    @Column()
    tipo: string;

    @Column()
    dataEnvio: Date;

    @Column()
    cpf_cliente: string;

    @ManyToOne(() => Cliente, (cliente) => cliente.notificacoes)
    cliente: Cliente;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}