import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { DBTable } from "../../constants/DBTable";
import { Feedback } from "./Feedback";

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

    @OneToMany(() => Feedback, (feedback) => feedback.atendimento)
    feedbacks: Feedback[];
}