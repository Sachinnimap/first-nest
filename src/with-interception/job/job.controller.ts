import { Controller, Get, Query, UseInterceptors } from "@nestjs/common";
import { RecentSearchService } from "./recentSearch.service";
import { SearchService } from "./search.service";
import { RecentSearchInterceptor } from "./recent-search.interceptor";


@Controller("jobs")
export class JobController{
 
        constructor (private recentSearchService: RecentSearchService, private searchService: SearchService ){}

    @Get("search")
    @UseInterceptors(RecentSearchInterceptor)
        searchJobs(@Query("query") query:string):any{
                console.log("Search_Query:-",query)
                return this.searchService.getSearchList()
        }

    @Get("recent-search")
            recentSearch(@Query("token") token : string){
                    console.log("Recent_search:-",token)
                    return this.recentSearchService.getRecentSearch();
            }

}
