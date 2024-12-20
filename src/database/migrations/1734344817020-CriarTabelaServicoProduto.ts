import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";
import { DBTable } from "../../constants/DBTable";

export class CriarTabelaServicoProduto1734344817020 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: DBTable.SERVICO_PRODUTO,
                columns: [
                    {
                        name: "id_servico",
                        type: "int",
                        isPrimary: true,
                        isNullable: false
                    },
                    {
                        name: "id_produto",
                        type: "int",
                        isPrimary: true,
                        isNullable: false
                    },
                ]
            }),
            true
        );

        await queryRunner.createForeignKey(
            DBTable.SERVICO_PRODUTO,
            new TableForeignKey({
                columnNames: ["id_servico"],
                referencedColumnNames: ["id_servico"],
                referencedTableName: DBTable.SERVICOS,
                onDelete: "CASCADE",
                onUpdate: "CASCADE"
            })
        );

        await queryRunner.createForeignKey(
            DBTable.SERVICO_PRODUTO,
            new TableForeignKey({
                columnNames: ["id_produto"],
                referencedColumnNames: ["id_produto"],
                referencedTableName: DBTable.PRODUTOS,
                onDelete: "CASCADE",
                onUpdate: "CASCADE"
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(DBTable.SERVICO_PRODUTO);
    }

}
