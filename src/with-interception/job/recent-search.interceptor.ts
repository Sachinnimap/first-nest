import { CallHandler, ExecutionContext, Injectable, NestInterceptor, RequestTimeoutException, ServiceUnavailableException } from "@nestjs/common";
import { catchError, Observable, tap, throwError, timeout, TimeoutError } from "rxjs";


@Injectable()
export class RecentSearchInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {

        const ctx = context.switchToHttp();
        const requestData = ctx.getRequest();
        const queryData = requestData.query["query"];

        console.log("QueryData: -", queryData)

        timeout(5000) //if response taking more than 5 second then this will send timeout error!

        return next.handle().pipe(
        tap((values) => {                   //map or every we can use instead of TAP
            console.log("Interceptor called!")
            console.log("Values:-", values)
        }),

        catchError((err)=>{  //if any error we got in code anywhere then we can at end error can also be handled by this!
                console.log("Original Error",err) //below we changed error
            // return  throwError(()=>  new ServiceUnavailableException())

            if(err instanceof TimeoutError){ //for timeout error handle 
                return throwError(()=> new RequestTimeoutException())
            }
            return throwError(()=> new ServiceUnavailableException())
        }) 
    );
    }
}

