import { ArgumentsHost, Catch, ExceptionFilter, HttpStatus } from "@nestjs/common";
import { IdException } from "./id-exception";
import { Response } from "express";


//Filter for IdException - after this file we can use our custom exception
//UseFilter method where we want to use
@Catch(IdException)
export class IdExceptionFilter implements ExceptionFilter{
        catch(exception: IdException, host: ArgumentsHost) {
            const body = {
                message: exception.message,
                error  : "Id is invalid! Retry with valid Id"
            }
                // sortWay
            // host.switchToHttp().getResponse<Response>().status(400).json(body)

            const hostData = host.switchToHttp()
            const hostResponseData = hostData.getResponse<Response>();
            hostResponseData.status(HttpStatus.BAD_REQUEST).json(body)
        }
}






//Manually created!
// import { ArgumentsHost, ExceptionFilter } from "@nestjs/common";
// import { IdException } from "./id-exception";
// import { Response } from "express";

// @Catch(IdException)
// export class IdExceptionFilter implements ExceptionFilter{
//     catch(exception: IdException, host: ArgumentsHost) {

//         const body = {
//             message  : exception.message,
//             errorMsg  : "invalid id provided!"
//         } 

//         const ctx = host.switchToHttp()
//        const hostresponse = ctx.getResponse<Response>()

//        hostresponse.status(400).json(body)

//     }
// }