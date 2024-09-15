import { MigrationInterface, QueryRunner } from "typeorm";

export class Device1726346636890 implements MigrationInterface {
    name = 'Device1726346636890'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."devices_type_enum" AS ENUM('pos', 'kiosk', 'mobile')`);
        await queryRunner.query(`CREATE TYPE "public"."devices_status_enum" AS ENUM('A', 'I')`);
        await queryRunner.query(`CREATE TABLE "devices" ("createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "isActivate" boolean NOT NULL DEFAULT true, "id" SERIAL NOT NULL, "serialNo" character varying(100) NOT NULL, "type" "public"."devices_type_enum" NOT NULL DEFAULT 'pos', "status" "public"."devices_status_enum" NOT NULL DEFAULT 'A', "locationId" integer, CONSTRAINT "PK_b1514758245c12daf43486dd1f0" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "devices" ADD CONSTRAINT "FK_6b0ab91dc6cd8d205fa2379fe15" FOREIGN KEY ("locationId") REFERENCES "locations"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "devices" DROP CONSTRAINT "FK_6b0ab91dc6cd8d205fa2379fe15"`);
        await queryRunner.query(`DROP TABLE "devices"`);
        await queryRunner.query(`DROP TYPE "public"."devices_status_enum"`);
        await queryRunner.query(`DROP TYPE "public"."devices_type_enum"`);
    }

}
