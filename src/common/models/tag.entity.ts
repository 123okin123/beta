import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ApiResponseProperty, ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsString } from 'class-validator';

@Entity()
export class Tag {
  @PrimaryGeneratedColumn()
  @ApiResponseProperty()
  public readonly uuid: string;

  @ApiProperty()
  @Column('text')
  @IsString()
  public value: string; // e.g. football

  @ApiProperty()
  @Column('text')
  @IsString()
  public category: string; // e.g. sporttype

  @ApiProperty()
  @Column('boolean', { default: false })
  @IsBoolean()
  public hidden: boolean = false;
}
