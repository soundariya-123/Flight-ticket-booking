import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { UserBookingModule } from './user-booking/user-booking.module';
import { SeatsService } from './seats/seats.service';
import { SeatsModule } from './seats/seats.module';

@Module({
  imports: [ TypeOrmModule.forRoot(), UsersModule, UserBookingModule, SeatsModule ],
  controllers: [AppController ],
  providers: [AppService ],
})
export class AppModule {}
