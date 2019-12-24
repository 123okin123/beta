import { Livestream } from 'src/common/models/livestream.entity';
import { AssetController } from 'src/assets/controllers/asset.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Asset } from 'src/common/models/asset.entity';
import { AssetService } from './services/asset.service';
import { Tag } from 'src/common/models/tag.entity';
import { Image } from 'src/common/models/image.entity';
import { Video } from 'src/common/models/video.entity';
import { LivestreamSlot } from 'src/common/models/livestream-slot.entity';
import { DefaultAdminModule, DefaultAdminSite } from 'nestjs-admin';
import { PassportModule } from '@nestjs/passport';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    AuthModule,
    TypeOrmModule.forFeature([
      Asset,
      Tag,
      Image,
      Video,
      LivestreamSlot,
      Livestream,
    ]),
    DefaultAdminModule,
  ],
  controllers: [AssetController],
  providers: [AssetService],
  exports: [TypeOrmModule],
})
export class AssetModule {
  constructor(private readonly adminSite: DefaultAdminSite) {
    this.adminSite.register('Asset', Asset);
    this.adminSite.register('Tag', Tag);
    this.adminSite.register('Image', Image);
    this.adminSite.register('Video', Video);
    this.adminSite.register('LivestreamSlot', LivestreamSlot);
  }
}
