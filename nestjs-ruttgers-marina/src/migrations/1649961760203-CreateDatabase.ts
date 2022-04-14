import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateDatabase1649961760203 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createDatabase('ruttgersmarina', true);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropDatabase('ruttgersmarina', true);
    }

}
