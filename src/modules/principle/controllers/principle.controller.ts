import { Controller } from "@nestjs/common";
import { principleService } from "../services/principle.service";


@Controller("/principle")
export class PrincipleController{

        constructor(private principleService:principleService){
            console.log("principle service colled -  principle.controller",this.principleService)
        }
}
