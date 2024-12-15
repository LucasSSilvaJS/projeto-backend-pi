import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { DBTable } from "../../constants/DBTable";

@Entity(DBTable.FORNECEDORES)
export class Fornecedor{
    @PrimaryGeneratedColumn()
    id_fornecedor: number;

    @Column({nullable: false})
    nome: string;

    @Column({nullable: false})
    telefone: string;

    @Column({nullable: false})
    email: string;
}