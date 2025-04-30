import { BadRequestException, Controller, Get, HttpException, Inject, NotFoundException, Param, ParseIntPipe, Req, Res, UseFilters } from "@nestjs/common";
import { AppExceptionFilter } from "src/exceptions/app-exception.filter";
import { HttpExceptionFilter } from "src/exceptions/exception.filter";
import { IdException } from "src/exceptions/id-exception";
import { IdExceptionFilter } from "src/exceptions/id-exception.filter";



@Controller("/library")
// @UseFilters(HttpExceptionFilter)  //all controller anywhere get any issue 
export class LibraryController{
        constructor(@Inject("factoryFunc") private factoryFunc: any){
            console.log("Factory Hanlder - ", this.factoryFunc)
        }

       
  @Get()
//   @UseFilters(AppExceptionFilter)  //created this filter only for GLOBAL but also we can use it here!
   getAllLibraryData (@Req() req:any  ){
            console.log("Library data called!")
            throw new Error('something went wrong')
            return "Library Data response!"
   }  
   
   @Get(":id")
   @UseFilters(IdExceptionFilter)
    getLibraryData(@Param("id", ParseIntPipe) id: number, @Req() Req:any){
                console.log("ID",typeof id, id)

                if(id  < 10) {
                    // throw new Error(); //unknown error convert to 500 by Nest!
                    // throw new HttpException('Id should be greater than 10!',400)
                    // throw new HttpException({
                    //     errorMessage : 'Please enter valid Id',
                    //     errorData : 'Error is from library controller!'
                    // },400)

                    // throw new NotFoundException('ID not found') //now this will access by our ExceptionFilter
                    // throw new BadRequestException("something went wrong!")

                    //Custom error
                    throw new IdException('Id should be valid!')
                }


                return `GetLibraryData called! at ${id}`
    }
}