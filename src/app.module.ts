import { UploadController } from './controllers/upoad.controller';
import { LivestreamController } from './controllers/livestream.controller';
import { AssetController } from './controllers/asset.controller';
import { Module } from '@nestjs/common';
import { AssetService } from './services/asset.service';

@Module({
  imports: [],
  controllers: [AssetController, LivestreamController, UploadController],
  providers: [AssetService],
})
export class AppModule {}
