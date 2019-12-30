import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { Subscription } from 'src/models/subscription.entity';
import { CreateSubscriptionRequest } from './../models/requests/create-subscription.dto';

@ApiTags('Me')
@UseGuards(AuthGuard())
@Controller('me')
export class MeController {


  @Post('subscriptions')
  public async createSubscription(
    @Body() body: CreateSubscriptionRequest,
  ): Promise<Subscription> {
    return null;
  }

  @Delete('subscriptions/:uuid')
  public async deleteSubscription(@Param('uuid') uuid: string) {}

  @Get('subscriptions')
  public async getAllSubscriptions(): Promise<Subscription[]> {
    return [];
  }
}
