import { HttpException, HttpStatus, Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { INTERNAL_ERROR, SEAT_CREATED } from '../constants';
import { TicketDetailsRepository } from '../user-booking/ticket-details/ticket-details.repository';
import { SeatsDTO } from './dto/seats.dto';
import { SeatsEnum } from './seats.enum';
import { SeatsRepository } from './seats.repository';

/**
 * SeatsService -- to write a business logic
 * @author soundariya
 */
@Injectable()
export class SeatsService {

    /**
     * Logger instance
     */
    logger = new Logger();

    /**
     * dependency injection
     * @param seatsRepo SeatsRepository
     * @param ticketRepo TicketDetailsRepository
     */
    constructor(private seatsRepo: SeatsRepository,
                private ticketRepo : TicketDetailsRepository){}

    /**
     * Add seats 
     * @param seatsDto SeatsDTO
     * @returns success message
     */
    async addSeats(seatsDto: SeatsDTO): Promise<string> {
        try{
            let ticket_details  = await this.ticketRepo.findOne(seatsDto.ticket_details)
            if(ticket_details) {
                seatsDto.seat_status = SeatsEnum.Booked;
            } else {
                seatsDto.seat_status = SeatsEnum.Available;
            }
            let response = await this.seatsRepo.save(seatsDto);
            if(response){
                const msg:string = `Seat created successfully with id:${response.id}`
                this.logger.log(msg);
                return msg;
            } else {
                throw new InternalServerErrorException(INTERNAL_ERROR);
            }
        }catch(err) {
            this.logger.error(err.message);
            throw new HttpException(INTERNAL_ERROR, HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
}
