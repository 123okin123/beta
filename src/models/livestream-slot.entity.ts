import { Livestream } from './livestream.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { ApiResponseProperty } from '@nestjs/swagger';

@Entity()
export class LivestreamSlot {

  @PrimaryGeneratedColumn()
  @ApiResponseProperty()
  public readonly uuid: string;

  @Column()
  public from: string;

  @Column()
  public until: string;

  @Column()
  public asset_uuid: string;

  @ApiResponseProperty()
  @ManyToOne(type => Livestream, livestream => livestream.slots)
  public readonly livestream: Livestream;
}
