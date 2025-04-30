import { Module } from "@nestjs/common";
import { LibraryController } from "./library.controller";
import { LibraryService } from "./library.service";


@Module({
    controllers : [LibraryController],
    providers : [LibraryService,
        {provide : "factoryFunc", useValue : "factory_func_value!"}
    ]
    
})

export class  libraryModule{}