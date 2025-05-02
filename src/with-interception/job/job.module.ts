import { Module } from "@nestjs/common";
import { JobController } from "./job.controller";
import { SearchService } from "./search.service";
import { RecentSearchService } from "./recentSearch.service";

@Module({
    controllers : [JobController],
    providers : [SearchService,RecentSearchService]
})
export class JobModule{}