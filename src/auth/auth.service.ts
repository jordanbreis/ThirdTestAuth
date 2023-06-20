import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async PassCompare(password: string, accPassword: string) {
    const isMatch = await bcrypt.compare(password, accPassword);
    return isMatch;
  }

  async signIn(username, pass) {
    const account = await this.usersService.findOne(username);
    const accValid = this.PassCompare(pass, account.password);

    if (accValid) {
      const payload = { sub: account._id, username: account.email };
      return {
        access_token: await this.jwtService.signAsync(payload),
      };
    } else {
      throw new UnauthorizedException();
    }
  }
}
