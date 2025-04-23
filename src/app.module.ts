import {Module} from "@nestjs/common"
import {LibraryController} from "./book/book.controller"
@Module({
  controllers: [LibraryController]
})

export class AppModule{};