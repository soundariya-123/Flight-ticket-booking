import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FlightsController } from './flights.controller';
import { Flights } from './flights.entity';
import { FlightsService } from './flights.service';
import { FlightsRepository } from './filghts.repository';
import { UsersRepository } from 'src/users/users.repository';

@Module({
  imports:[TypeOrmModule.forFeature([Flights,FlightsRepository, UsersRepository])],
  controllers: [FlightsController],
  providers: [FlightsService]
})
export class FlightsModule {}
