import { Controller, UseGuards, Post, Body, Delete, Param } from '@nestjs/common';
import { ApiTags, ApiParam } from '@nestjs/swagger';
import { Crud } from '@nestjsx/crud';
import { User } from './user.entity';
import { AuthGuard } from '@nestjs/passport';
import { AddUUIDObjectRequest } from 'src/models/requests/add-uuid-object.dto';

@ApiTags('Users')
@UseGuards(AuthGuard())
@Crud({
  model: {
    type: User,
  },
})
@Controller('users')
export class UsersController {}
