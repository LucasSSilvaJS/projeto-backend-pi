import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { DBTable } from "../../constants/DBTable";

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
}