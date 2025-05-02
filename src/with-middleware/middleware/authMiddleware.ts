import { Injectable, NestMiddleware, UnauthorizedException } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";


 function varifyJwtToken (jwtToken:string){
            return true
}

@Injectable()
export class AuthMiddleware implements NestMiddleware{
    use(req: any, res: any, next: NextFunction) {

                const token = req.headers["authorization"]?.split(" ")
                console.log("Token:-", token)

            if(token && varifyJwtToken(token)){
                    next()
                    return
            }
            throw new UnauthorizedException;

    }
}



//for globally we can use this function same as class!
// export function  AuthMiddleware(req:Request, req:Response, next : NextFunction){
        
//         const token = req.headers.authorization?.split(" ")[1]

//         if(token && varifyJwtToken(token)){
//                 next()
//                 return 
//         }
//         throw new UnauthorizedException;
// }