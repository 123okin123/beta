import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DefaultAdminSite } from 'nestjs-admin';
import { Asset } from 'src/models/asset.entity';
import { UploadController } from './controllers/upoad.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([
    ]),
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
