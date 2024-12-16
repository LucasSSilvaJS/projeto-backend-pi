import { MigrationInterface, QueryRunner, Table } from "typeorm";
import { DBTable } from "../../constants/DBTable";

export class CriarTabelaFornecedor1734344241986 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: DBTable.FORNECEDORES,
                columns: [
                    {
                        name: "id_fornecedor",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment"
                    },
                    {
                        name: "nome",
                        type: "varchar",
                        length: "255",
                        isNullable: false
                    },
                    {
                        name: "telefone",
                        type: "varchar",
                        length: "15",
                        isNullable: false
                    },
                    {
                        name: "email",
                        type: "varchar",
                        length: "255"
                    }
                ]
            }),
            true
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(DBTable.FORNECEDORES);
    }

}
