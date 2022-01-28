import { ArgumentsHost, Catch, ExceptionFilter } from "@nestjs/common";
import { Request, Response } from "express"; 

/**
 * this will give you complete control for your exception.
 */
@Catch()
export class ExceptionExceptionFilter implements ExceptionFilter{    
    /**
     * It is shows error
     * @param exception any
     * @param host ArgumentsHost
     * @returns statusCode, response, url and datetime
     */
    catch(exception: any, host: ArgumentsHost) {
        let ctx = host.switchToHttp();

        let request = ctx.getRequest<Request>();
         
        let response = ctx.getResponse<Response>();
 
        let statusCode = exception.getStatus();
        

        return response.status(statusCode).json({
            statusCode : statusCode,
            message : exception?.response,
            url: request.url,
            time: new Date().toISOString()
        });
    }
}