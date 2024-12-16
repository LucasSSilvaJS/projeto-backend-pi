import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { DBTable } from "../../constants/DBTable";
import { Cliente } from "./Cliente";
import { Funcionario } from "./Funcionario";

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

    @OneToOne(() => Cliente, (cliente) => cliente.usuario)
    cliente: Cliente;

    @OneToOne(() => Funcionario, (funcionario) => funcionario.usuario)
    funcionario: Funcionario;
}