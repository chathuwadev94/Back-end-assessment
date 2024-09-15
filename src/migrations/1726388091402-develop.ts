import { MigrationInterface, QueryRunner } from "typeorm";

export class Develop1726388091402 implements MigrationInterface {
    name = 'Develop1726388091402'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "roles" character varying array NOT NULL`);
        await queryRunner.query(`ALTER TABLE "devices" ADD CONSTRAINT "UQ_81b5deac556ec0ebcd9ca36ef99" UNIQUE ("serialNo")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "devices" DROP CONSTRAINT "UQ_81b5deac556ec0ebcd9ca36ef99"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "roles"`);
    }

}
