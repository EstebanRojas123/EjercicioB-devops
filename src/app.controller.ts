import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { App } from 'supertest/types';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/saludo/:nombre')
  saludo(@Param('nombre') nombre: string) {
    return this.appService.saludo(nombre);
  }

  @Get('/nuevo')
  nuevaRuta() {
    return this.appService.nuevaRuta();
  }

  @Get('/nuevo2')
  otraRuta() {
    return this.appService.ruta2();
  }

  @Get('/nuevo3')
  terceraRuta() {
    return this.appService.ruta3();
  }

}
