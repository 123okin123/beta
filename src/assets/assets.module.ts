import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AssetController } from 'src/assets/controllers/asset.controller';
import { AuthModule } from 'src/auth/auth.module';
import { Asset } from 'src/models/asset.entity';
import { Image } from 'src/models/image.entity';
import { LivestreamSlot } from 'src/models/livestream-slot.entity';
import { Livestream } from 'src/models/livestream.entity';
import { Tag } from 'src/models/tag.entity';
import { Video } from 'src/models/video.entity';
import { AssetService } from './services/asset.service';
import { LivestreamController } from './controllers/livestream.controller';

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
  ],
  controllers: [AssetController, LivestreamController],
  providers: [AssetService],
  exports: [TypeOrmModule],
})
export class AssetModule {

}
