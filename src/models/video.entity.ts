import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ApiResponseProperty, ApiProperty } from '@nestjs/swagger';

@Entity()
export class Video {

  @ApiResponseProperty()
  @PrimaryGeneratedColumn()
  public readonly uuid: string;

  @ApiProperty()
  @Column()
  public url: string;

  @ApiProperty()
  @Column()
  public pending: boolean;
}
