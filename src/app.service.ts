import { Inject, Injectable } from "@nestjs/common";
import { cacheStoreService } from "src/modules/cache-store/cache-store.service";



@Injectable()
export class AppService{
            constructor(private cacheStoreService : cacheStoreService){
                console.log("Cache-store :-",this.cacheStoreService);
            }
}