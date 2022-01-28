import { HttpException, HttpStatus, Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { FlightsDTO } from './dto/flights.dto';
import { FlightsRepository } from './filghts.repository';
import { async } from 'rxjs';
import { throws } from 'assert';
/**
 * Flights Service 
 * @class FlightsService
 * @author Prakash Pawar
 */
@Injectable()
export class FlightsService {
    /**
     * Logger 
     */
    logger = new Logger(FlightsService.name)

    /**
     * Depandancy Injection 
     * @param flightRepo FlightsRepository
     */
    constructor(private flightRepo: FlightsRepository) { }

    /**
     * Add Filghts 
     * @param flight FlightsDTO
     * @returns flight added Succefully with id
     */
    async addFlights(flight: FlightsDTO): Promise<FlightsDTO> {
        let response: FlightsDTO;
        try {
            response = await this.flightRepo.save(flight);
            this.logger.log(`flight added Succefully with id: ${response}`)

        } catch (err) {
            this.logger.error(err.message);
            throw new InternalServerErrorException(err.message);
        }
        return response;
    }

    /**
     * List Of Flights 
     * @returns Able to fetch list of flights 
     */
    async listOfFlights(): Promise<FlightsDTO[]> {
        try {
            let response = await this.flightRepo.find();
            if (response.length > 0) {
                this.logger.log(`Able to fetch list of ${response.length} Flights`);
                return response;
            } else {
                const message = 'Flihts not found ';
                this.logger.warn(message);
                throw new NotFoundException(message);

            }
        } catch (error) {
            this.logger.error(error.message)
            throw new InternalServerErrorException(error.message)
        }

    }
    /**
     * Delete Flight
     * @param id Flight Id 
     * @returns Flights deleted successfully
     */
    async deleteFlights(id: number): Promise<string> {
        try {
            let response = await this.flightRepo.delete(id);
            if (response.affected > 0) {
                const msg: string = 'Flights deleted successfully';
                this.logger.log(msg)
                return msg
            } else {
                throw new InternalServerErrorException('Flights not deleted')
            }
        } catch (err) {
            this.logger.error(err.message)
            throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // async serachFlight(source: string): Promise<FlightsDTO>{
    //     let searchFlight:FlightsDTO[]=await this.flightRepo.searchFlight(source);
    //     if(searchFlight.length!=0){
    //         return searchFlight;
            
    //     }

    // }






}
