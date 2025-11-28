import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  saludo(nombre: string): string {
    return 'buenos dias ' + nombre + '!!!';
  }
}
