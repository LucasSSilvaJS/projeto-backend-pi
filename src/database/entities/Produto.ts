import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { DBTable } from "../../constants/DBTable";
import { Fornecedor } from "./Fornecedor";

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

    @ManyToOne(() => Fornecedor, (fornecedor) => fornecedor.produtos)
    @JoinColumn({name: "id_fornecedor"})
    fornecedor: Fornecedor;
}