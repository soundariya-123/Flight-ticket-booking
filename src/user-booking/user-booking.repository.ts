import { EntityRepository, Repository } from "typeorm";
import { StatusUserBooking } from "./status.enum";
import { UserBooking } from "./user-booking.entity";

/**
 * Repositories can be obtained from the database connection
 * @author soundariya
 */
@EntityRepository(UserBooking)
export class UserBookingRepository extends Repository<UserBooking>{

    /**
     * Update status of userbooking table
     * @param id userBookingId
     * @returns affected rows count
     */
    async updateStatus(id:number) {
        let response = await this.createQueryBuilder()
                    .update(UserBooking)
                    .set({ status: StatusUserBooking.Cancelled })
                    .where("id = :id", { id })
                    .printSql()
                    .execute();
                    console.log(response)
        return response;
    }
}