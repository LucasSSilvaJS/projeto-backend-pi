import * as dotenv from "dotenv";
import { DataSource } from "typeorm";

dotenv.config();

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "127.0.0.1",
    port: 3306,
    username: "root",
    password: "root",
    database: "salaosenac",
    logging: ["query"],
    synchronize: true,
    entities: ["src/database/entities/*.ts"],
    subscribers: [],
    migrations: ["src/database/migrations/*.ts"]
});