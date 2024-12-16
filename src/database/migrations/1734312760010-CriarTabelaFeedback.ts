import { MigrationInterface, QueryRunner, Table } from "typeorm";
import { DBTable } from "../../constants/DBTable";

export class CriarTabelaFeedback1734312760010 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: DBTable.FEEDBACKS,
                columns: [
                    {
                        name: "id_feedback",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment"
                    },
                    {
                        name: "descricao",
                        type: "text",
                        isNullable: true
                    },
                    {
                        name: "classificacao",
                        type: "int",
                        isNullable: true
                    },
                    {
                        name: "selo_cortesia",
                        type: "enum",
                        enum: ["sim", "não"],
                        default: "'não'",
                        isNullable: false
                    },
                    {
                        name: "selo_limpeza",
                        type: "enum",
                        enum: ["sim", "não"],
                        default: "'não'",
                        isNullable: false
                    },
                    {
                        name: "selo_eficiencia",
                        type: "enum",
                        enum: ["sim", "não"],
                        default: "'não'",
                        isNullable: false
                    },
                    {
                        name: "selo_satisfacao",
                        type: "enum",
                        enum: ["sim", "não"],
                        default: "'não'",
                        isNullable: false
                    },
                    {
                        name: "selo_orientacao",
                        type: "enum",
                        enum: ["sim", "não"],
                        default: "'não'",
                        isNullable: false
                    },
                    {
                        name: "id_atendimento",
                        type: "int",
                        isNullable: false
                    }
                ]
            }),
            true
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(DBTable.FEEDBACKS);
    }

}
