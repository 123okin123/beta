import { Controller, Get, Param, Post, Body, Put, Delete, UseGuards } from '@nestjs/common';
import { Asset } from 'src/common/models/asset.entity';
import { Livestream } from 'src/common/models/livestream.entity';
import { ApiTags, ApiResponseProperty, ApiOperation, ApiBody, ApiExtraModels } from '@nestjs/swagger';
import { LivestreamSlot } from 'src/common/models/livestream-slot.entity';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('Livestreams')
@UseGuards(AuthGuard())
@Controller('livestreams')
export class LivestreamController {

  @ApiOperation({summary: 'Get one Livestream'})
  @Get(':uuid')
  get(@Param() params): Livestream {
    return;
  }

  @ApiOperation({summary: 'Creates a new Livestream'})
  @Post()
  create(@Body() livestream: Livestream) {
    return;
  }

  @ApiOperation({summary: 'Updates a Livestream'})
  @Put(':uuid')
  update(@Param('uuid') uuid: string, @Body() livestream: Livestream) {
    return;
  }

  @ApiOperation({summary: 'Deletes a Livestream'})
  @Delete(':uuid')
  remove(@Param('uuid') uuid: string) {
    return;
  }

  @ApiOperation({summary: 'Creates a new Slot of the Livestream for the specified asset'})
  @ApiExtraModels(Asset)
  @Post(':uuid/slots')
  addSlot(@Param('uuid') uuid: string, @Body() slot: LivestreamSlot): LivestreamSlot {
    return;
  }

  @ApiOperation({summary: 'Get all Slots of a Livestream'})
  @ApiExtraModels(Asset)
  @Get(':uuid/slots')
  getSlots(@Param('uuid') uuid: string): LivestreamSlot {
    return;
  }

  @ApiOperation({summary: 'Removes the Slot for the Livestream'})
  @Delete(':uuid/slots/:slotUUID')
  deleteSlot(@Param('uuid') uuid: string, @Param('slotUUID') slotUUID: string) {
    return;
  }


  constructor() {}



  
}
