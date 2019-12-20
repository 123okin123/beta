import { Tag } from './tag.entity';
import { IsInt, IsString, IsArray } from 'class-validator';
import { Video } from './video.entity';
import { Image } from './image.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  ManyToMany,
} from 'typeorm';
import { LivestreamSlot } from './livestream-slot.entity';
import { ApiResponseProperty } from '@nestjs/swagger';

@Entity()
export class Asset {
  @PrimaryGeneratedColumn()
  @ApiResponseProperty()
  public readonly uuid: string;

  @IsString()
  @Column()
  public title: string;

  @IsString()
  @Column()
  public short_description: string;

  @IsString()
  @Column()
  public description: string;

  @Column()
  public public_from: string | null;

  @Column()
  public content_start_date: string | null;

  @Column()
  @ApiResponseProperty()
  public readonly geo: string[];

  @Column()
  @ApiResponseProperty()
  public readonly ics: string | null;

  @Column()
  @ApiResponseProperty()
  public readonly permalink: string;

  @Column()
  @ApiResponseProperty()
  public readonly contents_freely_accessible: boolean;

  @ManyToMany(type => Tag)
  @JoinColumn()
  @ApiResponseProperty({ type: [Tag] })
  public readonly tags: Tag[];

  @ManyToMany(type => Image)
  @JoinColumn()
  @ApiResponseProperty({ type: [Image] })
  public readonly images: Image[];

  @ManyToMany(type => Video)
  @JoinColumn()
  @ApiResponseProperty({ type: [Video] })
  public readonly videos: Array<Video>;

  @OneToOne(
    type => LivestreamSlot,
    slot => slot.asset,
  )
  @JoinColumn()
  @ApiResponseProperty({ type: () => LivestreamSlot })
  public readonly slot: LivestreamSlot;
}
