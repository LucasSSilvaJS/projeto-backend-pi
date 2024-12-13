import { MigrationInterface, QueryRunner } from "typeorm";

export class SeedInitialData1733870010204 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `
            INSERT IGNORE INTO authors (id, name, email, bio, image) VALUES
                (1, 'John Smith', 'john@example.com', 'Bio 1', 'http://localhost'),
                (2, 'Jane Doe', 'jane@example.com', 'Bio 2', 'http://localhost')
            `
        );

        await queryRunner.query(
            `
            INSERT IGNORE INTO books (id, title, description, price, authorId, category) VALUES
                (1, 'The Alchemist', 'A book about following your dreams', 10, 1, 'Fiction'),
                (2, 'The Subtle Art of Not Giving a F*ck', 'A book about learning to prioritize your values', 12, 2, 'Self-help')
            `
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM books`);
        await queryRunner.query(`DELETE FROM authors`);
    }

}
