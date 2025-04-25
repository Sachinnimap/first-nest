import { Controller } from "@nestjs/common";
import { TeacherService } from "../services/teacher.service";



@Controller("/activeTeachers")
export class ActiveTeacherController{

    constructor(private teacherService:TeacherService){
        console.log(this.teacherService)
    }
            getAllActiveTeacher(){
                return 'all active teachers list!'
            }
}