import { Livestream } from 'src/models/livestream.entity';
import { AssetController } from 'src/controllers/asset.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Asset } from 'src/models/asset.entity';
import { AssetService } from './services/asset.service';
import { Tag } from 'src/models/tag.entity';
import { Image } from 'src/models/image.entity';
import { Video } from 'src/models/video.entity';
import { LivestreamSlot } from 'src/models/livestream-slot.entity';
import { DefaultAdminModule } from 'nestjs-admin';

@Module({
  imports: [TypeOrmModule.forFeature(
    [
      Asset,
      Tag,
      Image,
      Video,
      LivestreamSlot,
      Livestream,
    ]
    ), DefaultAdminModule],
  controllers: [AssetController],
  providers: [AssetService],
  exports: [TypeOrmModule],
})
export class AssetModule {}
