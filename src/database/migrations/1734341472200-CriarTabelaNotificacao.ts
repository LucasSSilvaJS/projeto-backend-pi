import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";
import { DBTable } from "../../constants/DBTable";

export class CriarTabelaNotificacao1734341472200 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: DBTable.NOTIFICACOES,
                columns: [
                    {
                        name: "id_notificacao",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment"
                    },
                    {
                        name: "tipo",
                        type: "varchar",
                        length: "255",
                        isNullable: false
                    },
                    {
                        name: "dataEnvio",
                        type: "datetime",
                        default: "now()",
                        isNullable: false
                    },
                    {
                        name: "id_cliente",
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
        )

        await queryRunner.createForeignKey(
            DBTable.NOTIFICACOES,
            new TableForeignKey({
                columnNames: ["id_cliente"],
                referencedColumnNames: ["id_usuario"],
                referencedTableName: DBTable.CLIENTES,
                onDelete: "CASCADE",
                onUpdate: "CASCADE"
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(DBTable.NOTIFICACOES);
    }

}
