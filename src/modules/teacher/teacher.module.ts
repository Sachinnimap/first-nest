import { Module } from "@nestjs/common";
import {TeacherController} from './controllers/teacher.controller'
import {ActiveTeacherController} from "./controllers/activeTeacher.controller"
import {TeacherService} from  "./services/teacher.service"


@Module({
    imports:[], //import some modules which we can use in this module!
    controllers: [ActiveTeacherController,TeacherController],
    providers :[TeacherService],
    exports  :[TeacherService]  // so now teacher service available any one can use after import this module
     //export for other module can use this!
})

export class TeacherModule{

}