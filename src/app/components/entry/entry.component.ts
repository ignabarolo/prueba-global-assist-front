import { Component, Input, inject } from '@angular/core';
import { Entry } from './../../models/entry.model';
import { HttpClient } from '@angular/common/http';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css'],
})
export class EntryComponent {
  entries: Entry[] = [];
  http = inject(HttpClient);

  pagaSize = 3;
  desde = 0;
  hasta = 3;

  nextPage(e: PageEvent) {
    console.log('Cambiando de Pagina');
    this.desde = e.pageIndex * e.pageSize;
    this.hasta = this.desde + e.pageSize;
  }

  deleteEntry(entryId: String) {
    console.log('deleteEntry: ' + entryId);
    this.http.delete(`http://localhost:8080/api/entries/${entryId}`).subscribe(
      () => {
        console.log('Recurso eliminado exitosamente');
        this.loadEntries();
      },
      (error) => {
        console.error('Error al eliminar recurso:', error);
      }
    );
  }

  loadEntries() {
    this.http
      .get<Entry[]>('http://localhost:8080/api/entries/')
      .subscribe((data: any) => {
        this.entries = data;
        console.log(data);
      });
  }

  reloadEntries(data: any) {
    this.entries = data;
    console.log(data);
  }

  ngOnInit() {
    this.loadEntries();
  }
}
