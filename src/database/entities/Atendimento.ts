import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { DBTable } from "../../constants/DBTable";

@Entity(DBTable.ATENDIMENTOS)
export class Atendimento{
    @PrimaryGeneratedColumn()
    id_atendimento: number;

    @Column({nullable: false})
    id_agendamento: number;

    @Column({nullable: false})
    id_servico: number;

    @Column({nullable: false})
    tempoGasto: number;
    
    @Column({nullable: false})
    produtosUtilizados: string;
}