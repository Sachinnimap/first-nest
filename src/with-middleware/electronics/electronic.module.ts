import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { ElectronicController } from "./electronic.controller";
import { ElectronicService } from "./electronic.service";
import { handleMiddleware } from "../middleware/firstMiddleware";
import { ClassMiddlewareToCheckAgent, UserAgentList } from "../middleware/classMiddleware";
import { AuthMiddleware } from "../middleware/authMiddleware";


@Module({
     controllers : [ElectronicController],
     providers : [ElectronicService,
            {provide : UserAgentList , useValue:{accepts : ['chrome','firefox','postman']}}
     ]
})
export class ElectronicModule implements NestModule{
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(AuthMiddleware, handleMiddleware,ClassMiddlewareToCheckAgent).forRoutes("electronics",'interviews')
        //.forRoutes("electronics", InterviewController, {path:"jobs/latest" , method:RequestMethod.POST}) also for specific route method all three are different types
        //.exclude("job/new") method so this route will not be going to call!
    }
}