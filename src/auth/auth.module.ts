import { JwtStrategy } from './jwt.strategy';
import { Module, forwardRef } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalStrategy, DefaultAdminModule, AdminUserService, AdminUserController } from 'nestjs-admin';
import { UsersModule } from 'src/users/users.module';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  controllers: [AuthController],
  imports: [
    forwardRef(() => UsersModule),
    ConfigModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('YWT_SECRET'),
        signOptions: { expiresIn: '60s' },
      }),
      inject: [ConfigService],
    }),

  ],
  providers: [AuthService, LocalStrategy, JwtStrategy,     AdminUserService,
  ],
  exports: [PassportModule]
})
export class AuthModule {}
