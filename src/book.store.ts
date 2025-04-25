import { Injectable ,Get} from "@nestjs/common";

@Injectable()
export class  BookStore{
    private store = new Map<number,string>()
        Books : string[] = ['fist_BOOK','seocnd_BOOK','third_BOOK','fourth_BOOK','fifth_BOOK','sixth_BOOK','seventh_BOOK','eighth']

    @Get()
    getBooks(){
            return this.Books;
    }

}