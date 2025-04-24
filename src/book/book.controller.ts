import { Controller, Delete, Get, Post, Put, Req, Res,HttpStatus,HttpCode, Header, Redirect, Inject } from "@nestjs/common";
import { Request, Response } from "express"
import { bookList} from "../components/data"
import { UserStore } from "src/user.store";

@Controller("/books")
export class BookController {

    constructor(@Inject(UserStore) store:any){
      console.log("Book_controctor_inject:- ", store)
    }
  //get list of books
  @Get('/')
  @Header("My-Header", 'John Doe!') //Header - "any Name & any Value"
  @HttpCode(200) //in response we automatically send this Status! if we given 204 then response not going to send
  // @HttpCode(HttpStatus.OK) //we can also share Status like this like this
  //@Res() res:Response -- so if we returning we cannot add Req otherwise nest give control to this
  getBooks(@Req() req:Request ) { //we dont need every time to write res we directly return!
    return { success: true, data: bookList }      //return automatically give resoponse and can give anytype of response
  }
  
  //Redirecting One Route to other routes ;
  @Get("/latestBooks")
  @Redirect("/books/pendingBooks") // default status code:302 // need full path not only /pendingBooks
  getLatestBooks(){
      return {
          success:true , message:"latest books list found!", data:bookList
      }
  }

  //Conditional redirecting !
  //for conditional need redirect decorator then going to work only!
  //OR res.redirect method we can use to redirect like express!
  @Get("/pendingBooks")
  @Redirect("/books/expensiveBooks",302) 
  getPendingBoooks(){
    let randomNumber = Math.round(Math.random() * 10)
    console.log("Random Num-" , randomNumber)
    if(randomNumber > 5)
    return {
       url : "/books/expensiveBooks",
       statusCode: 302
    }
    else
    return {
        url :"/books/trendingBooks",
        statusCode: 302
  }
  }


  @Get("/expensiveBooks")
  getExpensiveBooks(){
    return  {
      success:true, 
      message: "expensive books found!",
      data: bookList
    }
  }

  @Get("/trendingBooks")
  getTrendingBooks(){
      return{ 
      success: true,
      message:"trending books found!",
      data: bookList
  }
}

   // get a book
   @Get("/:id")
   @HttpCode(201) //given here so below code will overrite this status and become 200
   getBook(@Req() req:Request,@Res() res:Response){
       console.log("Get Book!")
         let bookName :string  = req.body?.bookName
         if(bookName){
             let getBookData :string|undefined = bookList.find(book => book == bookName)
             console.log("GetBook -" ,getBookData)
             if(getBookData){
               res.status(200).json({
                 success:true,
                 message: "book found!",
                 data:getBookData
               })
             }
             else res.status(404).json({
               success:false,
               message: "book not found!",
               data: null
             })
         }
         else res.status(400).json({
           success:false,
           message:"Invalid request!"
         })
   }


  //update a book
  @Put("/:id")
  updateBook(@Req() req: Request, @Res() res: Response) {
    console.log("Update Book!")
    let oldBookName : string = req.body?.oldBookName
    let latestBookName : string = req.body?.latestBookName

    if (oldBookName && latestBookName) {
      let findBookIndex : number = bookList.findIndex((book) => book == oldBookName)
      if (findBookIndex !== -1) {
        bookList.splice(findBookIndex, 1, latestBookName)
        res.status(201).json({ success: true, message: 'updated successfully!', data: bookList[findBookIndex] })
      }
      else
        res.status(404).json({ success: false, message: "Book not found!" })
    }
    else
      res.status(400).json({ success: false, message: "invalid Request" })
  }


 

  //Post a book
  @Post("/")
  postBook(@Req() req: Request, @Res() res: Response) {
    console.log("Post Book!")
    let bookName : string = req.body?.name

    let bookAdded : number|null = bookName ? bookList.push(bookName) : null
    if (bookAdded)
      res.status(201).json({ success: true, message: "Book added successfully!", data: bookList[bookList.length - 1] })
    else
      res.status(201).json({ success: false, message: "Book not added!", data: null })
  }


  // delete a book
  @Delete("/:id")
  deleteBook(@Req() req: Request, @Res() res: Response) {
    console.log("Delete Book!")
    let bookName : string = req.body?.bookName

    if (bookName) {
      let isBookAvailable : number = bookList.findIndex((book) => book == bookName);
      if (isBookAvailable != -1) {
        bookList.splice(isBookAvailable, 1);
        res.status(204).json({
          success: true,
          message: "Book deleted success!"
        })

      }
      else res.status(404).json({
        success: false,
        message: "Book not found!"
      })
    }
    else res.status(400).json({ success: false, message: "Invalid Request!" })
  }


}