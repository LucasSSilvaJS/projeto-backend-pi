import { Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { DBTable } from "../../constants/DBTable";

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
}