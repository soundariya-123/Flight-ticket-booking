import { IsNotEmpty } from "class-validator";
import { Seats } from "../../seats/seats.entity";
import { UserBooking } from "../user-booking.entity";
import { Meal } from "./meal.enum";
import { StatusSeats } from "./statusseat.enum";

/**
 * DTO (Data Transfer Object) for transfer a data from HTTP
 * @author soundariya
 */
export class TicketDetailsDTO{
    /**
     * Primary key defines autoIncrement
     * @field id
     */
    id:number;

    /**
     * Insert passanger_name value in ticket-details table
     * @field passanger_name
     */
    @IsNotEmpty({message: 'passanger_name should not be empty'})
    passanger_name:string;

    /**
     * Insert passanger_age value in ticket-details table
     * @field passanger_age
     */
    @IsNotEmpty({message: 'passanger_name should not be empty'})
    passanger_age:number;

    /**
     * Insert gender value in ticket-details table
     * @field gender
     */
    @IsNotEmpty({message: 'gender should not be empty'})
    gender:string;

    /**
     * Insert meal_preference value in ticket-details table
     * @field meal_preference
     */
    @IsNotEmpty({message: 'meal_preference should not be empty'})
    meal_preference:Meal;

    /**
     * Insert seat_number value in ticket-details table
     * @field seat_number
     */
    @IsNotEmpty({message: 'seat should not be empty'})
    seat:Seats;

    /**
     * Insert status value in ticket-details table
     * @field status
     */
    status:StatusSeats;

    /**
     * Insert booking value in ticket-details table
     * @field booking
     */
    booking:UserBooking;
}