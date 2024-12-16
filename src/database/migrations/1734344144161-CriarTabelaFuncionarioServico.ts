import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";
import { DBTable } from "../../constants/DBTable";

export class CriarTabelaFuncionarioServico1734344144161 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: DBTable.FUNCIONARIO_SERVICO,
                columns: [
                    {
                        name: "id_funcionario",
                        type: "int",
                        isPrimary: true,
                        isNullable: false
                    },
                    {
                        name: "id_servico",
                        type: "int",
                        isPrimary: true,
                        isNullable: false
                    },
                ]
            }),
            true
        );

        await queryRunner.createForeignKey(
            DBTable.FUNCIONARIO_SERVICO,
            new TableForeignKey({
                columnNames: ["id_funcionario"],
                referencedColumnNames: ["id_usuario"],
                referencedTableName: DBTable.FUNCIONARIOS,
                onDelete: "CASCADE",
                onUpdate: "CASCADE"
            })
        );

        await queryRunner.createForeignKey(
            DBTable.FUNCIONARIO_SERVICO,
            new TableForeignKey({
                columnNames: ["id_servico"],
                referencedColumnNames: ["id_servico"],
                referencedTableName: DBTable.SERVICOS,
                onDelete: "CASCADE",
                onUpdate: "CASCADE"
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(DBTable.FUNCIONARIO_SERVICO);
    }

}
