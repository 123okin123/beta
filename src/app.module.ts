import { AssetController } from './controllers/asset.controller';
import { Module } from '@nestjs/common';
import { AssetService } from './services/asset.service';

@Module({
  imports: [],
  controllers: [AssetController],
  providers: [AssetService],
})
export class AppModule {}
