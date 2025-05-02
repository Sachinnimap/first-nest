import { Injectable } from "@nestjs/common";
import { Search, searchList } from "./data";


@Injectable()
export class RecentSearchService{
            searchList :Search[]  = searchList;
   
        getRecentSearch(){
           return this.searchList;
    }

}