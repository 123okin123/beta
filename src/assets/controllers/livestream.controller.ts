import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { Asset } from 'src/models/asset.entity';
import { Livestream } from 'src/models/livestream.entity';
import {
  ApiTags,
  ApiResponseProperty,
  ApiOperation,
  ApiBody,
  ApiExtraModels,
  ApiParam,
  ApiResponse,
} from '@nestjs/swagger';
import { LivestreamSlot } from 'src/models/livestream-slot.entity';
import { AuthGuard } from '@nestjs/passport';
import { CreateSlotRequest } from 'src/models/requests/create-slot.dto';

@ApiTags('Livestreams')
@UseGuards(AuthGuard())
@Controller('livestreams')
export class LivestreamController {
  @ApiOperation({ summary: 'Get one Livestream' })
  @ApiResponse({
    status: 200,
    schema: {
      type: 'object',
      properties: {
        uuid: { type: 'string' },
        output_url: { type: 'string' },
        input_url: { type: 'string' },
        slots: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              uuid: { type: 'string' },
              from: { type: 'string' },
              until: { type: 'string' },
              asset: {
                type: 'object',
                properties: {
                  uuid: { type: 'string' },
                },
              },
            },
          },
        },
      },
    },
  })
  @Get(':uuid')
  public async get(@Param('uuid') uuid: string): Livestream {
    return;
  }

  @ApiOperation({ summary: 'Creates a new Livestream' })
  @ApiResponse({
    status: 201,
    schema: {
      type: 'object',
      properties: {
        uuid: { type: 'string' },
        output_url: { type: 'string' },
        input_url: { type: 'string' },
        slots: {
          type: 'array',
          items: {},
        },
      },
    },
  })
  @Post()
  public async create(@Body() livestream: Livestream): Promise<Livestream> {
    return;
  }

  @ApiOperation({ summary: 'Updates a Livestream' })
  @Put(':uuid')
  public async update(
    @Param('uuid') uuid: string,
    @Body() livestream: Livestream,
  ) {
    return;
  }

  @ApiOperation({ summary: 'Deletes a Livestream' })
  @Delete(':uuid')
  public async remove(@Param('uuid') uuid: string) {
    return;
  }

  @ApiOperation({
    summary: 'Creates a new Slot of the Livestream for the specified asset',
  })
  @ApiParam({
    name: 'uuid',
    schema: {
      type: 'string',
      example: 'uuid of the livestream',
    },
  })
  @ApiResponse({
    status: 201,
    schema: {
      type: 'object',
      properties: {
        uuid: { type: 'string' },
        output_url: { type: 'string' },
        input_url: { type: 'string' },
        slots: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              uuid: { type: 'string' },
              from: { type: 'string' },
              until: { type: 'string' },
              asset: {
                type: 'object',
                properties: {
                  uuid: { type: 'string' },
                },
              },
            },
          },
        },
      },
    },
  })
  @Post(':uuid/slots')
  public async addSlot(
    @Param('uuid') uuid: string,
    @Body() slot: CreateSlotRequest,
  ): Promise<LivestreamSlot> {
    return;
  }

  @ApiOperation({ summary: 'Get all Slots of a Livestream' })
  @ApiResponse({
    status: 200,
    schema: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          uuid: { type: 'string' },
          from: { type: 'string' },
          until: { type: 'string' },
          asset: {
            type: 'object',
            properties: {
              uuid: { type: 'string' },
            },
          },
        },
      },
    },
  })
  @Get(':uuid/slots')
  public async getSlots(@Param('uuid') uuid: string): Promise<LivestreamSlot> {
    return;
  }

  @ApiOperation({ summary: 'Removes the Slot for the Livestream' })
  @Delete(':uuid/slots/:slotUUID')
  public async deleteSlot(
    @Param('uuid') uuid: string,
    @Param('slotUUID') slotUUID: string,
  ) {
    return;
  }

  constructor() {}
}
