import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateSlotRequest {
  @IsString()
  @ApiProperty()
  public assetUUID: string;
  @IsString()
  @ApiProperty()
  public from: string;
  @IsString()
  @ApiProperty()
  public until: string;
}
