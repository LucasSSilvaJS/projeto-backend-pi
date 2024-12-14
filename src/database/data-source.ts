import * as dotenv from "dotenv";
import { DataSource } from "typeorm";
import { Author } from "../database/entities/Author";
import { Book } from "./entities/Book";
import { User } from "./entities/User";
import { Agendamento } from "./entities/Agendamento";
import { Cliente } from "./entities/Cliente";

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
    entities: [Author, Book, User, Agendamento, Cliente],
    subscribers: [],
    migrations: ["src/database/migrations/*.ts"]
});