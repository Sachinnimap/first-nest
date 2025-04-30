import { error } from "console"

// ________________
// Throw new Error()
/* if throw error like this nestJS will convert and response to 500 - interval server erro
{
    "statusCode": 500,
    "message": "Internal server error"
} */


// _______________________
//throw new HttpException('Id should be greater than 10!',400)

/* http exeption error so here we can pass only two value 
first is Error message - what type of error is it
second Error code  - type of error code like 400, 404, 401 ,500 etc
*/


//______________________
// throw new HttpException({
//         errorMessage : 'Please enter valid Id', errorData : 'Error is from library controller!'
//                       },400)  //httpStatus.BAD_REQUEST also be as statuscode

/* 
in this error we passed a whole object so now this object will be response
nest will not send anything now just send this Object and 
also we need to mention status code!
and 
{
    "errorMessage": "Please enter valid Id",
    "errorData": "Error is from library controller!"
} */


//__________________

//  throw new NotFoundException('ID not found')
//  throw new BadRequestException("something went wrong!")
//  throw new UnAuthorizedException("Need authorization to access!")

/*  
    there many exeptions are available in nest 
    notfound exeption is one of them so we can directly send this not error to user not need to create!
    same as if we sent object then all handled by this object nest will not send any thing to this!
    {
        "message": "ID not found",
        "error": "Not Found",
        "statusCode": 404
    } 
        */