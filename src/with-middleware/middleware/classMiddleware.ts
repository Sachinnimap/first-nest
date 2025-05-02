import { BadRequestException, NestMiddleware, Optional, Req } from "@nestjs/common";
import { Response ,Request, NextFunction} from "express";


export class UserAgentList{
    accepts?:string[]
}



export class ClassMiddlewareToCheckAgent implements NestMiddleware{

    //provide this UserAgentList to module where we using this middleware!
    constructor(@Optional() private acceptUserAgentList :UserAgentList){} 

    use(req: Request, res: Response, next: NextFunction) {

        console.log("ClassMiddleware called!")
    

        const userAgent = req.headers["user-agent"]
        if( !userAgent|| !this.isUserAgentAcceptable(userAgent))
            throw new BadRequestException("Access denied!")

        next();
    }


    private isUserAgentAcceptable(userAgent:string){
        const acceptUserAgent = this.acceptUserAgentList.accepts ?? []
        console.log("acceptUserAgent:-",this.acceptUserAgentList.accepts)

        if(!acceptUserAgent.length) return true

        return acceptUserAgent?.some((agent: string)=> {
          return  userAgent.toLowerCase().includes(agent.toLowerCase())
        }
        )
    }
}


//Small Middleware!

// @Injectable()
// export class ClassMiddlewareToCheckAgent implements NestMiddleware{
//        use(req:any,res:any,next:any){
//             console.log("Class Middleware is called!") 
//             //Logic
//             next()
//        }
// }
