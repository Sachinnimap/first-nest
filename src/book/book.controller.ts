import { Controller, Delete, Get, Post, Put, Req, Res } from "@nestjs/common";
import { Request, Response } from "express"


@Controller("/books")
export class LibraryController {
  bookList: string[] = ['firstBook', 'secondBook', 'thirdBook', 'fourthBook', 'fifthBook', 'sixthBook', 'seventhBook']

  //get list of books
  @Get('/')
  getBooks(@Req() req:Request,@Res() res:Response) {
    return { success: true, data: this.bookList } //return automatically give resoponse and can give anytype of response
  }

  //get a book
  @Get("/:id")
  getBook(@Req() req:Request,@Res() res:Response){
        let bookName :string  = req.body.bookName
        if(bookName){
            let getBookData :string|undefined = this.bookList.find(book => book == bookName)
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

  //Post a book
  @Post("/")
  postBook(@Req() req: Request, @Res() res: Response) {
    let bookName : string = req.body?.name

    let bookAdded : number|null = bookName ? this.bookList.push(bookName) : null
    if (bookAdded)
      res.status(201).json({ success: true, message: "Book added successfully!", data: this.bookList[this.bookList.length - 1] })
    else
      res.status(201).json({ success: false, message: "Book not added!", data: null })
  }

  //update a book

  @Put("/:id")
  updateBook(@Req() req: Request, @Res() res: Response) {
    let oldBookName : string = req.body?.oldBookName
    let latestBookName : string = req.body?.latestBookName

    if (oldBookName && latestBookName) {
      let findBookIndex : number = this.bookList.findIndex((book) => book == oldBookName)
      if (findBookIndex !== -1) {
        this.bookList.splice(findBookIndex, 1, latestBookName)
        res.status(201).json({ success: true, message: 'updated successfully!', data: this.bookList[findBookIndex] })
      }
      else
        res.status(404).json({ success: false, message: "Book not found!" })
    }
    else
      res.status(400).json({ success: false, message: "invalid Request" })
  }

  // delete a book
  @Delete("/:id")
  deleteBook(@Req() req: Request, @Res() res: Response) {
    let bookName : string = req.body?.bookName

    if (bookName) {
      let isBookAvailable : number = this.bookList.findIndex((book) => book == bookName);
      if (isBookAvailable != -1) {
        this.bookList.splice(isBookAvailable, 1);
        res.status(200).json({
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