import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { Asset } from 'src/models/asset.entity';
import { AssetService } from 'src/asset/services/asset.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { AddUUIDObjectRequest } from 'src/models/requests/add-uuid-object.request';

@ApiTags('Assets')
@Controller('assets')
export class AssetController {
  constructor(private readonly assetService: AssetService) {}

  @ApiOperation({ summary: 'Get all Assets' })
  @Get()
  public async getAkk(@Param() params): Promise<Asset[]> {
    return this.assetService.getAll();
  }

  @ApiOperation({ summary: 'Get one Asset' })
  @Get(':uuid')
  public async get(@Param() params): Promise<Asset> {
    return this.assetService.get(params.uuid);
  }

  @ApiOperation({ summary: 'Create an Asset' })
  @Post()
  public async create(@Body() asset: Asset): Promise<Asset> {
    return this.assetService.create(asset);
  }

  @ApiOperation({ summary: 'Update an Asset' })
  @Put(':uuid')
  public update(
    @Param('uuid') uuid: string,
    @Body() asset: Asset,
  ): Promise<Asset> {
    return;
  }

  @ApiOperation({ summary: 'Delete an Asset' })
  @Delete(':uuid')
  public remove(@Param('uuid') uuid: string) {
    return;
  }

  @ApiOperation({ summary: 'Adds a Tag to the Asset' })
  @Post(':uuid/tags')
  public addTag(@Body() body: AddUUIDObjectRequest) {
    return;
  }

  @ApiOperation({ summary: 'Removes a Tag from the Asset' })
  @Delete(':uuid/tags/:tagUUID')
  public removeTag(
    @Param('uuid') uuid: string,
    @Param('tagUUID') tagUUID: string,
  ) {
    return;
  }

  @ApiOperation({ summary: 'Adds an Image to the Asset' })
  @Post(':uuid/images')
  public addImage(@Body() body: AddUUIDObjectRequest) {
    return;
  }

  @ApiOperation({ summary: 'Removes an Image from the Asset' })
  @Delete(':uuid/images/:imageUUID')
  public removeImage(
    @Param('uuid') uuid: string,
    @Param('imageUUID') imageUUID: string,
  ) {
    return;
  }

  @ApiOperation({ summary: 'Adds a Video to the Asset' })
  @Post(':uuid/videos')
  public addVideo(@Body() body: AddUUIDObjectRequest) {
    return;
  }

  @ApiOperation({ summary: 'Removes a Video from the Asset' })
  @Delete(':uuid/videos/:videoUUID')
  public removeVideo(
    @Param('uuid') uuid: string,
    @Param('videoUUID') videoUUID: string,
  ) {
    return;
  }
}
