import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Bye World!';
  }

  saludo(nombre: string): string {
    return 'buenos dias ' + nombre + '!!!';
  }

  test() {
    return 'Hello Azure!';
  }
}
