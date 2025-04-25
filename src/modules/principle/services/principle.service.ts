import { Injectable } from "@nestjs/common";


@Injectable()
export class principleService{

    getAllPriciples(){
        return "all principle data found!"
    }
}