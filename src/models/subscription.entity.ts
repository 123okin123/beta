import { Tag } from './tag.entity';
import {
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  ManyToOne,
} from 'typeorm';
import { User } from '../users/user.entity';

@Entity()
export class Subscription {
  @PrimaryGeneratedColumn()
  public uuid: string;

  @ManyToOne(
    type => User,
    user => user.subscriptions,
  )
  public user: User;

  @OneToOne(type => Tag)
  @JoinColumn()
  public tag: Tag;
}
