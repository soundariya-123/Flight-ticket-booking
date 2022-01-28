import { HttpException, HttpStatus, Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { UserbookingDTO } from './dto/user-booking.dto';
import { StatusUserBooking } from './status.enum';
import { TicketDetailsRepository } from './ticket-details/ticket-details.repository';
import { UserBookingRepository } from './user-booking.repository';

/**
 * UserBookingService -- to write a business logic
 * @author soundariya
 */
@Injectable()
export class UserBookingService {
  
    /**
     * Logger Instance
     */
    logger = new Logger(UserBookingService.name)

    /**
     * dependency injection 
     * @param userBookingRepo UserBookingRepository
     */
    constructor(private userBookingRepo: UserBookingRepository,
                private ticketDetailsRepo: TicketDetailsRepository) {}
    
    /**
     * Add booking for the passangers
     * @param userBooking UserBookingDTO
     * @returns success message
     */
    async userBooking(userBookingDTO: UserbookingDTO): Promise<string> {
        try {
            userBookingDTO.status =  StatusUserBooking.Booked;
            let ticket = await this.ticketDetailsRepo.save(userBookingDTO.ticket_details);
             
            let response = await  this.userBookingRepo.save({...userBookingDTO,  ticket_details: ticket})
            if(response) {
                const msg:string = 'Booking added successfully';
                this.logger.log(msg)
                return msg
            } else {
                throw new InternalServerErrorException('Not Booking')
            }
        } catch(err) {
            this.logger.error(err.message)
            throw new  HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
        }
      
        
    }

    /**
     * Cancel the booking
     * @param id bookingId
     * @returns success message
     */
    async cancelBooking(id: number): Promise<string> {
        try {
            let response = await  this.userBookingRepo.updateStatus(id);
            if(response.affected > 0) {
                const msg:string = 'Room cancelled successfully';
                this.logger.log(msg)
                return msg
            } else {
                throw new InternalServerErrorException('Hotel not added')
            }
        } catch(err) {
            this.logger.error(err.message)
            throw new  HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
        }
       
    }
}
