import { Controller, Get, post} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @post()
 postHello(): string{
    return this.appService.postHello();
  }
}
