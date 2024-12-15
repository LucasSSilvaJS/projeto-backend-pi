import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";
import { DBTable } from "../../constants/DBTable";

export class CriarTabelaFuncionarioHorario1734278898089 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: DBTable.FUNCIONARIO_HORARIO,
                columns: [
                    {
                        name: "id_horario",
                        type: "int",
                        isNullable: false
                    },
                    {
                        name: "id_usuario",
                        type: "int",
                        isNullable: false
                    }
                ]
            }),
            true
        );

        await queryRunner.createForeignKey(
            DBTable.FUNCIONARIO_HORARIO,
            new TableForeignKey({
                columnNames: ["id_horario"],
                referencedColumnNames: ["id_horario"],
                referencedTableName: DBTable.HORARIOS,
                onDelete: "CASCADE",
                onUpdate: "CASCADE"
            })
        );

        await queryRunner.createForeignKey(
            DBTable.FUNCIONARIO_HORARIO,
            new TableForeignKey({
                columnNames: ["id_usuario"],
                referencedColumnNames: ["id_usuario"],
                referencedTableName: DBTable.FUNCIONARIOS,
                onDelete: "CASCADE",
                onUpdate: "CASCADE"
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(DBTable.FUNCIONARIO_HORARIO);
    }

}
