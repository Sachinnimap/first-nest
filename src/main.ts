import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AuthMiddleware } from './with-middleware/middleware/authMiddleware';
import { RecentSearchInterceptor } from './with-interception/job/recent-search.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);


  //Authmiddleware will work for every routes now 
  //but this middleware is class so we need to convert this to function so i have also converted to function - inside auth middleware file
  
    //Interceptor - use this method if interceptor does not need Dependencies!
    // app.useGlobalInterceptors(RecentSearchInterceptor)
  // app.use(AuthMiddleware) 
  
  await app.listen(3000);

    // setTimeout(()=>{
    //     app.close() //this will close app after 5 minitues //used for onDestroy method in application-lifecycle
    // },5000)
    
}
bootstrap();