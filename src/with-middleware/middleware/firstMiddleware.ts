import { Next, Req, Res } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";


export function handleMiddleware(req : Request,res:Response ,next:NextFunction ){
        console.log("Handle Middleware called!")
        next()
}
