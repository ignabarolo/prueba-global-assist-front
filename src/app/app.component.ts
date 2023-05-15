import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Entry } from './models/entry.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'global-assist-front';
  // http = inject(HttpClient);
  // entries: Entry[] = [];

  // ngOninit() {
  //   console.log('Antes de hacer la llamada HTTP');
  //   this.http
  //     .get('https://api.escuelajs.co/api/v1/products')
  //     .subscribe((data: any) => {
  //       // this.entries = data;
  //       console.log('Después de recibir la respuesta HTTP');
  //       console.log(data);
  //     });
  // }

  // ngOnInit() {
  //   console.log('Antes de hacer la llamada HTTP');
  //   this.http
  //     .get<Entry[]>('http://localhost:8080/api/entries/')
  //     .subscribe((data: any) => {
  //       this.entries = data;
  //       console.log('Después de recibir la respuesta HTTP');
  //       console.log(data);
  //     });
  // }
}
