import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from "@nestjs/common";
import { Request, Response } from "express";
import { writeFile } from "fs/promises";
import { join } from "path";



//All type of exeption error will be handled by this
@Catch(HttpException)
export class  HttpExceptionFilter implements ExceptionFilter{
        catch(exception: HttpException, host: ArgumentsHost) {

            const ctx = host.switchToHttp()
            const res = ctx.getResponse<Response>()
            const req = ctx.getRequest<Request>()
            const status = exception.getStatus()
            const message = exception.message;


            const body = {
                statusCode  : status,
                message : message,
                path : req.url
            }
                this.handleFileRead(body)
            res.status(status).json(body)

        }


      private async handleFileRead(data : Record<string,any>){
                const LOGS_DIR = join(__dirname, `${Date.now()}`)
                try{
                  await writeFile(LOGS_DIR, JSON.stringify(data))
                }catch(error){
                    return ;
                }


        }
}
