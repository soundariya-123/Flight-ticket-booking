import { Users } from "../users/users.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Classes } from "./clasess-type.enum";
/**
 * Flights Entity 
 * @class Flights
 * @author Prakash Pawar
 */
@Entity()
export class Flights {

    /**
    * Id column created in flights table
    * @field id
    * @type number
    */
    @PrimaryGeneratedColumn()
    id: number;

    /**
     *FlightName column created in flights table
     *@field flightName
     *@type string
     */
    @Column()
    flightName: string;

    /**
     *Num Of Seats column created in flights table 
     *@field numOfSeats
     *@type number
     */
    @Column()
    numOfSeats: number;

    /**
     *Clasess column created in flights table
     *@field clasess
     *@type string
     */
    @Column({ type: 'enum', enum: Classes, default: Classes.First })
    clasess: string;

    /**
     *Source column created in flights table 
     *@field source
     *@type string 
     */
    @Column()
    source: string;

    /**
     * Destination column created in flights table
     * @field destination
     * @type string
     */
    @Column()
    destination: string;

    /**
     * DateOfFly column created in flights table
     * @field dateOfFly
     * @type string
     */
    @Column({type:'timestamp'})
    dateOfFly: Date;

    /**
     * TimeOfArrival column created in flights table
     * @field timeOfArrival
     * @type string
     */
    @Column()
    timeOfArrival: string;

    /**
     * TimeOfDeprature column created in flights table
     * @field timeOfDeprature
     * @type string
     */
    @Column({type: 'time'})
    timeOfDeprature: string;

    /**
     * FlightsDuration column created in flights table
     * @field flightsDuration
     * @type string
     */
    @Column()
    flightsDuration: string;

    /**
     * Ticket_price column created in flights table
     * @field ticket_price
     * @type number
     */
    @Column()
    ticket_price: number;

    /**
     * Users column created in flights table
     * @field users
     * @author Users
     */
     @ManyToOne(() => Users, users => users.flights)
     users: Users;
    

    // @OneToMany(()=>Tickets, tickets => tickets.flights)
    // tickets:Tickets;
    
    /**
     * Seats Column created in flights tables 
     * @field seats
     * @type Seats
     */
    // @OneToMany(()=>Seats, seats =>seats.flights)
    // seats : Seats;
}