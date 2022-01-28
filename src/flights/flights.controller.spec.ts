import { Test, TestingModule } from '@nestjs/testing';
import { plainToInstance } from 'class-transformer';
import { FlightsDTO } from './dto/flights.dto';
import { FlightsController } from './flights.controller';
import { FlightsService } from './flights.service';
const flights  = {
    flightName:"kk30",
    numOfSeats:150,
    source:"Bangalore",
    destination:"chennai",
    dateOfFly:"2022-02-5 10:32:43",
    timeOfArrival:"10:32:43",
    timeOfDeprature:"13:32:43",
    flightsDuration:"3:30 Hours",
    ticket_price:8000,
    users:1
}
const ofImportDto = plainToInstance(FlightsDTO, flights)
describe('Given Flights', () => {
  let flightscontroller: FlightsController;
  let flightService:FlightsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FlightsController],
      providers:[FlightsService, {
        provide: FlightsService,
        useFactory:() =>({
          addFlights:jest.fn(),
          listOfFligts:jest.fn(),
          deleteFlights:jest.fn()
        })

      }]
    }).compile();

    flightscontroller = module.get<FlightsController>(FlightsController);
    flightService = module.get<FlightsService>(FlightsService);
  });

  it('should be defined', () => {
    expect(flightscontroller).toBeDefined();
  });
  //addFlights
  describe('When addFlights', ()=>{
    it('should return response', async ()=>{
        const message = 'Success';
        let addFlightsSpy = jest.spyOn(flightService, 'addFlights').mockResolvedValue(ofImportDto)
            let response = await flightscontroller.addFlights(ofImportDto);
            expect(response).toEqual(message)
            expect(addFlightsSpy).toHaveBeenCalled();
            expect(addFlightsSpy).toHaveBeenCalledTimes(1)
    })
  })
  //list of flights 
  describe('When Get listOfFlights', ()=> {
    it('should return response', async ()=>{   
      
        let listOfFlightsSpy = jest.spyOn(flightService, 'listOfFligts').mockResolvedValue(ofImportDto)
        let response = await flightscontroller.listOfFligts();
        expect(response).toEqual(ofImportDto)
        expect(listOfFlightsSpy).toHaveBeenCalled()
        expect(listOfFlightsSpy).toHaveBeenCalledTimes(1)
    } )
})
});
