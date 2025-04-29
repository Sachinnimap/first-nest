import { DynamicModule, Module } from "@nestjs/common";
import { CacheStoreController } from "./cache-store.controller";
import { cacheStoreService } from "./cache-store.service";

@Module({
    // controllers: [CacheStoreController],
    providers:[cacheStoreService,
    {  provide: "STORE_OPTIONS", useValue:"DEFAULTTYPE"}
    ],
    exports : [cacheStoreService]
})
export class cacheStoreModule{  //normal module!

            //Register OR Dynamic module! 

            static register(storeValue:string): DynamicModule{

                return {
                    module : cacheStoreModule,
                     providers : [
                        cacheStoreService,
                        {provide:"STORE_OPTIONS", useValue :storeValue }
                     ],
                     exports :[cacheStoreService]
                }
            }

}