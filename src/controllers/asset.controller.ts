import { Controller, Get, Param } from '@nestjs/common';
import { Asset } from 'src/models/asset.entity';
import { AssetService } from 'src/services/asset.service';

@Controller('assets')
export class AssetController {
  constructor(private readonly assetService: AssetService) {}

  @Get(':uuid')
  get(@Param() params): Asset {
    return this.assetService.get(params.uuid);
  }
}
