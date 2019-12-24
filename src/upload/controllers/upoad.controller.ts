import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFiles,
  Get,
  Param,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateUploadEndpointResponse } from 'src/common/models/responses/create-upload-endpoint.response';

import { FileInterceptor } from '@nestjs/platform-express';
import { Video } from 'src/common/models/video.entity';

@ApiTags('Mediafiles')
@Controller('mediafiles')
export class UploadController {


  @Get('upload-token')
  public createUploadEndpoint(): CreateUploadEndpointResponse {
    return { token: '' };
  }

  @Post('upload/:token')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFiles() file, @Param('token') uuid: string) {
    return null;
  }

  constructor() {}
}
