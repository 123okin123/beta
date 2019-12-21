import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Image {

  @PrimaryGeneratedColumn()
  public uuid: string;

  @Column()
  public url: string;

  @Column()
  public pending: boolean;
}
