import { Test } from "@nestjs/testing";
import { plainToInstance } from "class-transformer";
import { SeatsDTO } from "./dto/seats.dto";
import { SeatsController } from "./seats.controller";
import { SeatsService } from "./seats.service";
  

const seat  = [{
  flight:2,
  seat_number:23,
  ticket_details:2
  }]
const ofImportDto = plainToInstance( SeatsDTO, seat)
describe('Given UserBooking', () => {
    let seatsController: SeatsController;
    let seatsService: SeatsService;
    
    beforeEach(async () =>{
         let module = await Test.createTestingModule({
             controllers :[SeatsController],
             providers:[ SeatsService, {
                 provide: SeatsService,
                 useFactory: () =>({
                    addSeats: jest.fn(),
                 })
             }]
         }).compile()

         seatsController = module.get<SeatsController>(SeatsController)
         seatsService = module.get<SeatsService>(SeatsService)
     })   
     it('should be defined', () => {
         expect(SeatsController).toBeDefined();
     }) 
    
    //add  seat
    describe('When add addSeats', ()=> {
        it('should return response', async ()=>{
            const message = 'Success';
            let addHotelsSpy = jest.spyOn(seatsService, 'addSeats').mockResolvedValue(message)
            let response = await seatsController.addSeats(ofImportDto[0]);
            expect(response).toEqual(message);
            expect(addHotelsSpy).toHaveBeenCalled();
            expect(addHotelsSpy).toHaveBeenCalledTimes(1)
        } )
    })
})

