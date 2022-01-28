import { IsEnum, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Users } from "src/users/users.entity";
/**
 * Flight DTO File
 * @class FlightsDTO
 * @author Prakash Pawar
 */
export class FlightsDTO{

    /**
     * Flight Id 
     * @filed Id 
     * @Type number 
     */
    id:number;
    
    /**
     * Flight Name 
     * @filed flightName
     * @type string
     */
    @IsNotEmpty()
    @IsString()
    flightName:string;

    /**
     * Number of seats 
     * @field numOfSeats 
     * @type number
     */
    @IsNotEmpty()
    @IsNumber()
    numOfSeats:number;

    /**
     * classes Type 
     * @type string
     * @field clasess
     */
    clasess:string;

    /**
     * Source 
     * @type source
     * @field string 
     */
    @IsString()
    @IsNotEmpty()
    source:string;
    
    /**
     * @type destination
     * @filed source 
     */
    @IsNotEmpty()
    @IsString()
    destination:string;
    
    /**
     * @type string
     * @field dateOfFlay
     */
    @IsNotEmpty()
    dateOfFly:Date;
    
    /**
     * @field timeOfArrival
     * @type string
     */
    @IsNotEmpty()
    timeOfArrival:string;

    /**
     * @field timeOfDeprature 
     * @type string 
     */
    @IsNotEmpty()
    timeOfDeprature:string;
    
    /**
     * @field flightsDuration 
     * @Type string 
     */
    @IsNotEmpty()
    flightsDuration: string;

    /**
     * @field ticket_price
     * @type number
     */
    @IsNotEmpty()
    @IsNumber()
    ticket_price:number;
    /**
     * @field users
     * @type Users
     */
    users:Users;
}