import { MigrationInterface, QueryRunner, Table } from "typeorm";
import { DBTable } from "../../constants/DBTable";

export class CriarTabelaUsuario1734334072634 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: DBTable.USUARIOS,
                columns: [
                    {
                        name: "id_usuario",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment"
                    },
                    {
                        name: "email",
                        type: "varchar",
                        length: "255",
                        isNullable: false
                    },
                    {
                        name: "senha",
                        type: "varchar",
                        length: "255",
                        isNullable: false
                    },
                    {
                        name: "tipo_usuario",
                        type: "enum",
                        enum: ["cliente", "funcionário"],
                        default: "'funcionário'",
                        isNullable: false
                    },
                ]
            }),
            true
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(DBTable.USUARIOS);
    }

}
