import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";
import { DBTable } from "../../constants/DBTable";

export class CriarTabelaProdutoAtendimento1734336219141 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: DBTable.PRODUTO_ATENDIMENTO,
                columns: [
                    {
                        name: "id_atendimento",
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
            DBTable.PRODUTO_ATENDIMENTO,
            new TableForeignKey({
                columnNames: ["id_atendimento"],
                referencedColumnNames: ["id_atendimento"],
                referencedTableName: DBTable.ATENDIMENTOS,
                onDelete: "CASCADE",
                onUpdate: "CASCADE"
            })
        );

        await queryRunner.createForeignKey(
            DBTable.PRODUTO_ATENDIMENTO,
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
        await queryRunner.dropTable(DBTable.PRODUTO_ATENDIMENTO);
    }

}
