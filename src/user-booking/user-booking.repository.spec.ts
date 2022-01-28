import { Test } from "@nestjs/testing"
import { plainToInstance } from "class-transformer";
import { UserbookingDTO } from "./dto/user-booking.dto";
import { UserBookingRepository } from "./user-booking.repository";
 

const userBooking = [
   {
        generatedMaps: [],
        raw: [],
        affected: 1 
    }]
const ofImportDto = plainToInstance( UserbookingDTO, userBooking)
describe('User-Booking Repository', () =>{

    let userBookingRepo: UserBookingRepository
    beforeEach(async ()=> {
        let module = await Test.createTestingModule({
            providers:[UserBookingRepository]
        }).compile();
        userBookingRepo = module.get<UserBookingRepository>(UserBookingRepository)
    })
    it('should be defined', () => {
        expect(userBookingRepo).toBeDefined()
    })

    // describe('When update status', () => {
    //     it('should be correct response', async () => {
    //         jest.spyOn(userBookingRepo, 'update').mockResolvedValue(UpdateResult[0])
    //         let response = await userBookingRepo.updateStatus(1)
    //         expect(response).toEqual(UpdateResult[0])
    //     })
    // })
})
 
