import { MigrationInterface, QueryRunner } from "typeorm";
import { AppDataSource } from "../data-source";
import { User } from "../entities/User";
import { Role } from "../../constants/Role";

export class SeedAdminUser1734034795064 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const repo = AppDataSource.getRepository(User);
        const userData = new User();
        userData.email = "admin@bookie.local";
        userData.name = "Admin user";
        userData.role = Role.ADMIN;
        userData.password = "password123";

        const user = repo.create(userData);
        await repo.save(user);
        console.log("Done...");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const repo = AppDataSource.getRepository(User);

        const user = await repo.findOneBy({
            email: "admin@bookie.local"
        });

        if(user){
            await repo.remove(user);
        }
    }
}
