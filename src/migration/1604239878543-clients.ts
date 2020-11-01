import {MigrationInterface, QueryRunner} from "typeorm";

export class clients1604239878543 implements MigrationInterface {
    name = 'clients1604239878543'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "sales" ("id" SERIAL NOT NULL, "qnt" integer NOT NULL, "createdat" bigint NOT NULL, "updatedat" bigint NOT NULL, "clientsId" integer, "productsId" integer, CONSTRAINT "PK_4f0bc990ae81dba46da680895ea" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "clients" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "position" character varying NOT NULL, "email" character varying NOT NULL, "phone" character varying NOT NULL, "password" character varying NOT NULL, "createdat" bigint NOT NULL, "updatedat" bigint NOT NULL, CONSTRAINT "UQ_b835c190939b0129d545a48a677" UNIQUE ("email", "phone"), CONSTRAINT "PK_f1ab7cf3a5714dbc6bb4e1c28a4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "sales" ADD CONSTRAINT "FK_fb22a49d1fdfc632097c88a6516" FOREIGN KEY ("clientsId") REFERENCES "clients"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "sales" ADD CONSTRAINT "FK_2fa35c7d2e7bdade14218e43b2d" FOREIGN KEY ("productsId") REFERENCES "products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "sales" DROP CONSTRAINT "FK_2fa35c7d2e7bdade14218e43b2d"`);
        await queryRunner.query(`ALTER TABLE "sales" DROP CONSTRAINT "FK_fb22a49d1fdfc632097c88a6516"`);
        await queryRunner.query(`DROP TABLE "clients"`);
        await queryRunner.query(`DROP TABLE "sales"`);
    }

}
