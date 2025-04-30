import { Controller, Get, OnModuleInit } from "@nestjs/common";



@Controller("/employee")
export  class EmployeeController implements OnModuleInit{

    onModuleInit() {
            console.log("Employee-module : - onModule init called!")
    }
    
    constructor(){
        console.log("Employee controller called!")
    }


    @Get()
    getAllEmployee(){
        console.log("All employee called!")
        return 'All  employee called!'
    }
} 

