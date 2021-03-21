import { Component } from '@angular/core';
import { Usuario } from './classes/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Clase 1 - Ejercicio 2';

  usuarioTest = new Usuario('Test', 'Password1');
}
