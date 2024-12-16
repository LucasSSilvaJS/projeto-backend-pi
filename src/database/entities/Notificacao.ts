import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
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
    id_cliente: number;

    @ManyToOne(() => Cliente, (cliente) => cliente.notificacoes)
    @JoinColumn({ name: "id_cliente" })
    cliente: Cliente;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}