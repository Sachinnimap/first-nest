import { Controller ,Get, Headers, Param, Query,Post, Body, HttpCode, Put, Inject} from "@nestjs/common";
import {userList} from "../components/data"
import {User, UserParams,UserQuery} from  "../components/format"
import {UserStore} from "../user.store"

@Controller("/users")
export class UsersController {

        constructor(@Inject(UserStore) store:any){
            console.log("UserController:-", store)
        }
    @Get("/activeUsers/:id")
    getActiveUsers(@Param("id") id:number, @Query() userQuery:UserQuery ){ //only id will be accessible as number 
            console.log("ID",id)
            console.log("Query:-",userQuery)
        return userList.filter(user => user.isActive == true)
    }

    //Method - Using RECORD can access values!
    // HEADER
    @Get("/inActiveUser/:id")
    getInActiveUsers(@Param() userParams:Record<string,any> , @Query() usersQuery:Record<string,any>, @Headers("user-agent") allHeaders:Record<string,any>){
                console.log("User-Params: ", userParams)
                console.log("User-Query: " ,usersQuery)
                console.log("Headers:-", allHeaders)
                return {
                    success:true,
                    message:"InActive users found!",
                    data : userList.filter(user => user.isActive == false)
                }
    }

    @Get("/:id/:userName")
    getUsers(@Param() params:UserParams , @Query("name") userQueryName:string) { // whole params :- Record<string,any> OR create interface and add here

        console.log("Params:-", params) //access any value of params!
        console.log("Query",userQueryName)
            return {
                success:true, 
                message: "users found success!",
                data: userList
            }
    }
   

    //POSTING Data With NEST @BODY decorator!

    @Post()
    @HttpCode(201)
    createUser(@Body() body:User){ //body:Record<string,any>
            console.log("BODY:-",body)
            if(body){
                userList.push(body)
                return {
                    success:true,
                    message:"user created success!",
                    data:userList[userList.length - 1]
                }
            }
                else 
                return {
                    success:false,
                    message : "Invalid Request!",
                    data :null!
                }

            }
    @Put()
    update(@Body() body:Record<string,any> ){
            console.log("Body",body)
    }
}