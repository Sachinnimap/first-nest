import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await app.listen(3000);

    // setTimeout(()=>{
    //     app.close() //this will close app after 5 minitues //used for onDestroy method in application-lifecycle
    // },5000)
    
}
bootstrap();