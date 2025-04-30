import { Injectable, OnModuleDestroy, OnModuleInit } from "@nestjs/common";


@Injectable()

export class  EmployeeService implements OnModuleInit,OnModuleDestroy{
    
    onModuleInit() {
        console.log("EmployeeService - onModuleInit called!")
    }

    //will called when we close app.close in main.ts file!
    onModuleDestroy() {
            console.log("EmployeeService - onModuleDestroy called!")
            }
            
}