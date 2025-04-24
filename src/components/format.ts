//USER interface
export interface User {
    userId: number,
    userName: string,
    userEmail: string,
    userMobileNo: number,
    isActive:boolean
}


//USER Params  interface!
export interface UserParams{
    id:string,
    userName: string
}

//USERS Query interface!
export interface UserQuery{
    firstName: string,
    lastName: string,
    productId: number

}
