import { AuthGuard } from '@nestjs/passport';
import { Module, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { DefaultAdminSite, DefaultAdminModule } from 'nestjs-admin';
import { User } from './user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([User]), DefaultAdminModule],
  providers: [UsersService],
  exports: [UsersService, DefaultAdminModule, TypeOrmModule],
})

export class UsersModule {
  constructor(private readonly adminSite: DefaultAdminSite) {
    this.adminSite.register('User', User);
  }
}
