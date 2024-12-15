import { MigrationInterface, QueryRunner } from "typeorm";

export class InitSchema1731735553357 implements MigrationInterface {
    name = 'InitSchema1731735553357'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`items\` DROP FOREIGN KEY \`items_ibfk_1\``);
        await queryRunner.query(`ALTER TABLE \`shopping_lists\` DROP FOREIGN KEY \`shopping_lists_ibfk_1\``);
        await queryRunner.query(`DROP INDEX \`shopping_list_id\` ON \`items\``);
        await queryRunner.query(`DROP INDEX \`user_id\` ON \`shopping_lists\``);
        await queryRunner.query(`DROP INDEX \`email\` ON \`users\``);
        await queryRunner.query(`ALTER TABLE \`items\` DROP COLUMN \`is_purchased\``);
        await queryRunner.query(`ALTER TABLE \`items\` DROP COLUMN \`shopping_list_id\``);
        await queryRunner.query(`ALTER TABLE \`items\` DROP COLUMN \`created_at\``);
        await queryRunner.query(`ALTER TABLE \`shopping_lists\` DROP COLUMN \`user_id\``);
        await queryRunner.query(`ALTER TABLE \`shopping_lists\` DROP COLUMN \`created_at\``);
        await queryRunner.query(`ALTER TABLE \`items\` ADD \`isPurchased\` tinyint NOT NULL DEFAULT 0`);
        await queryRunner.query(`ALTER TABLE \`items\` ADD \`shoppingListId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`shopping_lists\` ADD \`userId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`items\` DROP COLUMN \`name\``);
        await queryRunner.query(`ALTER TABLE \`items\` ADD \`name\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`shopping_lists\` DROP COLUMN \`name\``);
        await queryRunner.query(`ALTER TABLE \`shopping_lists\` ADD \`name\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`name\``);
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`name\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`email\``);
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`email\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` ADD UNIQUE INDEX \`IDX_97672ac88f789774dd47f7c8be\` (\`email\`)`);
        await queryRunner.query(`ALTER TABLE \`items\` ADD CONSTRAINT \`FK_1e7817895b78b4f7bab2f2953ff\` FOREIGN KEY (\`shoppingListId\`) REFERENCES \`shopping_lists\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`shopping_lists\` ADD CONSTRAINT \`FK_5b9bb541ecf94396d2078d96df8\` FOREIGN KEY (\`userId\`) REFERENCES \`users\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`shopping_lists\` DROP FOREIGN KEY \`FK_5b9bb541ecf94396d2078d96df8\``);
        await queryRunner.query(`ALTER TABLE \`items\` DROP FOREIGN KEY \`FK_1e7817895b78b4f7bab2f2953ff\``);
        await queryRunner.query(`ALTER TABLE \`users\` DROP INDEX \`IDX_97672ac88f789774dd47f7c8be\``);
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`email\``);
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`email\` varchar(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`name\``);
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`name\` varchar(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`shopping_lists\` DROP COLUMN \`name\``);
        await queryRunner.query(`ALTER TABLE \`shopping_lists\` ADD \`name\` varchar(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`items\` DROP COLUMN \`name\``);
        await queryRunner.query(`ALTER TABLE \`items\` ADD \`name\` varchar(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`shopping_lists\` DROP COLUMN \`userId\``);
        await queryRunner.query(`ALTER TABLE \`items\` DROP COLUMN \`shoppingListId\``);
        await queryRunner.query(`ALTER TABLE \`items\` DROP COLUMN \`isPurchased\``);
        await queryRunner.query(`ALTER TABLE \`shopping_lists\` ADD \`created_at\` timestamp NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`shopping_lists\` ADD \`user_id\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`items\` ADD \`created_at\` timestamp NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`items\` ADD \`shopping_list_id\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`items\` ADD \`is_purchased\` tinyint(1) NULL DEFAULT '0'`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`email\` ON \`users\` (\`email\`)`);
        await queryRunner.query(`CREATE INDEX \`user_id\` ON \`shopping_lists\` (\`user_id\`)`);
        await queryRunner.query(`CREATE INDEX \`shopping_list_id\` ON \`items\` (\`shopping_list_id\`)`);
        await queryRunner.query(`ALTER TABLE \`shopping_lists\` ADD CONSTRAINT \`shopping_lists_ibfk_1\` FOREIGN KEY (\`user_id\`) REFERENCES \`users\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`items\` ADD CONSTRAINT \`items_ibfk_1\` FOREIGN KEY (\`shopping_list_id\`) REFERENCES \`shopping_lists\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

}
