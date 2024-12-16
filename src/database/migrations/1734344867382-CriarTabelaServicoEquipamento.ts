import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";
import { DBTable } from "../../constants/DBTable";

export class CriarTabelaServicoEquipamento1734344867382 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: DBTable.SERVICO_EQUIPAMENTO,
                columns: [
                    {
                        name: "id_servico",
                        type: "int",
                        isPrimary: true,
                        isNullable: false
                    },
                    {
                        name: "id_equipamento",
                        type: "int",
                        isPrimary: true,
                        isNullable: false
                    },
                ]
            }),
            true
        );

        await queryRunner.createForeignKey(
            DBTable.SERVICO_EQUIPAMENTO,
            new TableForeignKey({
                columnNames: ["id_servico"],
                referencedColumnNames: ["id_servico"],
                referencedTableName: DBTable.SERVICOS,
                onDelete: "CASCADE",
                onUpdate: "CASCADE"
            })
        );

        await queryRunner.createForeignKey(
            DBTable.SERVICO_EQUIPAMENTO,
            new TableForeignKey({
                columnNames: ["id_equipamento"],
                referencedColumnNames: ["id_equipamento"],
                referencedTableName: DBTable.EQUIPAMENTOS,
                onDelete: "CASCADE",
                onUpdate: "CASCADE"
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(DBTable.SERVICO_EQUIPAMENTO);
    }

}
