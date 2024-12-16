import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { DBTable } from "../../constants/DBTable";
import { Categoria } from "./Categoria";
import { Atendimento } from "./Atendimento";
import { FuncionarioServico } from "./FuncionarioServico";
import { ServicoEquipamento } from "./ServicoEquipamento";

@Entity(DBTable.SERVICOS)
export class Servico{
    @PrimaryGeneratedColumn()
    id_servico: number;

    @Column({nullable: false})
    nome: string;

    @Column({nullable: true})
    descricao: string;

    @Column({nullable: false})
    preco: number;

    @Column({nullable: false})
    duracao: number;

    @Column({nullable: false})
    qtd_profissionais: number;

    @Column({nullable: false})
    disponibilidade: string;

    @Column({nullable: false})
    id_categoria: number;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @ManyToOne(() => Categoria, (categoria) => categoria.servicos)
    @JoinColumn({name: "id_categoria"})
    categoria: Categoria;

    @OneToMany(() => Atendimento, (atendimento) => atendimento.servico)
    atendimentos: Atendimento[];

    @OneToMany(() => FuncionarioServico, (funcionarioServico) => funcionarioServico.servico)
    funcionarioServicos: FuncionarioServico[];

    @OneToMany(() => ServicoEquipamento, (servicoEquipamento) => servicoEquipamento.servico)
    servicoEquipamentos: ServicoEquipamento[];
}