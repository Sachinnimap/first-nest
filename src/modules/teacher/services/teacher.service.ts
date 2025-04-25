import { Injectable } from "@nestjs/common";


@Injectable()
export class TeacherService{
        
    getAllTeacher(){
        return 'get all teachers - teacher services!'
    }
}