import { Module } from "@nestjs/common";
import { JobController } from "./job.controller";
import { JobServices } from "./job.service";
import { cacheStoreModule } from "../cache-store/cache-store.module";


@Module({
    imports : [cacheStoreModule],
    controllers :[JobController],
    providers : [JobServices]
})
export class  JobModule{}