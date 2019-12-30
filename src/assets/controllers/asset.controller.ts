import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  UseGuards,
  Request,
} from '@nestjs/common';
import { Asset } from 'src/models/asset.entity';
import { AssetService } from 'src/assets/services/asset.service';
import { ApiTags, ApiOperation, ApiBody } from '@nestjs/swagger';
import { AddUUIDObjectRequest } from 'src/models/requests/add-uuid-object.dto';
import { Crud, CrudRequest } from '@nestjsx/crud';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('Assets')
@UseGuards(AuthGuard())
@Crud({
  model: {
    type: Asset,
  },
  routes: {
    createOneBase: {
      decorators: [
        ApiBody({
          schema: {
            type: 'object',
            properties: {
              title: { type: 'string' },
              short_description: { type: 'string' },
              description: { type: 'string' },
              public_from: { type: 'string' },
              content_start_date: { type: 'string' },
            },
          },
        }),
      ],
    },
    updateOneBase: {
      decorators: [
        ApiBody({
          schema: {
            type: 'object',
            properties: {
              title: { type: 'string' },
              short_description: { type: 'string' },
              description: { type: 'string' },
              public_from: { type: 'string' },
              content_start_date: { type: 'string' },
            },
          },
        }),
      ],
    },
    replaceOneBase: {
      decorators: [ApiBody({
        schema: {
          type: 'object',
          properties: {
            title: {type: 'string'},
            short_description: {type: 'string'},
            description: {type: 'string'},
            public_from: {type: 'string'},
            content_start_date: {type: 'string'}
          }
        }
      })],
    }
  },
})
@Controller('assets')
export class AssetController {


  @ApiOperation({ summary: 'Adds a Tag to the Asset' })
  @Post(':uuid/tags')
  public addTag(
    @Param('uuid') assetUUID: string,
    @Body() body: AddUUIDObjectRequest,
  ) {
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
  public addImage(
    @Param('uuid') assetUUID: string,
    @Body() body: AddUUIDObjectRequest,
  ) {
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
  public addVideo(
    @Param('uuid') assetUUID: string,
    @Body() body: AddUUIDObjectRequest,
  ) {
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

  constructor(private readonly assetService: AssetService) {}
}
