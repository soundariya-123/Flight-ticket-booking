import { EntityRepository, Like, Repository } from "typeorm";
import { Flights } from "./flights.entity";
import { FlightsDTO } from './dto/flights.dto';
@EntityRepository(Flights)
export class FlightsRepository extends Repository<Flights>{

    // searchFlight(source:string): Promise<FlightsDTO>{
    //     return this.find({where:{source:Like(`${source}%`)}})

    // }

}