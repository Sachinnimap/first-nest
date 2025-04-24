import { Injectable ,Get} from "@nestjs/common";

@Injectable()
export class  UserStore{
    private store = new Map<number,string>()
        users : string[] = ['fist','seocnd','third','fourth','fifth','sixth','seventh','eighth']

    @Get()
    getUsers(){
            return this.users;
    }

}