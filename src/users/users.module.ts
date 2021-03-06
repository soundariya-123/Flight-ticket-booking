import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserBookingRepository } from '../user-booking/user-booking.repository';
import { JwtStratagy } from './jwt/jwt.strategy';
import { UsersController } from './users.controller';
import { Users } from './users.entity';
import { UsersRepository } from './users.repository';
import { UsersService } from './users.service';


@Module({
    imports: [
        PassportModule.register({ defaultStrategy: 'jwt'}),
        JwtModule.registerAsync({
            useFactory: async () => ({
                secret: "hotelManagement",
                signOptions: {
                    expiresIn: '1d'
                }
            })
        }),
       
        TypeOrmModule.forFeature([Users, UsersRepository, UserBookingRepository ])],
    exports: [JwtStratagy, PassportModule],
    controllers: [UsersController],
    providers: [  UsersService, JwtStratagy ],

})
export class UsersModule {}

 