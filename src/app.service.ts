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
    return 'Hello from the new route!';
  }

  ruta2() {
    return 'This is a test route!';
  }
  
  ruta3() {
    return 'This is a test route.....!';
  }

}
