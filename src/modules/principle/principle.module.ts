import { Module } from "@nestjs/common";
import { PrincipleController } from "./controllers/principle.controller";
import { principleService } from "./services/principle.service";
import { TeacherModule } from "../teacher/teacher.module";

@Module({
    imports : [TeacherModule], //now we can use teacher module's teacherService 
     controllers : [PrincipleController],
    providers : [principleService],
    exports : []
})

export class PrincipleModule{}