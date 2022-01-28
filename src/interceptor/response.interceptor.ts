import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { map, Observable } from "rxjs";

/**
 * It will execute request and response both server and client side
 * @author soundariya
 * @class ResponseInterceptor
 */
 @Injectable()
 export class ResponseInterceptor implements NestInterceptor{
    /**
     * An interceptor is a class annotated with the @Injectable() decorator
     * @param context ExecutionContext
     * @param next CallHandler
     * @returns returns data and statusCode
     */
     intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
        let statusCode = context.switchToHttp().getResponse().statusCode; 
             let returnValue = next.handle().pipe(map(data => {
                 return {
                     data,
                     statusCode,
                 }
             }))
             return returnValue;
     }
     
}
  