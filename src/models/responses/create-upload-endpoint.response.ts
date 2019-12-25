import { ApiProperty } from '@nestjs/swagger';

export class CreateUploadEndpointResponse {
  @ApiProperty()
  public token: string;
}
