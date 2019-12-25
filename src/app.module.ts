import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { AssetModule } from './assets/assets.module';
import { BackofficeModule } from './backoffice/backoffice.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (
        configService: ConfigService,
      ): Promise<PostgresConnectionOptions> => ({
        type: 'postgres',
        host: configService.get<string>('TYPEORM_HOST'),
        port: configService.get<number>('TYPEORM_PORT'),
        username: configService.get<string>('TYPEORM_USERNAME'),
        password: configService.get<string>('TYPEORM_PASSWORD'),
        database: configService.get<string>('TYPEORM_DATABASE'),
        entities: [
          __dirname + '/**/*.entity{.ts,.js}',
        ],
        migrations: [__dirname + 'migrations/*.migration{.ts,.js}'],
        cli: {
          migrationsDir: __dirname + 'migrations/*.migration{.ts,.js}',
          entitiesDir: __dirname + 'models/*.entity{.ts,.js}',
        },
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    BackofficeModule,
    AssetModule,
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {

}
