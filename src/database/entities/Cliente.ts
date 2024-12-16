import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { DBTable } from "../../constants/DBTable";
import { Agendamento } from "./Agendamento";
import { Usuario } from "./Usuario";
import { Pagamento } from "./Pagamento";
import { Notificacao } from "./Notificacao";

@Entity(DBTable.CLIENTES)
export class Cliente{
    @PrimaryColumn()
    id_usuario: number;

    @Column({unique: true, nullable: false})
    cpf: string;

    @Column({nullable: false})
    nome: string;

    @Column({nullable: false})
    telefone: string;

    @OneToMany((type) => Agendamento, (agendamento) => agendamento.cliente)
    agendamentos: Agendamento[];

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @OneToOne(() => Usuario, (usuario) => usuario.funcionario)
    @JoinColumn()
    usuario: Usuario;

    @OneToMany(() => Pagamento, (pagamento) => pagamento.cliente)
    pagamentos: Pagamento[];

    @OneToMany(() => Notificacao, (noticacao) => noticacao.cliente)
    notificacoes: Notificacao[];

}