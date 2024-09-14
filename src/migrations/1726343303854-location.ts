import { MigrationInterface, QueryRunner } from "typeorm";

export class Location1726343303854 implements MigrationInterface {
    name = 'Location1726343303854'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."locations_status_enum" AS ENUM('A', 'I')`);
        await queryRunner.query(`CREATE TABLE "locations" ("createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "isActivate" boolean NOT NULL DEFAULT true, "id" SERIAL NOT NULL, "title" character varying(100) NOT NULL, "address" character varying(100), "status" "public"."locations_status_enum" NOT NULL DEFAULT 'A', "userId" integer, CONSTRAINT "PK_7cc1c9e3853b94816c094825e74" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "locations" ADD CONSTRAINT "FK_78eda52dc27b7ad20350c4a752d" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "locations" DROP CONSTRAINT "FK_78eda52dc27b7ad20350c4a752d"`);
        await queryRunner.query(`DROP TABLE "locations"`);
        await queryRunner.query(`DROP TYPE "public"."locations_status_enum"`);
    }

}
