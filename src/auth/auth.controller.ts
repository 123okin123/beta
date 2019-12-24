
import { Controller, Request, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Controller()
export class AuthController {


  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  public async login(@Request() req) {
    return this.authService.login(req.user);
  }

  constructor(private readonly authService: AuthService) {}

}