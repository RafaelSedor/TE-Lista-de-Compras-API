import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { LoginUserDto } from './dto/login-user.dto';

@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UsersService,
        private readonly jwtService: JwtService,
    ) { }

    async login(loginUserDto: LoginUserDto) {
        const user = await this.usersService.validateUser(
            loginUserDto.email,
            loginUserDto.password,
        );
        if (!user) {
            throw new UnauthorizedException('Invalid credentials');
        }
        const payload = { userId: user.id, email: user.email };
        return {
            accessToken: this.jwtService.sign(payload),
        };
    }
}
