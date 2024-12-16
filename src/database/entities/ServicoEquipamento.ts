import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { DBTable } from "../../constants/DBTable";
import { Servico } from "./Servico";
import { Equipamento } from "./Equipamento";

@Entity(DBTable.SERVICO_EQUIPAMENTO)
export class ServicoEquipamento{
    @PrimaryColumn({nullable: false})
    id_servico: number;

    @PrimaryColumn({nullable: false})
    id_equipamento: number;

    @ManyToOne(() => Servico, (servico) => servico.servicoEquipamentos)
    @JoinColumn({name: "id_servico"})
    servico: Servico;

    @ManyToOne(() => Equipamento, (equipamento) => equipamento.servicoEquipamentos)
    @JoinColumn({name: "id_equipamento"})
    equipamento: Equipamento;
}