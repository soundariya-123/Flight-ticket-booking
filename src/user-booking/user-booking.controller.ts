import { Body, Controller, Param, Patch, Post } from '@nestjs/common';
import { UserbookingDTO } from './dto/user-booking.dto';
import { UserBookingService } from './user-booking.service';

/**
 * UserBookingController -- Controllers are responsible for handling incoming requests and returning responses.
 * @author soundariya
 */
@Controller('user-booking')
export class UserBookingController {

    /**
     * @constructor Constructor for Inject Usersservice
     * @param userBookingService  UserBookingService
     */
    constructor(private  userBookingService: UserBookingService) {}

    /**
     * Create bookingSeats
     * @param userBooking UserBookingDTO
     * @returns success message
     */
    @Post()
    userBooking(@Body() userBookingDTO: UserbookingDTO): Promise<string>{
        return this.userBookingService.userBooking(userBookingDTO);
    }

    /**
     * Cancel booking
     * @param id id
     * @returns returns success message
     */
    @Patch(':id')
    cancelBooking(@Param('id') id:number): Promise<string>{
        return this.userBookingService.cancelBooking(id);
    }
}
