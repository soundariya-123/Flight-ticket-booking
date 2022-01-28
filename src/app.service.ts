import { Injectable } from '@nestjs/common';

/**
 * This is the base service of every service
 * @returns Hello World
 */
@Injectable()
export class AppService {
  /**
   * Get request from Appcontroller and returns the value
   * @returns Hello World
   */
  getHello(): string {
    return 'Hello World!';
  }
}
