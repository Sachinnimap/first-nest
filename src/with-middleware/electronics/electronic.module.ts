import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { ElectronicController } from "./electronic.controller";
import { ElectronicService } from "./electronic.service";
import { handleMiddleware } from "../middleware/firstMiddleware";


@Module({
     controllers : [ElectronicController],
     providers : [ElectronicService]
})
export class ElectronicModule implements NestModule{
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(handleMiddleware).forRoutes("/electronics")
    }
}