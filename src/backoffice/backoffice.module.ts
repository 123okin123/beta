import { Module } from '@nestjs/common';

import { AdminCoreModuleFactory, AdminAuthModuleFactory, DefaultAdminSite } from 'nestjs-admin';
import { AuthModule } from 'src/auth/auth.module';
import { Asset } from 'src/models/asset.entity';
import { Tag } from 'src/models/tag.entity';
import { Image } from 'src/models/image.entity';
import { Video } from 'src/models/video.entity';
import { LivestreamSlot } from 'src/models/livestream-slot.entity';
import { User } from 'src/users/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';




const CoreModule = AdminCoreModuleFactory.createAdminCoreModule({});

@Module({
  imports: [
        CoreModule,
        AuthModule,
],
})
export class BackofficeModule {
    constructor(private readonly adminSite: DefaultAdminSite) {
        this.adminSite.register('Asset', Asset);
        this.adminSite.register('Tag', Tag);
        this.adminSite.register('Image', Image);
        this.adminSite.register('Video', Video);
        this.adminSite.register('LivestreamSlot', LivestreamSlot);
        this.adminSite.register('User', User);
      }
}
