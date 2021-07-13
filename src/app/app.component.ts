import {
  CurrencyPipe,
  LowerCasePipe,
  PercentPipe,
  SlicePipe,
  UpperCasePipe,
} from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { Component, PipeTransform } from '@angular/core';
import { OfuscatePipe } from './ofuscate.pipe';
registerLocaleData(localeEs);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  sliceHtml = `<span *ngFor="let item of array | slice:5:9">\{\{item\}\}</span>`
  info = {
    nombre: 'Juan',
    clave: 'jkg',
    edad: 26,
    direccion: {
      calle: 'Principal',
      numero: 2,
    },
  };
  name = "John Rambo"
  array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  number = Math.PI
  number1 = 0.234
  number2 = 1234.5
  promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Han llegado los datos'), 3500
    })
  })
  isVisible = true;
  ofuscador = 'administrador'

  onClick() {
    let result;
    if (!this.isVisible) {
      result = new OfuscatePipe().transform('administrador', true)
    } else {
      result = new OfuscatePipe().transform('administrador', false)
    }
    this.isVisible = !this.isVisible;
    this.ofuscador = result
  }

  /**
   * Hay una manera de poder aplicar las pipes desde un objeto, esto es creando una instancia
   * de la pipe, el problema es que, en los casos que necesitemos pasarle parametros al metodo
   * pipe.transform(a, b, c), al estar ejecutandose desde el template no podemos hacerlo de
   * forma automatizada de manera sencilla, la unica posibilidad que veo, es ejecutar el
   * pipe.transform desde el objeto que iteramos en el TS para despues pintar el resultado
   * en la tabla
   */
  // items = [
  //   {
  //     data: 'John Rambo',
  //     pipe: new UpperCasePipe(),
  //     get pipeName() {
  //       return Object.getPrototypeOf(this.pipe).constructor.ɵpipe.name;
  //     },
  //   },
  //   {
  //     data: 'John Rambo',
  //     pipe: new LowerCasePipe(),
  //     get pipeName() {
  //       return Object.getPrototypeOf(this.pipe).constructor.ɵpipe.name;
  //     },
  //   }
  // ];
}
