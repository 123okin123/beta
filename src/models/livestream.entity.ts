import { Entity, OneToMany, JoinColumn, PrimaryGeneratedColumn } from 'typeorm';
import { ApiResponseProperty } from '@nestjs/swagger';
import { LivestreamSlot } from './livestream-slot.entity';

@Entity()
export class Livestream {
  @ApiResponseProperty()
  @PrimaryGeneratedColumn()
  public readonly uuid: string;

  public readonly output_url: string;

  public readonly input_url: string;

  @ApiResponseProperty({ type: () => [LivestreamSlot] })
  @OneToMany(
    type => LivestreamSlot,
    slot => slot.livestream,
  )
  @JoinColumn()
  public slots: LivestreamSlot[];
}
