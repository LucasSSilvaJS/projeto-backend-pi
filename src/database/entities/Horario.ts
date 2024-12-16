import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { DBTable } from "../../constants/DBTable";
import { FuncionarioHorario } from "./FuncionarioHorario";

@Entity(DBTable.HORARIOS)
export class Horario{
    @PrimaryGeneratedColumn()
    id_horario: number;

    @Column({nullable: false})
    diaSemana: Date;

    @Column({nullable: false})
    horaInicio: string;

    @Column({nullable: false})
    horaFim: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @OneToMany(() => FuncionarioHorario, (funcionarioHorario) => funcionarioHorario.horario)
    funcionarioHorarios: FuncionarioHorario[];
}