import { Body, Controller, Delete, Get, HttpStatus, Param, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiInternalServerErrorResponse, ApiNotFoundResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { FlightsDTO } from './dto/flights.dto';
import { FlightsService } from './flights.service';
/**
 * Fligts controller
 * @class FlightsController
 * @author Prakash Pawar
 */
@ApiTags('flights')
@Controller('flights')
export class FlightsController {

    /**
     * Depandancy 
     * @param flightService FlightsService
     */
    constructor(private flightService: FlightsService) { }

    /**
     * Add Flights 
     * @param flights FlightsDTO
     * @returns flights
     */
    @ApiCreatedResponse({ description: 'Flights created successfully', status: HttpStatus.CREATED })
    @ApiInternalServerErrorResponse({ description: 'Flights not created(Internal Server) ', status: HttpStatus.INTERNAL_SERVER_ERROR })
    @Post()
    addFlights(@Body() flights: FlightsDTO): Promise<FlightsDTO> {
        return this.flightService.addFlights(flights);
    }

    /**
     * List Of Flights 
     * @returns List Of Flights 
     */
    @ApiOkResponse({ description: 'Flights fetched successfully', status: HttpStatus.OK })
    @ApiNotFoundResponse({ description: 'Flights Not found', status: HttpStatus.NOT_FOUND })
    @Get()
    listOfFligts(): Promise<FlightsDTO[]> {
        return this.flightService.listOfFlights();
    }

    /**
     * Delete Flights
     * @param id Flight id
     * @returns Deleted Flight Id 
     */
    @Delete(':id')
    deleteFlights(@Param('id') id: number): Promise<string> {
        return this.flightService.deleteFlights(id);
    }

    // @Get('/source')
    // serachFlight(@Param('source') source:string):Promise<FlightsDTO>{
    //     return this.flightService.serachFlight(source)
    // }
}
