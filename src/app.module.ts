import {Module} from "@nestjs/common"
import {BookController} from "./book/book.controller"
import {UsersController} from "./user/user.controller"
import {UserStore} from "./user.store"

@Module({
  controllers: [BookController,UsersController],
  providers : [UserStore]
})

export class AppModule{};