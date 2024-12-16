import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
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
    cpf_cliente: string;

    @ManyToOne(() => Cliente, (cliente) => cliente.pagamentos)
    cliente: Cliente;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}