import { Controller } from "@nestjs/common";
import { JobServices } from "./job.service";
import { cacheStoreService } from "../cache-store/cache-store.service";


@Controller()
export class JobController{

    constructor(private  cacheStoreService : cacheStoreService){
                console.log("Job controller -cache-Store - ", this.cacheStoreService)
    }
}