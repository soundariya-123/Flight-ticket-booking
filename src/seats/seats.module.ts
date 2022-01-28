import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TicketDetailsRepository } from '../user-booking/ticket-details/ticket-details.repository';
import { SeatsController } from './seats.controller';
import { Seats } from './seats.entity';
import { SeatsRepository } from './seats.repository';
import { SeatsService } from './seats.service';

@Module({
  imports: [ TypeOrmModule.forFeature([Seats, TicketDetailsRepository , SeatsRepository])  ],
  controllers: [SeatsController],
  providers: [  SeatsService ],
})
export class SeatsModule {}
