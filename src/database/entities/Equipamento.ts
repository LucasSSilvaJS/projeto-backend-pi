import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { DBTable } from "../../constants/DBTable";
import { Fornecedor } from "./Fornecedor";
import { ServicoEquipamento } from "./ServicoEquipamento";

@Entity(DBTable.EQUIPAMENTOS)
export class Equipamento{
    @PrimaryGeneratedColumn()
    id_equipamento: number;

    @Column({nullable: false})
    nome: string;
    
    @Column({nullable: false})
    id_fornecedor: number;

    @ManyToOne(() => Fornecedor, (fornecedor) => fornecedor.equipamentos)
    @JoinColumn({name: "id_fornecedor"})
    fornecedor: Fornecedor;

    @OneToMany(() => ServicoEquipamento, (servicoEquipamento) => servicoEquipamento.equipamento)
    servicoEquipamentos: ServicoEquipamento[];
}