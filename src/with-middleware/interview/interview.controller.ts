import { Controller, Get } from "@nestjs/common";


@Controller("/interviews")
export class  InterviewController{
    
    @Get()
    getAllInterviewsList(){
        console.log("Interview List called!")
        return 'Interview List'
    }   

}