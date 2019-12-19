import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { Asset } from 'src/models/asset.entity';
import { AssetService } from 'src/services/asset.service';
import { Livestream } from 'src/models/livestream.entity';
import { ApiTags, ApiResponseProperty, ApiOperation } from '@nestjs/swagger';
import { LivestreamSlot } from 'src/models/livestream-slot.entity';

@ApiTags('Livestreams')
@Controller('livestreams')
export class LivestreamController {
  constructor(private readonly assetService: AssetService) {}

  @Get(':uuid')
  get(@Param() params): Livestream {
    return;
  }

  @Post()
  create(@Body() livestream: Livestream) {
    return;
  }

  @Put(':uuid')
  update(@Param('uuid') uuid: string, @Body() livestream: Livestream) {
    return;
  }

  @Delete(':uuid')
  remove(@Param('uuid') uuid: string) {
    return;
  }

  @ApiOperation({summary: 'Creates a new Slot for the Livestream'})
  @Post(':uuid/slots')
  addSlot(@Param('uuid') uuid: string, @Body() slot: LivestreamSlot) {
    return;
  }

  @ApiOperation({summary: 'Removes the Slot for the Livestream'})
  @Delete(':uuid/slots/:slotUUID')
  deleteSlot(@Param('uuid') uuid: string, @Param('slotUUID') slotUUID: string) {
    return;
  }





  
}
