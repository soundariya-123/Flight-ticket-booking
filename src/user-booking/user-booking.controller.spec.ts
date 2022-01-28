import { Test } from "@nestjs/testing";
import { plainToInstance } from "class-transformer";
import { UserbookingDTO } from "./dto/user-booking.dto";
import { UserBookingController } from "./user-booking.controller";
import { UserBookingService } from "./user-booking.service";
  

const userBooking  = [{
    status: "available",
    num_of_seats: 34,
    num_of_luggage: 2,
    source:"tamil nadu",
    destination: "delhi",
    user_type:"student",
    departure_date:"2022-10-22",
    return_date:"2022-10-22",
    user:1
  }]
const ofImportDto = plainToInstance(UserbookingDTO, userBooking)
describe('Given UserBooking', () => {
    let userBookingController: UserBookingController;
    let userBookingService: UserBookingService;
    
    beforeEach(async () =>{
         let module = await Test.createTestingModule({
             controllers :[UserBookingController],
             providers:[ UserBookingService, {
                 provide: UserBookingService,
                 useFactory: () =>({
                    userBooking: jest.fn(),
                    bookingList: jest.fn(),
                    cancelBooking:jest.fn(),

                 })
             }]
         }).compile()

         userBookingController = module.get<UserBookingController>(UserBookingController)
         userBookingService = module.get<UserBookingService>(UserBookingService)
     })   
     it('should be defined', () => {
         expect(UserBookingController).toBeDefined();
     }) 
    
    //add user-booking
    describe('When add user-booking', ()=> {
        it('should return response', async ()=>{
            const message = 'Success';
            let addHotelsSpy = jest.spyOn(userBookingService, 'userBooking').mockResolvedValue(message)
            let response = await userBookingController.userBooking(ofImportDto[0]);
            expect(response).toEqual(message);
            expect(addHotelsSpy).toHaveBeenCalled();
            expect(addHotelsSpy).toHaveBeenCalledTimes(1)
        } )
    })

    //cancel booking
    describe('When DeleteHotels()', ()=> {
        it('should return response', async ()=>{
            let userBookingDetails = 'success';
            let getOneHotelsSpy = jest.spyOn(userBookingService, 'cancelBooking').mockResolvedValue(userBookingDetails)
            let response = await userBookingController.cancelBooking(1);
            expect(response).toEqual(userBookingDetails);
            expect(getOneHotelsSpy).toHaveBeenCalled()
            expect(getOneHotelsSpy).toHaveBeenCalledTimes(1)
        } )
    })
})

