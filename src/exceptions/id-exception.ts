
/* 
throw new IdException('Id should be valid!')  //any file 
only creating and using this directly will not work 
need to inform Error exeption filter list
but this error will log inside node terminal as error
 */

export class IdException extends Error{

        constructor(message? : string){
            super(message || "Entered Id is not valid")
        }

}



//Manually created

// export class IdException extends Error{

//     constructor(message?: string){
//         super(message || 'something went wrong with ID')
//     }
// }