import { Users } from "../users/users.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { StatusUserBooking } from "./status.enum";
import { TicketDetails } from "./ticket-details/ticket-details.entity";

/**
 * UserBooking entity for create table columns
 * @author soundariya
 */
@Entity()
export class UserBooking{

    /**
     * Primary key defines autoIncrement
     * @field id
     */
    @PrimaryGeneratedColumn()
    id:number;
    
    
    /**
     * Create passanger_details column in usersBooking table
     * @field passanger_details
     */
    @OneToMany(() =>  TicketDetails, ticket_details => ticket_details.booking)
    ticket_details: TicketDetails[];	

    /**
     * Create status column in usersBooking table
     * @field status
     */
    @Column({type: 'enum', enum: StatusUserBooking, default: StatusUserBooking.Booked})
    status:StatusUserBooking;
    
    /**
     * Create num_of_seats column in usersBooking table
     * @field num_of_seats
     */
    @Column()
    num_of_seats:number;

    /**
     * Create num_of_luggage column in usersBooking table
     * @field num_of_luggage
     */
    @Column()
    num_of_luggage:number;

    /**
     * Create source column in usersBooking table
     * @field source
     */
    @Column()
    source:string;

    /**
     * Create user_type column in usersBooking table
     * @field user_type
     */
    @Column()
    user_type:string;

    /**
     * Create departure_date column in usersBooking table
     * @field departure_date
     */
    @Column({type: 'timestamp'})
    departure_date:Date;

    /**
     * Create return_date column in usersBooking table
     * @field  return_date
     */
    @Column({type: 'timestamp'})
    return_date:Date;
    
    // @ManyToOne(() => Flights, flight=> flight.userBooking)
    // flight: Flights; 

    /**
     * Create rooms column in usersBooking table
     * @field user
     */
    @ManyToOne(() => Users, user => user.userBooking)
    user:Users;
}