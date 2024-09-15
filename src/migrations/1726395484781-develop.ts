import { MigrationInterface, QueryRunner } from "typeorm";

export class Develop1726395484781 implements MigrationInterface {
    name = 'Develop1726395484781'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "devices" ADD "image" character varying(100) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "devices" DROP COLUMN "image"`);
    }

}
