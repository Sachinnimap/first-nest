import { Injectable } from "@nestjs/common";
import { Student } from "./studentDTO";



// let studentList  = new Map<string,Student>();

@Injectable()
export class StudentService{
    private studentList = new Map<number,Student>() 


    getAllStudents(){
        console.log("Get all Student called - service!")
        const result =   Array.from(this.studentList).map(([_,user])=> user)
        console.log("Result :-", result)
        return result;
    }

    getStudent(id:number){
        console.log("Get a Student called success!",id)
        let checkStudent =  this.studentList.get(+id) //need to pass id type Number, + will convert to number!
        console.log("CheckStudent:-",checkStudent)
        return checkStudent
    }

    createStudent(studentData:Student){
        console.log("Post Student called!")
        console.log("studentData req.body in service",studentData)
            let result =  this.studentList.set(studentData.studentId,studentData)
                console.log("Response", result);
                return result.get(studentData.studentId);
    }

    updateStudent(id:number,studentLatestData:Student){
        console.log("Update Student called!",id)
         this.studentList.set(+id,studentLatestData)
         return this.studentList.get(+id)
    }

    deleteStudent(id:number){
        console.log("Delete Student called success!")
         let response = this.studentList.delete(+id)
         return response;
    }
}