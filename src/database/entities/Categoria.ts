import { Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { DBTable } from "../../constants/DBTable";
import { Servico } from "./Servico";

@Entity(DBTable.CATEGORIAS)
export class Categoria{
    @PrimaryGeneratedColumn()
    id_categoria: number;

    @Column({nullable: false})
    nome: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @OneToMany(() => Servico, (servico) => servico.categoria)
    servicos: Servico[];
}