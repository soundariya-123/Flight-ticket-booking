import { IsNotEmpty } from "class-validator";
import { Users } from "../../users/users.entity";
import { StatusUserBooking } from "../status.enum";
import { TicketDetails } from "../ticket-details/ticket-details.entity";

/**
 * DTO (Data Transfer Object) for transfer a data from HTTP
 * @author soundariya
 */
export class UserbookingDTO{
     /**
     * Primary key defines autoIncrement
     * @field id
     */
      id:number;
   
      /**
       * Create status column in usersBooking table
       * @field status
       */
      status:StatusUserBooking;
      
      /**
       * Create rooms column in usersBooking table
       * @field rooms
       */
      @IsNotEmpty({message: 'num_of_seats should not be empty'})
      num_of_seats:number;
      
      /**
       * Create num_of_luggage column in usersBooking table
       * @field num_of_luggage
       */
      @IsNotEmpty({message: 'num_of_luggage should not be empty'})
      num_of_luggage:number;
  
      /**
       * Create rooms column in usersBooking table
       * @field rooms
       */
      @IsNotEmpty({message: 'source should not be empty'})
      source:string;
  
      /**
       * Create check_out column in usersBooking table
       * @field check_out
       */
      @IsNotEmpty({message: 'user_type should not be empty'})
      user_type:string;
  
      /**
       * Create check_in column in usersBooking table
       * @field check_in
       */
      @IsNotEmpty({message: 'departure_date should not be empty'})
      departure_date:Date;
  
      /**
       * Create price column in usersBooking table
       * @field  price
       */
      @IsNotEmpty({message: 'return_date should not be empty'})
      return_date:Date;
      
      // @ManyToOne(() => Flights, flight=> flight.userBooking)
      // flight: Flights; 
  
      /**
       * Create rooms column in usersBooking table
       * @field user
       */
      @IsNotEmpty({message: 'user should not be empty'})
      user:Users;

      /**
       * Create ticket_details column in usersBooking table
       * @field ticket_details
       */
      @IsNotEmpty({message: 'ticket_details should not be empty'})
      ticket_details: TicketDetails[];	
}