import { Module } from "@nestjs/common";
import { cacheStoreModule } from "../cache-store/cache-store.module";
import { EmployeeService } from "./employee.service";
import { EmployeeController } from "./employee.controller";
import { cacheStoreService } from "../cache-store/cache-store.service";


@Module({
     imports : [cacheStoreModule],
     controllers : [EmployeeController],
     providers  :[EmployeeService],
})

export class EmployeeModule{}