import { Module } from "@nestjs/common";
import { StudentController } from "./student.controller";
import { StudentService } from "./student.service";
import { PipeOptions } from "src/parseDatePipe";


@Module({
     controllers : [StudentController],
     providers : [StudentService,
        {provide : PipeOptions, useValue : {
            firstName :'somthing ',
            lastName : 'somthien2'
        }}
     ],
     exports : [StudentService]
})
export class StudentModule{}