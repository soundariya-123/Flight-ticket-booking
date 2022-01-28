import { Seats } from "../../seats/seats.entity";
import { Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserBooking } from "../user-booking.entity";
import { Meal } from "./meal.enum";
import { StatusSeats } from "./statusseat.enum";

/**
 * TicketDetails entity for create table columns
 * @author soundariya
 */
@Entity()
export class TicketDetails{

    /**
     * Primary key defines autoIncrement
     * @field id
     */
    @PrimaryGeneratedColumn()
    id:number;

    /**
     * Create passanger_name column in ticket-details table
     * @field passanger_name
     */
    @Column()
    passanger_name:string;

    /**
     * Create passanger_age column in ticket-details table
     * @field passanger_age
     */
    @Column()
    passanger_age:string;

    /**
     * Create gender column in ticket-details table
     * @field gender
     */
    @Column()
    gender:string;

    /**
     * Create meal_preference column in ticket-details table
     * @field meal_preference
     */
    @Column({type: 'enum', enum:Meal, default: Meal.Yes })
    meal_preference:Meal;

    /**
     * Create seat_number column in ticket-details table
     * @field seat_number
     */
    @OneToOne(() =>Seats, seat => seat.ticket_details)
    seat:Seats;

    /**
     * Create status column in ticket-details table
     * @field status
     */
    @Column({type: 'enum', enum:StatusSeats, default: StatusSeats.Booked })
    status:StatusSeats;

    /**
     * Create booking column in ticket-details table
     * @field booking
     */
    @ManyToOne(() => UserBooking, userBooking=> userBooking.ticket_details)
    booking:UserBooking;
}