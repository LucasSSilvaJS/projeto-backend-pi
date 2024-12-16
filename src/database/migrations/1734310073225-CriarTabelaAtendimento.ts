import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";
import { DBTable } from "../../constants/DBTable";

export class CriarTabelaAtendimento1734310073225 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: DBTable.ATENDIMENTOS,
                columns: [
                    {
                        name: "id_atendimento",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment"
                    },
                    {
                        name: "id_agendamento",
                        type: "int",
                        isNullable: false
                    },
                    {
                        name: "id_servico",
                        type: "int",
                        isNullable: false
                    },
                    {
                        name: "tempoGasto",
                        type: "int",
                        isNullable: false
                    },
                    {
                        name: "produtosUtilizados",
                        type: "text",
                        isNullable: false
                    }
                ]
            }),
            true
        );

        await queryRunner.createForeignKey(
            DBTable.ATENDIMENTOS,
            new TableForeignKey({
                columnNames: ["id_agendamento"],
                referencedColumnNames: ["id_agendamento"],
                referencedTableName: DBTable.AGENDAMENTOS,
                onDelete: "NO ACTION",
                onUpdate: "NO ACTION"
            })
        );

        await queryRunner.createForeignKey(
            DBTable.ATENDIMENTOS,
            new TableForeignKey({
                columnNames: ["id_servico"],
                referencedColumnNames: ["id_servico"],
                referencedTableName: DBTable.SERVICOS,
                onDelete: "NO ACTION",
                onUpdate: "NO ACTION"
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(DBTable.ATENDIMENTOS);
    }

}
