import { BeforeApplicationShutdown, Module, OnApplicationBootstrap, OnApplicationShutdown } from "@nestjs/common";
import { EmployeeController } from "./employee.controller";
import { EmployeeService } from "./employee.service";


@Module({
controllers : [EmployeeController],
providers : [EmployeeService]
})

export class  EmployeeModule implements OnApplicationBootstrap,BeforeApplicationShutdown,OnApplicationShutdown{

    onApplicationBootstrap() {
        console.log("OnApplication Bootstrap called!")
    }

    beforeApplicationShutdown(signal?: string) {
        console.log("BeforeApplicationShutdown",signal)
    }

    onApplicationShutdown(signal?: string) {
        console.log("OnApplicationShutdown",signal)
    }
}