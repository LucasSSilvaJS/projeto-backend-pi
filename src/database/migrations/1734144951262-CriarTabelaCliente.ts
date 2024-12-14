import { MigrationInterface, QueryRunner, Table } from "typeorm";
import { DBTable } from "../../constants/DBTable";

export class CriarTabelaCliente1734144951262 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: DBTable.CLIENTES,
                columns: [
                    {
                        name: "id_usuario",
                        type: "int",
                        isPrimary: true,
                        isNullable: false
                    },
                    {
                        name: "cpf",
                        type: "varchar",
                        length: "11",
                        isPrimary: true,
                        isNullable: false
                    },
                    {
                        name: "nome",
                        type: "varchar",
                        length: "255",
                        isNullable: false
                    },
                    {
                        name: "telefone",
                        type: "varchar",
                        length: "11",
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
        await queryRunner.dropTable(DBTable.CLIENTES);
    }

}
