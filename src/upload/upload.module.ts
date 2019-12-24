import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DefaultAdminModule, DefaultAdminSite } from 'nestjs-admin';
import { Asset } from 'src/common/models/asset.entity';
import { UploadController } from './controllers/upoad.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([
    ]),
    DefaultAdminModule,
  ],
  controllers: [UploadController],
  providers: [],
  exports: [TypeOrmModule],
})
export class UploadModule {
  constructor(private readonly adminSite: DefaultAdminSite) {
    this.adminSite.register('Asset', Asset);
  }
}
