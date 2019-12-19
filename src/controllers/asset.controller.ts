import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { Asset } from 'src/models/asset.entity';
import { AssetService } from 'src/services/asset.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { AddTagRequest } from 'src/models/requests/add-tag.request';





@ApiTags('Assets')
@Controller('assets')
export class AssetController {
  constructor(private readonly assetService: AssetService) {}

  @Get(':uuid')
  get(@Param() params): Asset {
    return this.assetService.get(params.uuid);
  }

  @Post()
  create(@Body() asset: Asset) {
    return this.assetService.create(asset);
  }

  @Put(':uuid')
  update(@Param('uuid') uuid: string, @Body() asset: Asset) {
    return;
  }

  @Delete(':uuid')
  remove(@Param('uuid') uuid: string) {
    return;
  }

  @ApiOperation({summary: 'Adds a Tag to the Asset'})
  @Post(':uuid/tags')
  addTag(@Body() body: AddTagRequest) {
    return;
  }

  @ApiOperation({summary: 'Removes a Tag to the Asset'})
  @Delete(':uuid/tags/:tagUUID')
  removeTag(@Param('uuid') uuid: string, @Param('tagUUID') tagUUID: string) {
    return;
  }


}
