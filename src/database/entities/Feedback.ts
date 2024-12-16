import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { DBTable } from "../../constants/DBTable";

@Entity(DBTable.FEEDBACKS)
export class Feedback{
    @PrimaryGeneratedColumn()
    id_feedback: number;

    @Column({nullable: true})
    descricao: string;

    @Column({nullable: true})
    classificacao: number;

    @Column({nullable: false})
    selo_cortesia: string;

    @Column({nullable: false})
    selo_limpeza: string;

    @Column({nullable: false})
    selo_eficiencia: string;

    @Column({nullable: false})
    selo_satisfacao: string;

    @Column({nullable: false})
    selo_orientacao: string;
    
    @Column({nullable: false})
    id_atendimento: number;
}