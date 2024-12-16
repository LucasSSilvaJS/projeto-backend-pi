import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";
import { DBTable } from "../../constants/DBTable";

export class CriarTabelaCliente1734340871595 implements MigrationInterface {

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
                        isNullable: false,
                        isUnique: true
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
        );

        await queryRunner.createForeignKey(
            DBTable.CLIENTES,
            new TableForeignKey({
                columnNames: ["id_usuario"],
                referencedColumnNames: ["id_usuario"],
                referencedTableName: DBTable.USUARIOS,
                onDelete: "CASCADE",
                onUpdate: "CASCADE"
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(DBTable.CLIENTES);
    }

}
