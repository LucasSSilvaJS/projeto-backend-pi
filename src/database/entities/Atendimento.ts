import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { DBTable } from "../../constants/DBTable";
import { Feedback } from "./Feedback";
import { Agendamento } from "./Agendamento";
import { Servico } from "./Servico";
import { ProdutoAtendimento } from "./ProdutoAtendimento";

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

    @OneToOne(() => Agendamento, (agendamento) => agendamento.atendimento)
    @JoinColumn({name: "id_agendamento"})
    agendamento: Agendamento;

    @ManyToOne(() => Servico, (servico) => servico.atendimentos)
    @JoinColumn({name: "id_servico"})
    servico: Servico;

    @OneToMany(() => ProdutoAtendimento, (produtoAtendimento) => produtoAtendimento.atendimento)
    produtoAtendimentos: ProdutoAtendimento[];
}