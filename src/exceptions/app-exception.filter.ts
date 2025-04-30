import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from "@nestjs/common";
import { HttpAdapterHost } from "@nestjs/core";


//GLOBALY we can use it so i have used inside app.module file in provider! 
@Catch()
export class AppExceptionFilter implements ExceptionFilter{

    constructor(private httpAdapterHost : HttpAdapterHost){}

    catch(exception: unknown, host: ArgumentsHost) {
            const ctx = host.switchToHttp();
            let status = HttpStatus.INTERNAL_SERVER_ERROR
            let message = 'Internal server error!'

            if(exception instanceof HttpException){
                status = exception.getStatus(),
                message  = exception.message
            }

            const {httpAdapter}  = this.httpAdapterHost;

            const body = {
                status : status,
                message :message,
                timestamp  :  new Date().toISOString()
            }

            httpAdapter.reply(ctx.getResponse(),body,status)

    }
}