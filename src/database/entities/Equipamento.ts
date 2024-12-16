import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { DBTable } from "../../constants/DBTable";

@Entity(DBTable.EQUIPAMENTOS)
export class Equipamento{
    @PrimaryGeneratedColumn()
    id_equipamento: number;

    @Column({nullable: false})
    nome: string;
    
    @Column({nullable: false})
    id_fornecedor: number;
}