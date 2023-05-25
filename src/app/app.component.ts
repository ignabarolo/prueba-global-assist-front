import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Entry } from './models/entry.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'global-assist-front';

  form!: FormGroup;
  now: any;
  deshabilitar: any;
  fromDate!: string;

  entries: Entry[] = [];

  http = inject(HttpClient);

  cambioFecha() {
    this.deshabilitar = this.fromDate;
  }

  isSubmitted = false;

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
            this.entries = data;
          },
          (error) => {
            console.error('Error al eliminar recurso:', error);
          }
        );
    }
  }
}
