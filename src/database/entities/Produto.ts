import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { DBTable } from "../../constants/DBTable";

@Entity(DBTable.PRODUTOS)
export class Produto{
    @PrimaryGeneratedColumn()
    id_produto: number;

    @Column({nullable: false})
    nome: string;

    @Column({nullable: false})
    valor: number;

    @Column({nullable: false})
    qtd_estoque: number;
    
    @Column({nullable: false})
    id_fornecedor: number;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}