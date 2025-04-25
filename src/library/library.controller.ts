import { Controller, Inject } from "@nestjs/common";


@Controller("/library")
export class LibraryController{
        constructor(@Inject("factoryFunc") private factoryFunc: any){
            console.log("Factory Hanlder - ", this.factoryFunc)
        }
}