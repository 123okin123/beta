import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, InsertResult } from 'typeorm';
import { Asset } from '../../models/asset.entity';
import { DefaultAdminSite } from 'nestjs-admin';

@Injectable()
export class AssetService {
  public get(uuid: string): Asset {
    return new Asset();
  }

  public async getAll(): Promise<Asset[]> {
    return [];
  }

  public async create(asset: Asset): Promise<Asset> {
    return this.assetRepository.save(asset);
  }

  constructor(
    private readonly adminSite: DefaultAdminSite,
    @InjectRepository(Asset)
    private readonly assetRepository: Repository<Asset>,
  ) {
    adminSite.register('Asset', Asset)
  }
}
