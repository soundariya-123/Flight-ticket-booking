import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

/**
 * This is the base controller for every controller
 */
@Controller()
export class AppController {
  /**
   * Constructor for Inject appService
   * @param appService  appService
   */
  constructor(private readonly appService: AppService) {}

  /**
   * Pass Appservice controller to service
   * @returns returns services value
   */
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
