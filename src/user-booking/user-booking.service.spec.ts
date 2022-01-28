import { HttpException, HttpService, InternalServerErrorException } from "@nestjs/common";
import { Test, TestingModule } from "@nestjs/testing";
import { plainToInstance } from "class-transformer";
import { UserbookingDTO } from "./dto/user-booking.dto";
import { TicketDetailsRepository } from "./ticket-details/ticket-details.repository";
import { UserBookingRepository } from "./user-booking.repository";
import { UserBookingService } from "./user-booking.service";

const userBooking = [{
    status: "available",
    num_of_seats: 34,
    num_of_luggage: 2,
    source: "tamil nadu",
    destination: "delhi",
    user_type: "student",
    departure_date: "2022-10-22",
    return_date: "2022-10-22",
    user: 1,
    ticket_details: [
      {
        passanger_name: "sound",
        passanger_age: 32,
        gender: "male",
        seat_number: 234
      }
    ]
    
}]

const ticket = [ 
    {
        passanger_name: "sound",
        passanger_age: 32,
        gender: "male",
        seat_number: 234
      }
    ]
const ofImportDto = plainToInstance( UserbookingDTO, userBooking)
 

describe('UserBookingService', () => {
    let userBookingService : UserBookingService; 
    let userBookingRepo, ticketRepo;
 
    beforeEach(async () => {

   
        let module: TestingModule = await Test.createTestingModule({
            providers: [
                {
                    provide:  TicketDetailsRepository,
                    useFactory: () => {
                        save:jest.fn()
                    }
                }
                , UserBookingService,   {
                provide: UserBookingRepository, 
                useFactory: () => ({
                    save:jest.fn(),
                    userBooking:jest.fn(),
                    findOne:jest.fn(),
                    updateStatus: jest.fn()
                })

            }]
        }).compile();

        userBookingService = module.get<UserBookingService>(UserBookingService);
        userBookingRepo = module.get<UserBookingRepository>(UserBookingRepository);
        ticketRepo =  module.get<TicketDetailsRepository>(TicketDetailsRepository);
         

    })
    it("should be defined", ()=> {
        expect(userBookingService).toBeDefined()
    })

    //add booking
    // describe("When add booking", () => {
    //     describe('AND Success', () => {
    //         it('should return response', async () => {
    //             const message = 'Booking added successfully';
    //             // const ticketSpy = jest.spyOn(ticketRepo, 'save').mockResolvedValue(ticket);

    //             const userSpy = jest.spyOn(userBookingRepo, 'save').mockResolvedValue(ofImportDto[0]);
    //             let response = await  userBookingService.userBooking(ofImportDto[0]);
    //             expect(response).toEqual(message);
    //             expect(userSpy).toHaveBeenCalled();
    //             // expect(ticketSpy).toHaveBeenCalled()

              
    //         })
    //     })

    //     describe('AND failed', () => {
    //         it('should return error', async () => {
    //             const findOneSpy = jest.spyOn(userBookingRepo, 'save').mockRejectedValue(new Error('Not Booking'));  
    //             await expect(userBookingService.userBooking(ofImportDto[0])).rejects.toThrow(HttpException);
    //             expect(findOneSpy).toHaveBeenCalled()
    //         })
    //     })
    // })
    //cancel booking
    describe("When cancel booking", () => {
        // describe('AND Success', () => {
        //     it('should return response', async () => {
        //         const message = 'Room cancelled successfully';
        //         const findOneSpy = jest.spyOn(userBookingRepo, 'updateStatus').mockResolvedValue(message);
        //         let response = await  userBookingService.cancelBooking(1);

        //         expect(response).toEqual(message);
        //         expect(findOneSpy).toHaveBeenCalled()
        //     })
        // })

        describe('AND failed', () => {
            it('should return error', async () => {
                const findOneSpy = jest.spyOn(userBookingRepo, 'updateStatus').mockRejectedValue( Error('User Booking not cancelled'));  

                await expect(userBookingService.cancelBooking(1)).rejects.toThrow(HttpException);
                expect(findOneSpy).toHaveBeenCalled()
                expect(findOneSpy).toHaveBeenCalledTimes(1)
            })
        })
    })

   
})

 
