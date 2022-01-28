import { Body, Controller, Post } from '@nestjs/common';
import { FlightsDTO } from './dto/flights.dto';
import { FlightsService } from './flights.service';

@Controller('flights')
export class FlightsController {
    constructor(private flightService:FlightsService){}

    @Post()
    addFlights(@Body() flights: FlightsDTO): Promise<FlightsDTO>{
        return this.flightService.addFlights(flights)

    }
}
