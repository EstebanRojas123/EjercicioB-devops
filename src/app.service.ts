import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Bye';
  }

  saludo(nombre: string): string {
    return 'buenos dias ' + nombre + '!!!';
  }

  nuevaRuta() {
    return 'Hello Azure!';
  }
}
