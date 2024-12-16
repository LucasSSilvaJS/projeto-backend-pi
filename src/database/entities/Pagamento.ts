import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { DBTable } from "../../constants/DBTable";
import { Cliente } from "./Cliente";

@Entity(DBTable.PAGAMENTOS)
export class Pagamento{
    @PrimaryGeneratedColumn()
    id_pagamento: number;

    @Column()
    valor: number;

    @Column()
    metodo_pag: string;

    @Column()
    data: Date;

    @Column()
    id_cliente: number;

    @ManyToOne(() => Cliente, (cliente) => cliente.pagamentos)
    @JoinColumn({ name: "id_cliente" })
    cliente: Cliente;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}