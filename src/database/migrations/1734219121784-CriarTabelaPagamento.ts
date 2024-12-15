import { MigrationInterface, QueryRunner, Table } from "typeorm";
import { DBTable } from "../../constants/DBTable";

export class CriarTabelaPagamento1734219121784 implements MigrationInterface {

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
                        name: "cpf_cliente",
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
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(DBTable.PAGAMENTOS);
    }

}
