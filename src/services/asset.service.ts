import { Injectable } from '@nestjs/common';
import { Asset } from 'src/models/asset.entity';

@Injectable()
export class AssetService {
  
  public get(uuid: string): Asset {
    return new Asset();
  }

  public async create(asset: Asset) {
    return new Asset();
  }
}
