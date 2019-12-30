import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateSubscriptionRequest {
    @IsString()
    @ApiProperty()
    public tagUUID: string;
}
