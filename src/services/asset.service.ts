import { Injectable } from '@nestjs/common';
import { Asset } from 'src/models/asset.entity';

@Injectable()
export class AssetService {
  get(uuid: string): Asset {
    return new Asset();
  }

  create(asset: Asset) {
    return new Asset();
  }
}
