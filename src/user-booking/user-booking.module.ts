import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersRepository } from '../users/users.repository';
import { TicketDetailsRepository } from './ticket-details/ticket-details.repository';
import { UserBookingController } from './user-booking.controller';
import { UserBooking } from './user-booking.entity';
import { UserBookingRepository } from './user-booking.repository';
import { UserBookingService } from './user-booking.service';

@Module({
    imports: [ TypeOrmModule.forFeature([UserBooking, UserBookingRepository, UsersRepository, TicketDetailsRepository])  ],
    controllers: [ UserBookingController],
    providers: [ UserBookingService],
})
export class UserBookingModule {}
