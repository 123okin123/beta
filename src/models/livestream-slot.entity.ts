import { Livestream } from 'src/models/livestream.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, IsNull, JoinColumn, OneToOne } from 'typeorm';
import { ApiResponseProperty, ApiPropertyOptional, ApiHideProperty, ApiProperty, getSchemaPath } from '@nestjs/swagger';
import { IsString, ValidateNested } from 'class-validator';
import { Asset } from './asset.entity';

@Entity()
export class LivestreamSlot {

  @PrimaryGeneratedColumn()
  @ApiResponseProperty()
  public readonly uuid: string;

  @Column()
  @IsString()
  public from: string;

  @Column()
  @IsString()
  public until: string;

  @ApiResponseProperty({type: () => Asset})
  @OneToOne(type => Asset, asset => asset.slot)
  public readonly asset: Asset;

  @ApiResponseProperty({type: () => Livestream})
  @ManyToOne(type => Livestream, livestream => livestream.slots)
  public readonly livestream: Livestream;
}
