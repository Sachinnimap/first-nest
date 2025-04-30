import { Controller, Get, Req, Res } from "@nestjs/common";
import { Request, Response } from "express";


@Controller('/electronics')
export class ElectronicController{
    
    @Get()
    getAllElectronics(@Req() req:Request, @Res() res:Response){
            console.log("GetElectronics controller called!")

            res.status(201).json("GetElectronics controller called success! ")
    }
}