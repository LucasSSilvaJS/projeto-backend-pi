import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";
import { DBTable } from "../../constants/DBTable";

export class CriarTabelaEquipamento1734344315614 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: DBTable.EQUIPAMENTOS,
                columns: [
                    {
                        name: "id_equipamento",
                        type: "int",
                        isGenerated: true,
                        isPrimary: true,
                        generationStrategy: "increment"
                    },
                    {
                        name: "nome",
                        type: "varchar",
                        length: "255",
                        isNullable: false
                    },
                    {
                        name: "id_fornecedor",
                        type: "int",
                        isNullable: false
                    }
                ]
            }),
            true
        );

        await queryRunner.createForeignKey(
            DBTable.EQUIPAMENTOS,
            new TableForeignKey({
                columnNames: ["id_fornecedor"],
                referencedColumnNames: ["id_fornecedor"],
                referencedTableName: DBTable.FORNECEDORES,
                onDelete: "CASCADE",
                onUpdate: "CASCADE"
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(DBTable.EQUIPAMENTOS);
    }

}
