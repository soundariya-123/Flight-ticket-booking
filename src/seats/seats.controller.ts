import { Body, Controller, HttpStatus, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiInternalServerErrorResponse, ApiTags } from '@nestjs/swagger';
import { SeatsDTO } from './dto/seats.dto';
import { SeatsService } from './seats.service';

/**
 * SeatsController - All seats CRUD operation is here
 * @author soundariya r
 */
@ApiTags('Seats')
@Controller('seats')
export class SeatsController {

    /**
     * Logger for to debug and Maintain this application
     */
    constructor(private seatsService: SeatsService) {}

    /**
     * add seats
     * @param seatsDto SeatsDTO
     * @returns success message
     */
    @ApiCreatedResponse({description: 'Seats created successfully', status: HttpStatus.CREATED})
    @ApiInternalServerErrorResponse({description: 'Seats not created(Internal Server) ', status: HttpStatus.INTERNAL_SERVER_ERROR})
    @Post()
    addSeats(@Body() seatsDto: SeatsDTO): Promise<string>{
        return this.seatsService.addSeats(seatsDto);
    }
}
