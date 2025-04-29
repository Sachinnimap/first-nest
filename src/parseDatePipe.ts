import { ArgumentMetadata, Injectable, Optional, ParseIntPipe, PipeTransform, UsePipes } from "@nestjs/common";


export class  PipeOptions{
    firstName: string
    secondName : string 
    isWorking : boolean
}

@Injectable()
@UsePipes(ParseIntPipe)
 export class  ParseDatePipe implements PipeTransform{ //for creating pipeline
    constructor(@Optional() PipeOptions :PipeOptions){  //@Optional() isOtherOptionsProvided : boolean  -manually
      
        // console.log("OPTOION", isOtherOptionsProvided)
        console.log(PipeOptions)
    }
        transform(value: string | number, metadata: ArgumentMetadata) {
                
            let {metatype} = metadata //
            console.log(metatype?.name) // how you wantvalue so u can access so use Want Date then we can give him date
            if(typeof value == 'string')
                return parseInt(value)
            else 
                return value
            
        }

}
