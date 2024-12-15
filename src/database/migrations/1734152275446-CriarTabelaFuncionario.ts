import { MigrationInterface, QueryRunner, Table } from "typeorm";
import { DBTable } from "../../constants/DBTable";

export class CriarTabelaFuncionario1734152275446 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: DBTable.FUNCIONARIOS,
                columns: [
                    {
                        name: "id_usuario",
                        type: "int",
                        isPrimary: true,
                        isNullable: false
                    },
                    {
                        name: "matricula",
                        type: "varchar",
                        length: "255",
                        isNullable: false,
                        isUnique: true,
                        isPrimary: true
                    },
                    {
                        name: "funcao",
                        type: "varchar",
                        length: "255",
                        isNullable: false
                    },
                    {
                        name: "nome",
                        type: "varchar",
                        length: "255",
                        isNullable: false
                    },
                    {
                        name: "disponibilidade",
                        type: "varchar",
                        length: "255",
                        isNullable: false
                    },
                    {
                        name: 'createdAt',
                        type: 'datetime',
                        default: 'now()',
                        isNullable: true
                    },
                    {
                        name: 'updatedAt',
                        type: 'datetime',
                        default: 'now()',
                        isNullable: true
                    }
                ]
            }),
            true
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(DBTable.FUNCIONARIOS);
    }

}
