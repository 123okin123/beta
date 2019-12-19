import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class AddTagRequest {
  @IsString()
  @ApiProperty()
  public uuid: string;
}
