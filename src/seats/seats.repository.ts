import { Entity, EntityRepository, Repository } from "typeorm";
import { Seats } from "./seats.entity";

/**
 * Repositories can be obtained from the database connection
 * @author soundariya
 */
@EntityRepository(Seats)
export class SeatsRepository extends Repository<Seats>{}