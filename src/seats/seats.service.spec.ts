import { HttpException, HttpService, InternalServerErrorException } from "@nestjs/common";
import { Test, TestingModule } from "@nestjs/testing";
import { plainToInstance } from "class-transformer";
import { SEAT_CREATED } from "../constants";
import { TicketDetailsRepository } from "../user-booking/ticket-details/ticket-details.repository";
import { SeatsDTO } from "./dto/seats.dto";
import { SeatsRepository } from "./seats.repository";
import { SeatsService } from "./seats.service";
 
const seat = [ 
    {        
        flight:2,
        seat_number:23,
        ticket_details:2,
        seat_status:'available'
      }
    ]
const ofImportDto = plainToInstance( SeatsDTO, seat)
 

describe('SeatsService', () => {
    let seatService : SeatsService; 
    let seatRepo, ticketRepo;
 
    beforeEach(async () => {

   
        let module: TestingModule = await Test.createTestingModule({
            providers: [
                
                {
                    provide:  TicketDetailsRepository,
                    useFactory: () => {
                        save:jest.fn()
                        findOne:jest.fn()
                    }
                }
                , SeatsService,   {
                provide: SeatsRepository, 
                useFactory: () => ({
                    save:jest.fn(),
                    // addSeats:jest.fn(),
                    findOne:jest.fn(),
                    
                })

            }]
        }).compile();

        seatService = module.get<SeatsService>(SeatsService);
        seatRepo = module.get<SeatsRepository>(SeatsRepository);
        ticketRepo =  module.get<TicketDetailsRepository>(TicketDetailsRepository);
         

    })
    it("should be defined", ()=> {
        expect(seatService).toBeDefined()
    })

    //add seats
    describe("When add seats", () => {
        describe('AND Success', () => {
            it('should return response', async () => {
                const message = "Seat created successfully with id:";
                const ticket = [
                    {
                      passanger_name: "sound",
                      passanger_age: 32,
                      gender: "male",
                      seat_number: 234
                    }
                  ]

                const userSpy = jest.spyOn(seatRepo, 'save').mockResolvedValue(ofImportDto[0]);
                let response = await   seatService.addSeats(ofImportDto[0]);
                expect(response).toEqual(message);
                expect(userSpy).toHaveBeenCalled();
                // expect(ticketSpy).toHaveBeenCalled()

              
            })
        })

        describe('AND failed', () => {
            it('should return error', async () => {
                const findOneSpy = jest.spyOn(seatRepo, 'save').mockRejectedValue(new Error('Not Booking'));  
                await expect(seatService.addSeats(ofImportDto[0])).rejects.toThrow(HttpException);
                expect(findOneSpy).toHaveBeenCalled()
            })
        })
    })
     

   
})

 
