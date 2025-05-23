import {Inject, MiddlewareConsumer, Module, NestModule} from "@nestjs/common"
import {BookController} from "./book/book.controller"
import {UsersController} from "./user/user.controller"
import {UserStore} from "./user/user.store"
import {BookStore} from "./book/book.store"
import { LibraryController } from "./library/library.controller"
import { StudentController } from "./student/student.controller"
import { StudentService } from "./student/student.service"
import { PrincipleModule } from "./modules/principle/principle.module"
import { cacheStoreModule } from "./modules/cache-store/cache-store.module"
import { EmployeeModule1 } from "./modules/employee/employee.module"
import { cacheStoreService } from "./modules/cache-store/cache-store.service"
import { AppService } from "./app.service"
import { StudentModule } from "./student/student.module"
import { libraryModule } from "./library/library.module"
import { AppExceptionFilter } from "./exceptions/app-exception.filter"
import { APP_FILTER, APP_INTERCEPTOR } from "@nestjs/core"
import { StaffModule } from "./application-lifecycle/staff/staff.module"
import { EmployeeModule } from "./application-lifecycle/employee/employee.module"
import { ElectronicModule } from "./with-middleware/electronics/electronic.module"
import { InterviewModule } from "./with-middleware/interview/interview.module"
import { AuthMiddleware } from "./with-middleware/middleware/authMiddleware"
// import { JobModule } from "./modules/job/job.module"
import { JobModule } from "./with-interception/job/job.module"
import { RecentSearchInterceptor } from "./with-interception/job/recent-search.interceptor"

let isWokring: boolean = false;

function handleAsyncFunc(){
     
   return new Promise((resolve,reject)=>{
    setTimeout(()=>{
          resolve('connnection sucess!')
      },100)
})
}

@Module({

  imports : [
    
    ElectronicModule, InterviewModule,  EmployeeModule, StaffModule, libraryModule ,StudentModule,EmployeeModule,JobModule, PrincipleModule,cacheStoreModule.register("First_Type")],
  controllers: [BookController,UsersController,StudentController], //LibraryController
  // Provide - UserStore - directly can be passed! 
  // or use this object provide - name & useClass - className which we going to use 
  // useValue instead of  useClass - we can use anything like variable or object or array!
  providers : [StudentService,AppService,
    

    //Interceptor provider  OR in main.ts
    // {provide : APP_INTERCEPTOR, useClass:RecentSearchInterceptor},

    //exception provider GLOABALLY for any type exception handle
    {provide:"APP_FILTER" , useClass : AppExceptionFilter}, //APP_FILTER from nest/CORE
      //__________Factory-based Provider______________ used in libraryController
    //   {provide : "factoryFunc", useFactory:async (limitValue)=> {
    //     console.log("limit:-",limitValue)
    //    let value =  await  handleAsyncFunc()//waited 5 mins then gone to next!
    //    console.log("Value:-",value)
    //           if(isWokring)
    //             return "Yes! program is working !"
    //           else
    //           return 'Something went wrong!'
    //   },inject:['Limit']}, //{token:"Limit" ,optional :true} both method is true but optional without value code will work
    //   {provide :"Limit", useValue : 5}, //i passed this to factory!
    // //_________Value-based Providers like - variable,object,array etc._______________ used in book controller
    {provide : "BookName", useValue:'myLatestBook'},
    {provide:"bookObject", useValue : {bookId:23,bookName:'firstBook',isAvailabe:true}},
    {provide:"bookArray", useValue : ['book1','book2','book3','book4','book5','book6','book7']},

    //  ___________Class-Based Providers__________
    {provide:UserStore, useClass:UserStore},
    // BookStore
    {provide : BookStore, useExisting : UserStore} //used existing useStore on bookStore so  UserStore will be called!
  ] //UserStore - directly can be passed! or use this object provide - name & useClass - className which we going to use
 })

export class AppModule implements NestModule{
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(AuthMiddleware).forRoutes("*")
                                    //.forRoutes({path:"*" , method:  RequestMethod.ALL})
    }
}