import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { DBTable } from "../../constants/DBTable";
import { Funcionario } from "./Funcionario";
import { Servico } from "./Servico";

@Entity(DBTable.FUNCIONARIO_SERVICO)
export class FuncionarioServico{
    @PrimaryColumn({nullable: false})
    id_funcionario: number;

    @PrimaryColumn({nullable: false})
    id_servico: number;

    @ManyToOne(() => Funcionario, (funcionario) => funcionario.funcionarioServicos)
    @JoinColumn({name: "id_funcionario"})
    funcionario: Funcionario;

    @ManyToOne(() => Servico, (servico) => servico.funcionarioServicos)
    @JoinColumn({name: "id_servico"})
    servico: Servico;
}