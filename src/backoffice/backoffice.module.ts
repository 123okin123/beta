import { AdminSite } from './admin-site';
import { Module } from '@nestjs/common';

import { AdminCoreModuleFactory, DefaultAdminSite, AdminAuthModuleFactory } from 'nestjs-admin';
// import { AuthModule } from 'src/auth/auth.module';
import { Asset } from 'src/models/asset.entity';
import { Tag } from 'src/models/tag.entity';
import { Image } from 'src/models/image.entity';
import { Video } from 'src/models/video.entity';
import { LivestreamSlot } from 'src/models/livestream-slot.entity';
import { User } from 'src/users/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { AdminController } from './admin.controller';




const CoreModule = AdminCoreModuleFactory.createAdminCoreModule({
    adminSite: AdminSite,
    adminController: AdminController,
});


@Module({
  imports: [
        CoreModule,
AuthModule,
],
})
export class BackofficeModule {
    constructor(private readonly adminSite: AdminSite) {
        this.adminSite.register('Asset', Asset);
        this.adminSite.register('Tag', Tag);
        this.adminSite.register('Image', Image);
        this.adminSite.register('Video', Video);
        this.adminSite.register('LivestreamSlot', LivestreamSlot);
        this.adminSite.register('User', User);
      }
}
