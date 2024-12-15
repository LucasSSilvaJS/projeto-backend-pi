import { Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { DBTable } from "../../constants/DBTable";

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

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}