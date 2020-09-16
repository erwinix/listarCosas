import { Component } from '@angular/core';

import lista from 'src/assets/json/todo.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ListarAngular';


  Todo: any = lista;
}
