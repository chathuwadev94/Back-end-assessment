import { MigrationInterface, QueryRunner } from "typeorm";

export class Develop1726380564753 implements MigrationInterface {
    name = 'Develop1726380564753'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "UQ_680d4b547658c189d942e9e3c0b"`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "UQ_83227bb396702f98d8ed8c580f0" UNIQUE ("nic", "userName")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "UQ_83227bb396702f98d8ed8c580f0"`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "UQ_680d4b547658c189d942e9e3c0b" UNIQUE ("nic")`);
    }

}
