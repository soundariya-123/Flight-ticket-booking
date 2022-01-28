import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ExceptionExceptionFilter } from './common/exception-filter/exception-filter.filter';
import { ResponseInterceptor } from './interceptor/response.interceptor';
/**
 * Main TS file
 * @author soundariya
 */
async function bootstrap() {
  const app = await NestFactory.create(AppModule);  
  /**
   * GlobalFilter for Find exception globally 
   */
   app.useGlobalFilters(new ExceptionExceptionFilter())         // Global scope

  /**
   * useGlobalInterceptors for response
   */
   app.useGlobalInterceptors(new ResponseInterceptor());

  
  /**
   * Swagger configuration  for api documentation
   */
  let swaggerConfig = new DocumentBuilder().
  setTitle('Flight-ticket-booking apis').
  setDescription('Flight-ticket-booking application apis documentation').
  setVersion('1.0').
  setContact('soundariya', '', 'soundariya@hcl.com').
  addBearerAuth().
  build();
  let document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('Flight-ticket-booking', app, document);


  await app.listen(3000);
}
bootstrap();
