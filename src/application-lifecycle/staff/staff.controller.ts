import { Controller, Get, OnModuleInit } from "@nestjs/common";


@Controller('/staff')
export class StaffController implements OnModuleInit{

    onModuleInit() {
        console.log("Staff controller  - onModuleInit called!")
    }

    constructor (){
        console.log("Staff controller called!")
    }

    @Get()
    getAllStaff(){
        console.log("AllStaff called")
        return 'allStaff called!';
    }
}