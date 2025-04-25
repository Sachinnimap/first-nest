import {Module} from "@nestjs/common"
import {BookController} from "./book/book.controller"
import {UsersController} from "./user/user.controller"
import {UserStore} from "./user.store"
import {BookStore} from "./book.store"

@Module({
  controllers: [BookController,UsersController],
  //Provide - UserStore - directly can be passed! 
  // or use this object provide - name & useClass - className which we going to use 
  // useValue instead of  useClass - we can use anything like variable or object or array!
  providers : [
    {provide:UserStore, useClass:UserStore},
    // {provide:BookStore, useClass:BookStore}
    // {provide : BookStore, useExisting : UserStore} //used existing useStore on bookStore so  UserStore will be called!
  ] //UserStore - directly can be passed! or use this object provide - name & useClass - className which we going to use
 })

export class AppModule{};