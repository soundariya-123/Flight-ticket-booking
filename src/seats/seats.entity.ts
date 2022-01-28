import { TicketDetails } from "../user-booking/ticket-details/ticket-details.entity";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { SeatsEnum } from "./seats.enum";

/**
 * UserBooking entity for create table columns
 * @author soundariya
 */
@Entity()
export class Seats{

    /**
     * Primary key defines autoIncrement
     * @field id
     */
    @PrimaryGeneratedColumn()
    id:number;

    /**
     * Create flight column in seats table
     * @field flight
     */
    @Column()
    flight:number;	

    /**
     * Create seat_number column in seats table
     * @field seat_number
     */
    @Column()
    seat_number:number;

    /**
     * Create ticket_details column in seats table
     * @field ticket_details
     */
    @OneToOne(() => TicketDetails, ticket_details => ticket_details.seat)
    ticket_details:TicketDetails;

    /**
     * Create seat_Availability column in seats table
     * @field seat_Availability
     */
    @Column({type: 'enum', enum: SeatsEnum, default: SeatsEnum.Available})
    seat_status: SeatsEnum;
}