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
  UpdateDateColumn,
  CreateDateColumn,
} from 'typeorm';
import { LivestreamSlot } from './livestream-slot.entity';
import { ApiResponseProperty, ApiProperty } from '@nestjs/swagger';
import { Moment } from 'moment';
import { Type, Transform } from 'class-transformer';
import * as  moment from 'moment';

@Entity()
export class Asset {
  @PrimaryGeneratedColumn()
  @ApiResponseProperty()
  public readonly uuid: string;

  @CreateDateColumn()
  @ApiResponseProperty()
  @Type(() => Date)
  @Transform(value => moment(value), { toClassOnly: true })
  public readonly createdAt: Date;


  @UpdateDateColumn()
  @ApiResponseProperty()
  @Type(() => Date)
  @Transform(value => moment(value), { toClassOnly: true })
  public readonly updatedAt: Date;

  @IsString()
  @Column()
  public title: string;

  @IsString()
  @Column( { nullable: true })
  public short_description: string | null;

  @IsString()
  @Column( { nullable: true })
  public description: string | null;

  @Column('timestamp with time zone', { nullable: true })
  @Type(() => Date)
  @ApiProperty({type: 'string', example: '2020-12-31 23:15'})
  @Transform(value => moment(value), { toClassOnly: true })
  public public_from: Moment | null;

  @Column('timestamp with time zone', { nullable: true })
  @Type(() => Date)
  @ApiProperty({type: 'string', example: '2020-12-31 23:30'})
  @Transform(value => moment(value), { toClassOnly: true })
  public content_start_date: Moment | null;

  @Column('simple-array', {default: 'de'})
  @ApiResponseProperty()
  public geo: string[];

  @Column( { nullable: true })
  @ApiResponseProperty()
  public ics: string | null;

  @Column( { nullable: true })
  @ApiResponseProperty()
  public permalink: string;

  @Column('boolean', { default: true })
  @ApiResponseProperty()
  public contents_freely_accessible: boolean = true;

  @ManyToMany(type => Tag)
  @JoinColumn()
  @ApiResponseProperty({ type: [Tag] })
  public tags: Tag[];

  @ManyToMany(type => Image)
  @JoinColumn()
  @ApiResponseProperty({ type: [Image] })
  public images: Image[];

  @ManyToMany(type => Video)
  @JoinColumn()
  @ApiResponseProperty({ type: [Video] })
  public videos: Video[];

  @ApiResponseProperty({ type: () => LivestreamSlot })
  @OneToOne(
    type => LivestreamSlot,
    slot => slot.asset,
  )
  @JoinColumn()
  public slot: LivestreamSlot | null;
}
