import { Injectable ,Get, Scope} from "@nestjs/common";

// scope:Scope.DEFAULT  - means work as normal Inject
//scope:Scope.REQUEST  - create new instance for controller and himself for every request //GET , PUT, POST,DELETE--
// scope:Scope.TRANSIENT  - create new different-different instance for differet -different controllers those are using this INJECTABLE calss!
@Injectable()   //{scope:Scope.DEFAULT} we can alos pass this!
export class  BookStore{
    private store = new Map<number,string>()
        Books : string[] = ['fist_BOOK','seocnd_BOOK','third_BOOK','fourth_BOOK','fifth_BOOK','sixth_BOOK','seventh_BOOK','eighth']

    @Get()
    getBooks(){
            return this.Books;
    }

}