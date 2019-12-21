import { Livestream } from 'src/models/livestream.entity';
import { UploadController } from './controllers/upoad.controller';
import { LivestreamController } from './controllers/livestream.controller';
import { AssetController } from './controllers/asset.controller';
import { Module } from '@nestjs/common';
import { AssetService } from './asset/services/asset.service';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Tag } from './models/tag.entity';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { Asset } from './models/asset.entity';
import { Image } from './models/image.entity';
import { Video } from './models/video.entity';
import { LivestreamSlot } from './models/livestream-slot.entity';
import { AssetModule } from './asset/asset.module';
import { DefaultAdminModule } from 'nestjs-admin';
import { AdminUserEntity } from 'nestjs-admin';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DefaultAdminModule,
    AssetModule,
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
          AdminUserEntity,
          Asset,
          Tag,
          Image,
          Video,
          LivestreamSlot,
          Livestream,
        ],
        migrations: [__dirname + 'migrations/*.migration{.ts,.js}'],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
