import { Injectable } from "@nestjs/common";
import { Search, searchList } from "./data";


@Injectable()
export class SearchService{
        searchList : Search[] = searchList;

    getSearchList(){
        return this.searchList;
    }
}