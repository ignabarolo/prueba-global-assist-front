import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'global-assist-front';

  // entry!: EntryComponent;

  // constructor(private entry: EntryComponent) {}

  // Método en el componente padre que llamará al método del componente hijo
  // callChildMethod(data: any) {
  //   if (this.entry) {
  //     this.entry.reloadEntries(data);
  //   } else {
  //     console.log('NO INICIALIZADO');
  //   }
  // }

  form!: FormGroup;
  now: any;
  deshabilitar: any;
  fromDate!: string;

  http = inject(HttpClient);

  cambioFecha() {
    this.deshabilitar = this.fromDate;
  }
  // constructor(private entry: EntryComponent) {}

  isSubmitted = false;

  // actualizarDatos(data: any) {
  //   this.entry.reloadEntries(data);
  // }

  ngOnInit() {
    this.form = new FormGroup({
      fromDate: new FormControl('', Validators.required),
      toDate: new FormControl('', Validators.required),
      doorId: new FormControl('', Validators.required),
    });

    const datePite = new DatePipe('en-Us');
    this.now = datePite.transform(new Date(), 'yyyy-MM-dd');
  }

  submitForm() {
    if (this.form.valid) {
      console.log('Formulario Valido');

      console.log(this.form.get('fromDate')?.value);
      console.log(this.form.get('toDate')?.value);
      console.log(this.form.get('doorId')?.value);
      this.isSubmitted = true;
      console.log('Formulario Valido');
      this.http
        .get(
          `http://localhost:8080/api/entries?DoorId=${
            this.form.get('doorId')?.value
          }&FromDate=${this.form.get('fromDate')?.value}&ToDate=${
            this.form.get('toDate')?.value
          }`
        )
        .subscribe(
          (data: any) => {
            console.log(data);
            // this.actualizarDatos(data);
          },
          (error) => {
            console.error('Error al eliminar recurso:', error);
          }
        );
      //   this.http
      //     .get(
      //       `http://localhost:8080/api/entries/${
      //         this.form.get('doorId')?.value
      //       }/${this.form.get('fromDate')?.value}/${
      //         this.form.get('toDate')?.value
      //       }`
      //     )
      //     .subscribe(
      //       (data: any) => {
      //         console.log(data);
      //         this.actualizarDatos(data);
      //       },
      //       (error) => {
      //         console.error('Error', error);
      //       }
      //     );
      // } else {
    }
  }
}
