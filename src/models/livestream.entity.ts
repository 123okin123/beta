import { Entity, OneToMany, JoinColumn } from 'typeorm';
import { ApiResponseProperty } from '@nestjs/swagger';
import { LivestreamSlot } from './livestream-slot.entity';

@Entity()
export class Livestream {
  @ApiResponseProperty()
  public readonly uuid: string;

  public url: string;

  @OneToMany(type => LivestreamSlot, slot => slot.livestream)
  @JoinColumn()
  public slots: LivestreamSlot[];
}
