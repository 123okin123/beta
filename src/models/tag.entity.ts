import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ApiResponseProperty, ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsString } from 'class-validator';

@Entity()
export class Tag {
  @PrimaryGeneratedColumn()
  @ApiResponseProperty()
  public readonly uuid: string;

  @ApiProperty()
  @Column()
  @IsString()
  public value: string; // e.g. football

  @ApiProperty()
  @Column()
  @IsString()
  public category: string; // e.g. sporttype
  
  @ApiProperty()
  @Column()
  @IsBoolean()
  public hidden: boolean;
}
