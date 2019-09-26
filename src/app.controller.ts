import { Controller, Get, Response, HttpStatus } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('ping')
  ping(@Response() res) {
    return res.status(HttpStatus.OK);
  }
}
