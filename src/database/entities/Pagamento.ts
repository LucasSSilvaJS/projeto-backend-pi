import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { DBTable } from "../../constants/DBTable";

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

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}