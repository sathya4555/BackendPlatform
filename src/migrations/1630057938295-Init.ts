import {MigrationInterface, QueryRunner} from "typeorm";

export class Init1630057938295 implements MigrationInterface {
    name = 'Init1630057938295'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "role" ("id" SERIAL NOT NULL, "rolename" character varying, "adminname" character varying, "methodname" text array, CONSTRAINT "PK_b36bcfe02fc8de3c57a8b2391c2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "client" ("id" SERIAL NOT NULL, "name" character varying, "adminname" character varying, "roleId" integer, "adminId" integer, CONSTRAINT "PK_96da49381769303a6515a8785c7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "admin" ("id" SERIAL NOT NULL, "name" character varying, "password" character varying, CONSTRAINT "PK_e032310bcef831fb83101899b10" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "feature" ("id" SERIAL NOT NULL, "featurename" character varying, "adminname" character varying, "featuredesciption" character varying, "appId" integer, CONSTRAINT "PK_03930932f909ca4be8e33d16a2d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "app" ("id" SERIAL NOT NULL, "appname" character varying, "adminname" character varying, "appdesciption" character varying, CONSTRAINT "PK_9478629fc093d229df09e560aea" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "app_roles" ("id" SERIAL NOT NULL, "approlename" character varying, "adminname" character varying, "rolename" character varying, "rolepermission" character varying, "appId" integer, "roleId" integer, CONSTRAINT "PK_1dab358fe21b705367e3a7194c0" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "crud" ("id" SERIAL NOT NULL, "methodname" character varying, "methodnumber" integer, CONSTRAINT "PK_42c8cba058c20f7c3f588cb900c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "client_classes_role" ("clientId" integer NOT NULL, "roleId" integer NOT NULL, CONSTRAINT "PK_7d4f4b179b6ef2b9bee96f3a6d0" PRIMARY KEY ("clientId", "roleId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_3aa0a2fe179535a3167cfa0096" ON "client_classes_role" ("clientId") `);
        await queryRunner.query(`CREATE INDEX "IDX_e083f8421a8c821ab501047aa8" ON "client_classes_role" ("roleId") `);
        await queryRunner.query(`ALTER TABLE "client" ADD CONSTRAINT "FK_596dadf4ff5b01bd50869c57993" FOREIGN KEY ("roleId") REFERENCES "role"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "client" ADD CONSTRAINT "FK_bf9b79f6915a34b44b7988db574" FOREIGN KEY ("adminId") REFERENCES "admin"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "feature" ADD CONSTRAINT "FK_03954dac964ee7482215c7eb9c4" FOREIGN KEY ("appId") REFERENCES "app"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "app_roles" ADD CONSTRAINT "FK_b49091938daa849a9ba010291ae" FOREIGN KEY ("appId") REFERENCES "app"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "app_roles" ADD CONSTRAINT "FK_fe485d5417f73192d5451bf6ff5" FOREIGN KEY ("roleId") REFERENCES "role"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "client_classes_role" ADD CONSTRAINT "FK_3aa0a2fe179535a3167cfa0096d" FOREIGN KEY ("clientId") REFERENCES "client"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "client_classes_role" ADD CONSTRAINT "FK_e083f8421a8c821ab501047aa83" FOREIGN KEY ("roleId") REFERENCES "role"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "client_classes_role" DROP CONSTRAINT "FK_e083f8421a8c821ab501047aa83"`);
        await queryRunner.query(`ALTER TABLE "client_classes_role" DROP CONSTRAINT "FK_3aa0a2fe179535a3167cfa0096d"`);
        await queryRunner.query(`ALTER TABLE "app_roles" DROP CONSTRAINT "FK_fe485d5417f73192d5451bf6ff5"`);
        await queryRunner.query(`ALTER TABLE "app_roles" DROP CONSTRAINT "FK_b49091938daa849a9ba010291ae"`);
        await queryRunner.query(`ALTER TABLE "feature" DROP CONSTRAINT "FK_03954dac964ee7482215c7eb9c4"`);
        await queryRunner.query(`ALTER TABLE "client" DROP CONSTRAINT "FK_bf9b79f6915a34b44b7988db574"`);
        await queryRunner.query(`ALTER TABLE "client" DROP CONSTRAINT "FK_596dadf4ff5b01bd50869c57993"`);
        await queryRunner.query(`DROP INDEX "IDX_e083f8421a8c821ab501047aa8"`);
        await queryRunner.query(`DROP INDEX "IDX_3aa0a2fe179535a3167cfa0096"`);
        await queryRunner.query(`DROP TABLE "client_classes_role"`);
        await queryRunner.query(`DROP TABLE "crud"`);
        await queryRunner.query(`DROP TABLE "app_roles"`);
        await queryRunner.query(`DROP TABLE "app"`);
        await queryRunner.query(`DROP TABLE "feature"`);
        await queryRunner.query(`DROP TABLE "admin"`);
        await queryRunner.query(`DROP TABLE "client"`);
        await queryRunner.query(`DROP TABLE "role"`);
    }

}
