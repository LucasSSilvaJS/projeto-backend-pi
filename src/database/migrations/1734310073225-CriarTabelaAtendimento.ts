import { MigrationInterface, QueryRunner, Table } from "typeorm";
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
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(DBTable.ATENDIMENTOS);
    }

}
