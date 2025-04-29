import { Body, Controller, DefaultValuePipe, Delete, Get, Param, ParseArrayPipe, ParseBoolPipe, ParseFloatPipe, ParseIntPipe, ParseUUIDPipe, Post, Put, Req, UsePipes } from "@nestjs/common";
import { StudentService } from "./student.service";
import { Student } from "./studentDTO"
import {ParseDatePipe, PipeOptions} from  '../parseDatePipe'

@Controller("/student")
export class StudentController {

    constructor(private studentService: StudentService) { }

@Get('/interview/:id')
getStudentsInterviewData(@Param("id",ParseDatePipe) studentId:string){
    console.log("Student_id:-",typeof studentId, studentId)
    return "Student's interview data! accessed "
}


    @Get()
    findAllStudents(@Param("userData",new ParseArrayPipe({items:Number,separator:","})) userData :number[]) {
        //  requerst /student/1,4,6  ----// this will convert in array
        console.log("UserData", userData) // [1,4,6] //above pipe will convert or check value only be type and in array
        const response = this.studentService.getAllStudents()
        if (response)
            return { success: true, message: "students found!", data: response }
        else
            return { success: false, message: "student not found!", data: [] }
    }

    //ParseIntPipe will try to convert string to number if not contverted will throw error
    //ParseBoolPipe - for convert string to boolean
    //ParseFloatPipe - string to decimal float number '10.04' - 10.04
    //UserPri
    @Get(":id")
    // @UsePipes(ParseIntPipe) - common Pipe - every argument will going to parse in Number - if all argument values are number then we can go with this method
    findtStudentById(@Param("id",new DefaultValuePipe(3),ParseIntPipe) id: number) {  //default value will assign to 3 if value not provided then try to parse in number
        const response: Student | null | undefined = this.studentService.getStudent(id)
        if (response)
            return { success: true, message: "Student found success!", data: response }
        else
            return { success: false, message: "Student not found!", data: null }
    }

    @Post()
    addStudent(@Body() studentData: Student) {
        console.log("AddStudent controller called")
        const response: Student | null | undefined = this.studentService.createStudent(studentData);
        if (response)
            return { success: true, message: "Student added success!", data: response }
        else
            return { success: false, message: "Student not added!", data: null }
    }

    //ParseUUIDPipe - check UUID if given data is UUID then goes to next else throw ERROR

    // parseEnumPipe - ENUM - only take given enum value if user give anything else this will throw error!

    @Put(":id")
    updateStudent(@Param("id",ParseUUIDPipe) id: number, @Body() studentLatestData: Student) {

        const response: Student | undefined | null = this.studentService.updateStudent(id, studentLatestData);
        if (response)
            return { success: true, message: "student update success!", data: response }
        else
            return { success: false, message: "student not updated!", data: null }
    }

    @Delete(":id")
    deleteStudent(@Param("id") id: number) {
        const response :boolean = this.studentService.deleteStudent(id)
            console.log("response",response)
        if (response)
            return { success: true, message: "student deleted success!" }
            else
        return { success: false, messgage: "student not found!" }

    }

}