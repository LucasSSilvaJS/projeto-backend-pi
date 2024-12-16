import * as dotenv from "dotenv";
import { DataSource } from "typeorm";
import { Author } from "../database/entities/Author";
import { Book } from "./entities/Book";
import { User } from "./entities/User";
import { Agendamento } from "./entities/Agendamento";
import { Cliente } from "./entities/Cliente";
import { Funcionario } from "./entities/Funcionario";
import { Horario } from "./entities/Horario";
import { Notificacao } from "./entities/Notificacao";
import { Pagamento } from "./entities/Pagamento";
import { Servico } from "./entities/Servico";
import { Produto } from "./entities/Produto";
import { Categoria } from "./entities/Categoria";
import { Fornecedor } from "./entities/Fornecedor";
import { Equipamento } from "./entities/Equipamento";
import { Atendimento } from "./entities/Atendimento";
import { Feedback } from "./entities/Feedback";
import { Usuario } from "./entities/Usuario";

dotenv.config();

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "127.0.0.1",
    port: 3306,
    username: "root",
    password: "root",
    database: "salaosenac",
    logging: ["query"],
    synchronize: false,
    entities: [Author, Book, User, Cliente, Funcionario, Agendamento, Horario, Notificacao, Pagamento, Servico, Categoria, Produto, Fornecedor, Equipamento, Atendimento, Feedback, Usuario],
    subscribers: [],
    migrations: ["src/database/migrations/*.ts"]
});