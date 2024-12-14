import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { DBTable } from "../../constants/DBTable";

@Entity(DBTable.NOTIFICACOES)
export class Notificacao{
    @PrimaryColumn()
    id_notificacao: number;

    @Column()
    tipo: string;

    @Column()
    dataEnvio: Date;

    @Column()
    cpf_cliente: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}