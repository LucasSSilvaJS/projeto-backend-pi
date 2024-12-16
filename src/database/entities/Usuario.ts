import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { DBTable } from "../../constants/DBTable";

@Entity(DBTable.USUARIOS)
export class Usuario{
    @PrimaryGeneratedColumn()
    id_usuario: number;

    @Column({nullable: false})
    email: string;

    @Column({nullable: false})
    senha: string;

    @Column({nullable: false})
    tipo_usuario: string;
}