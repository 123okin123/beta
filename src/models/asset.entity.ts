import { Tag } from './tag.entity';
import { IsInt, IsString } from 'class-validator';
import { Slot } from './slot.entity';
import { Video } from './video.entity';
import { Image } from './image.entity';

export class Asset {
  public readonly uuid: string;

  @IsString()
  public title: string;

  public short_description: string;
  public description: string;
  public readonly geo: string[];
  public readonly ics: string | null;
  public readonly permalink: string;
  public readonly contents_freely_accessible: boolean;

  public public_from: string | null;

  //** Datetime string describing when the content will start (e.g. Wettkampfstart). Not necessarily start of the livestream */
  public content_start_date: string | null;

  public readonly tags: Tag[];

  public readonly images: Image[];

  public readonly videos: Video[];

  public readonly slot: Slot | null;
}
