import { UserRole } from './../users/user-role.enum';
import { User } from './../users/user.entity';
import { MigrationInterface, QueryRunner, getRepository } from 'typeorm';


export class CreateUser1577291458011 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    const user = new User();
    user.email = 'admin@admin.de';
    user.password = user.hashPassword('123456');
    user.role = UserRole.ADMIN;
    const userRepository = getRepository(User);
    await userRepository.save(user);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {}
}
