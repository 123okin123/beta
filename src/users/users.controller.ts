import { Controller, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud } from '@nestjsx/crud';
import { User } from './user.entity';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('Users')
@UseGuards(AuthGuard())
@Crud({
  model: {
    type: User,
  },
})
@Controller('users')
export class UsersController {}
