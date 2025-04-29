import { Controller } from "@nestjs/common";
import { cacheStoreService } from "./cache-store.service";


@Controller()
export class CacheStoreController{

        constructor( private cacheStoreService : cacheStoreService ){
            console.log("Cache-contoller - " ,this.cacheStoreService)
        }

}