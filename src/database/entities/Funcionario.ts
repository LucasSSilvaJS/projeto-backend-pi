import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { DBTable } from "../../constants/DBTable";
import { Agendamento } from "./Agendamento";
import { Usuario } from "./Usuario";
import { FuncionarioServico } from "./FuncionarioServico";
import { FuncionarioHorario } from "./FuncionarioHorario";

@Entity(DBTable.FUNCIONARIOS)
export class Funcionario{
    @PrimaryColumn()
    id_usuario: number;

    @Column({unique: true, nullable: false})
    matricula: string;

    @Column({nullable: false})
    funcao: string;

    @Column({nullable: false})
    nome: string;

    @Column({nullable: false})
    disponibilidade: string;

    @OneToMany((type) => Agendamento, (agendamento) => agendamento.funcionario)
    agendamentos: Agendamento[];

    @OneToOne(() => Usuario, (usuario) => usuario.funcionario)
    @JoinColumn()
    usuario: Usuario;

    @OneToMany(() => FuncionarioServico, (funcionarioServico) => funcionarioServico.funcionario)
    funcionarioServicos: FuncionarioServico[];

    @OneToMany(() => FuncionarioHorario, (funcionarioHorario) => funcionarioHorario.funcionario)
    funcionarioHorarios: FuncionarioHorario[];

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}