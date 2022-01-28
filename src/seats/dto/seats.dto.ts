import { IsNotEmpty } from "class-validator";
import { TicketDetails } from "../../user-booking/ticket-details/ticket-details.entity";
import {  SeatsEnum } from "../seats.enum";

/**
 * DTO (Data Transfer Object) for transfer a data from HTTP
 * @author soundariya
 */
export class SeatsDTO{
    /**
     * Primary key defines autoIncrement
     * @field id
     */
    id:number;

    /**
     * Create flight column in seats table
     * @field flight
     */
    @IsNotEmpty({message: 'Flight should not be empty'})
    flight:number;	

    /**
     * Create seat_number column in seats table
     * @field seat_number
     */
    @IsNotEmpty({message: 'seat_number should not be empty'})
    seat_number:number;
    
    /**
     * Create ticket_details column in seats table
     * @field ticket_details
     */
    @IsNotEmpty({message: 'ticket_details should not be empty'})
    ticket_details:TicketDetails;
    
    /**
     * Create seat_Availability column in seats table
     * @field seat_Availability
     */
    seat_status: SeatsEnum;
}