import { Tag } from './tag.entity';
import { Entity } from 'typeorm';
import { ApiResponseProperty } from '@nestjs/swagger';
@Entity()
export class User {
  @ApiResponseProperty()
  public readonly uuid: string;
  public email: string;
  public salutation: string | null;
  public first_name: string | null;
  public last_name: string | null;
  public street: string | null;
  public zip_code: string | null;
  public city: string | null;
  public alpha2_country_code: 'de' | 'at' | 'ch';
  public phone: string | null;
  public sex: 'M' | 'F' | null;
  public birthdate: string;

  public role: 'ADMIN' | 'PUBLISHER' | 'USER';

  public no_billing: boolean;

  public age_verification_policy_confirmation: 'confirmed' | null;
  public privacy_policy_confirmation: 'confirmed' | null;
  public terms_of_service_confirmation: 'confirmed' | null;

  public youth_protection_category: number;
  public youth_protection_pin_activity: 'active' | 'inactive' | null;
  public youth_protection_session_activity_interval_in_seconds: number;

  public readonly newsletter: boolean;

  public default_subscription_interval_type:
    | 'none'
    | 'day'
    | 'week'
    | 'month'
    | null;
  public subscription_transport_types: ('email' | 'push')[] | null;
  public readonly subscriptions: {
    uuid: string;
    tag: Tag;
  }[];
}
