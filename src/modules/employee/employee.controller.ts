import { Controller, Inject } from "@nestjs/common";
import { EmployeeService } from "./employee.service";
import { cacheStoreService } from "../cache-store/cache-store.service";


@Controller()
export class  EmployeeController{
            constructor (private cacheStoreService:cacheStoreService){
                // console.log("Employee_service:-",employeeService)
                console.log("Cache-store :- ", this.cacheStoreService)
            }
}