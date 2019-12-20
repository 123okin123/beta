import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class AddUUIDObjectRequest {
  @IsString()
  @ApiProperty()
  public uuid: string;
}
