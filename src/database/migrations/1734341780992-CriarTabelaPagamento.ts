import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";
import { DBTable } from "../../constants/DBTable";

export class CriarTabelaPagamento1734341780992 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: DBTable.PAGAMENTOS,
                columns: [
                    {
                        name: "id_pagamento",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment"
                    },
                    {
                        name: "valor",
                        type: "decimal",
                        precision: 7,
                        scale: 2,
                        isNullable: false
                    },
                    {
                        name: "metodo_pag",
                        type: "varchar",
                        length: "255",
                        isNullable: false
                    },
                    {
                        name: "data",
                        type: "datetime",
                        default: "now()",
                        isNullable: false
                    },
                    {
                        name: "id_cliente",
                        type: "int",
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
            DBTable.PAGAMENTOS,
            new TableForeignKey({
                columnNames: ["id_cliente"],
                referencedColumnNames: ["id_usuario"],
                referencedTableName: DBTable.CLIENTES,
                onDelete: "CASCADE",
                onUpdate: "CASCADE"
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(DBTable.PAGAMENTOS);
    }

}
