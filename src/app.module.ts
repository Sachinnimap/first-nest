import {Module} from "@nestjs/common"
import {BookController} from "./book/book.controller"
import {UsersController} from "./user/user.controller"
import {UserStore} from "./user/user.store"
import {BookStore} from "./book/book.store"
import { LibraryController } from "./library/library.controller"
import { StudentController } from "./student/student.controller"
import { StudentService } from "./student/student.service"
import { PrincipleModule } from "./modules/principle/principle.module"

let isWokring: boolean = false;

function handleAsyncFunc(){
     
   return new Promise((resolve,reject)=>{
    setTimeout(()=>{
          resolve('connnection sucess!')
      },100)
})
}

@Module({
  imports : [PrincipleModule],
  controllers: [BookController,UsersController,LibraryController,StudentController],
  //Provide - UserStore - directly can be passed! 
  // or use this object provide - name & useClass - className which we going to use 
  // useValue instead of  useClass - we can use anything like variable or object or array!
  providers : [StudentService,
    
      //__________Factory-based Provider______________ used in libraryController
      {provide : "factoryFunc", useFactory:async (limitValue)=> {
        console.log("limit:-",limitValue)
       let value =  await  handleAsyncFunc()//waited 5 mins then gone to next!
       console.log("Value:-",value)
              if(isWokring)
                return "Yes! program is working !"
              else
              return 'Something went wrong!'
      },inject:['Limit']}, //{token:"Limit" ,optional :true} both method is true but optional without value code will work
      {provide :"Limit", useValue : 5}, //i passed this to factory!
    //_________Value-based Providers like - variable,object,array etc._______________ used in book controller
    {provide : "BookName", useValue:'myLatestBook'},
    {provide:"bookObject", useValue : {bookId:23,bookName:'firstBook',isAvailabe:true}},
    {provide:"bookArray", useValue : ['book1','book2','book3','book4','book5','book6','book7']},

    //  ___________Class-Based Providers__________
    {provide:UserStore, useClass:UserStore},
    BookStore
    // {provide : BookStore, useExisting : UserStore} //used existing useStore on bookStore so  UserStore will be called!
  ] //UserStore - directly can be passed! or use this object provide - name & useClass - className which we going to use
 })

export class AppModule{};