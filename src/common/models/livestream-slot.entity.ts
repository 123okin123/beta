import { Livestream } from 'src/common/models/livestream.entity';
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
  @ApiProperty()
  public from: string;

  @Column()
  @IsString()
  @ApiProperty()
  public until: string;

  @Column()
  @IsString()
  @ApiProperty()
  public asset_uuid: string;

  @OneToOne(type => Asset, asset => asset.slot)
  public readonly asset: Asset;


  @ManyToOne(type => Livestream, livestream => livestream.slots)
  public readonly livestream: Livestream;
}
