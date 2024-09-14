import { MigrationInterface, QueryRunner } from "typeorm";

export class Device1726346815383 implements MigrationInterface {
    name = 'Device1726346815383'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TYPE "public"."devices_status_enum" RENAME TO "devices_status_enum_old"`);
        await queryRunner.query(`CREATE TYPE "public"."devices_status_enum" AS ENUM('active', 'inactive')`);
        await queryRunner.query(`ALTER TABLE "devices" ALTER COLUMN "status" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "devices" ALTER COLUMN "status" TYPE "public"."devices_status_enum" USING "status"::"text"::"public"."devices_status_enum"`);
        await queryRunner.query(`ALTER TABLE "devices" ALTER COLUMN "status" SET DEFAULT 'active'`);
        await queryRunner.query(`DROP TYPE "public"."devices_status_enum_old"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."devices_status_enum_old" AS ENUM('A', 'I')`);
        await queryRunner.query(`ALTER TABLE "devices" ALTER COLUMN "status" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "devices" ALTER COLUMN "status" TYPE "public"."devices_status_enum_old" USING "status"::"text"::"public"."devices_status_enum_old"`);
        await queryRunner.query(`ALTER TABLE "devices" ALTER COLUMN "status" SET DEFAULT 'A'`);
        await queryRunner.query(`DROP TYPE "public"."devices_status_enum"`);
        await queryRunner.query(`ALTER TYPE "public"."devices_status_enum_old" RENAME TO "devices_status_enum"`);
    }

}
