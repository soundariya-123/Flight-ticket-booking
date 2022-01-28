import { StreamState } from "http2";
import { Users } from "src/users/users.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Classes } from "./clasess-type.enum";

@Entity()
export class Flights{
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    flightName:string;
    @Column()
    numOfSeats:number;
    @Column({type: 'enum', enum:Classes, default :Classes.First})
    clasess:string;
    @Column()
    source:string;
    @Column()
    destination:string;
    @Column()
    dateOfFly:string;
    @Column()
    timeOfArrival:string;
    @Column()
    timeOfDeprature:string;
    @Column()
    flightsDuration: string;
    @Column()
    ticket_price:number;

    @ManyToOne(()=>Users, users => users.flights)
    users:Users;

    // @OneToMany(()=>Tickets, tickets => tickets.flights)
    // tickets:Tickets;

    // @OneToMany(()=>Seats, seats =>seats.flights)
    // seats : Seats;
}