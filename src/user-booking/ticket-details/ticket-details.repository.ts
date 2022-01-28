import { EntityRepository, Repository } from "typeorm";
import { TicketDetails } from "./ticket-details.entity";

/**
 * Repositories can be obtained from the database connection
 * @author soundariya
 */
@EntityRepository(TicketDetails)
export class TicketDetailsRepository extends Repository<TicketDetails>{}