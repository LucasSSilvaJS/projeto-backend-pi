import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";
import { DBTable } from "../../constants/DBTable";

export class CriarTabelaAgendamento1734341791228 implements MigrationInterface {

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
                        name: "id_cliente",
                        type: "int",
                        isNullable: false
                    },
                    {
                        name: "id_funcionario",
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
            DBTable.AGENDAMENTOS,
            new TableForeignKey({
                referencedTableName: DBTable.CLIENTES,
                columnNames: ["id_cliente"],
                referencedColumnNames: ["id_usuario"],
                onDelete: "CASCADE",
                onUpdate: "CASCADE",
            })
        );

        await queryRunner.createForeignKey(
            DBTable.AGENDAMENTOS,
            new TableForeignKey({
                columnNames: ["id_funcionario"],
                referencedColumnNames: ["id_usuario"],
                referencedTableName: DBTable.FUNCIONARIOS,
                onDelete: "CASCADE",
                onUpdate: "CASCADE",
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(DBTable.AGENDAMENTOS);
    }

}
