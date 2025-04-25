import { Body, Controller, Delete, Get, Param, Post, Put, Req } from "@nestjs/common";
import { StudentService } from "./student.service";
import { Student } from "./studentDTO"

@Controller("/student")
export class StudentController {

    constructor(private studentService: StudentService) { }

    @Get()
    findAllStudents() {
        const response = this.studentService.getAllStudents()
        if (response)
            return { success: true, message: "students found!", data: response }
        else
            return { success: false, message: "student not found!", data: [] }
    }

    @Get(":id")
    findtStudentById(@Param("id") id: number) {
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

    @Put(":id")
    updateStudent(@Param("id") id: number, @Body() studentLatestData: Student) {

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