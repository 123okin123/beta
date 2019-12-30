import { SubscriptionTransportType } from './subscription-transport-type.enum';
import { Subscription } from '../models/subscription.entity';
import { Tag } from '../models/tag.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  Tree,
  TreeChildren,
} from 'typeorm';
import { ApiResponseProperty, ApiProperty } from '@nestjs/swagger';
import { IsEmail } from 'class-validator';
import { Exclude } from 'class-transformer';
import * as bcrypt from 'bcryptjs';
import { UserRole } from './user-role.enum';
import { SubscriptionIntervalType } from './subscription-interval-type.enum';

@Entity()
export class User {
  @ApiResponseProperty()
  @PrimaryGeneratedColumn()
  public readonly uuid: string;

  @Column({ unique: true })
  @IsEmail()
  public email: string;

  @Column({ length: 128, nullable: false })
  @Exclude({ toPlainOnly: true })
  public password: string;

  @Column({ nullable: true })
  @ApiProperty({ required: false })
  public salutation: string | null;

  @Column({ nullable: true })
  @ApiProperty({ required: false })
  public first_name: string | null;

  @Column({ nullable: true })
  @ApiProperty({ required: false })
  public last_name: string | null;

  @Column({ nullable: true })
  @ApiProperty({ required: false })
  public street: string | null;

  @Column({ nullable: true })
  @ApiProperty({ required: false })
  public zip_code: string | null;

  @Column({ nullable: true })
  @ApiProperty({ required: false })
  public city: string | null;

  @Column({ default: 'de' })
  public alpha2_country_code?: 'de' | 'at' | 'ch' = 'de';

  @Column({ nullable: true })
  @ApiProperty({ required: false })
  public phone: string | null;

  @Column({ nullable: true })
  @ApiProperty({ required: false })
  public sex: 'M' | 'F' | null;

  @Column('date', { nullable: true })
  @ApiProperty({ required: false })
  public birthdate: string | null;

  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.USER,
  })
  public role: UserRole;

  @Column('boolean', { default: false })
  @ApiResponseProperty()
  public no_billing: boolean = false;

  @Column({ nullable: true })
  @ApiProperty({ required: false })
  public age_verification_policy_confirmation: 'confirmed' | null;

  @Column({ nullable: true })
  @ApiProperty({ required: false })
  public privacy_policy_confirmation: 'confirmed' | null;

  @Column({ nullable: true })
  @ApiProperty({ required: false })
  public terms_of_service_confirmation: 'confirmed' | null;

  @Column('integer', { nullable: true })
  @ApiProperty({ required: false })
  public youth_protection_category: number | null;

  @Column({ nullable: true })
  @ApiProperty({ required: false })
  public youth_protection_pin_activity: 'active' | 'inactive' | null;

  @Column('integer', { nullable: true })
  @ApiProperty({ required: false })
  public youth_protection_session_activity_interval_in_seconds: number | null;

  @ApiResponseProperty()
  @Column('boolean', { nullable: true })
  public readonly newsletter: boolean;

  @Column({
    type: 'enum',
    enum: SubscriptionIntervalType,
    default: SubscriptionIntervalType.NONE,
  })
  @ApiProperty({ required: false })
  public default_subscription_interval_type: SubscriptionIntervalType;

  @Column('simple-array', { nullable: true })
  @ApiProperty({ required: false })
  public subscription_transport_types: SubscriptionTransportType[] | null;

  @ApiResponseProperty()
  @OneToMany(
    type => Subscription,
    subscription => subscription.user,
  )
  public readonly subscriptions: Subscription[];

  public hashPassword(password: string): string {
    return bcrypt.hashSync(password, 8);
  }

  public checkIfUnencryptedPasswordIsValid(unencryptedPassword: string) {
    return bcrypt.compareSync(unencryptedPassword, this.password);
  }
}
