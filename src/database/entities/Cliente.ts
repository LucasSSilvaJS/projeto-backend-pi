import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { DBTable } from "../../constants/DBTable";

@Entity(DBTable.CLIENTES)
export class Cliente{
    @PrimaryColumn()
    id_usuario: number;

    @PrimaryColumn()
    cpf: string;

    @Column({nullable: false})
    nome: string;

    @Column({nullable: false})
    telefone: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}