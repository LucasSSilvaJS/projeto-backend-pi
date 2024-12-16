import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";
import { DBTable } from "../../constants/DBTable";

export class CriarTabelaServico1734343635811 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: DBTable.SERVICOS,
                columns: [
                    {
                        name: "id_servico",
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
                        name: "descricao",
                        type: "text",
                        isNullable: true
                    },
                    {
                        name: "preco",
                        type: "decimal",
                        precision: 10,
                        scale: 2,
                        isNullable: false
                    },
                    {
                        name: "duracao",
                        type: "int",
                        isNullable: false
                    },
                    {
                        name: "qtd_profissionais",
                        type: "int",
                        isNullable: false
                    },
                    {
                        name: "disponibilidade",
                        type: "varchar",
                        length: "255",
                        isNullable: false
                    },
                    {
                        name: "id_categoria",
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
            DBTable.SERVICOS,
            new TableForeignKey({
                referencedTableName: DBTable.CATEGORIAS,
                columnNames: ["id_categoria"],
                referencedColumnNames: ["id_categoria"],
                onDelete: "CASCADE",
                onUpdate: "CASCADE",
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(DBTable.SERVICOS);
    }

}
