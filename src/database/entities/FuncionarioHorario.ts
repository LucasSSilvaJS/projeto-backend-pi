import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { DBTable } from "../../constants/DBTable";
import { Funcionario } from "./Funcionario";
import { Horario } from "./Horario";

@Entity(DBTable.FUNCIONARIO_HORARIO)
export class FuncionarioHorario{
    @PrimaryColumn({nullable: false})
    id_usuario: number;

    @PrimaryColumn({nullable: false})
    id_horario: number;

    @ManyToOne(() => Funcionario, (funcionario) => funcionario.funcionarioHorarios)
    @JoinColumn({name: "id_usuario"})
    funcionario: Funcionario;

    @ManyToOne(() => Horario, (Horario) => Horario.funcionarioHorarios)
    @JoinColumn({name: "id_horario"})
    horario: Horario;
}