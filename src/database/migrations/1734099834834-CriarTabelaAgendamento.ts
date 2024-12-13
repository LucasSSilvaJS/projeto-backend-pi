import { MigrationInterface, QueryRunner, Table } from "typeorm";
import { DBTable } from "../../constants/DBTable";

export class CriarTabelaAgendamento1734099834834 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: DBTable.AGENDAMENTOS,
                columns: [
                    {
                        name: "id_agendamento",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment'
                    },
                    {
                        name: "data",
                        type: "date",
                        isNullable: false
                    },
                    {
                        name: "hora",
                        type: "time",
                        isNullable: false
                    },
                    {
                        name: "cpf_cliente",
                        type: "varchar",
                        length: "11",
                        isNullable: false
                    },
                    {
                        name: "matricula_func",
                        type: "varchar",
                        length: "255",
                        isNullable: false
                    }
                ]
            }),
            true
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(DBTable.AGENDAMENTOS);
    }

}
