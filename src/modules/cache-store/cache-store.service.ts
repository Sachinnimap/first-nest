import { Inject, Injectable } from "@nestjs/common";


@Injectable()
export class  cacheStoreService{
        constructor(@Inject("STORE_OPTIONS") storeOption:string){
            console.log("Store-option :- ", storeOption)
        }
}