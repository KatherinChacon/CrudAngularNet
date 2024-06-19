import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Producto } from './models/producto';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, AsyncPipe, FormsModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FrontendProducto';

  /*http = inject(HttpClient);*/

 /* productoForm = new FormGroup({
    name: new Form
  })*/

  /*products$ = this.getProductos();

  private getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>('https://localhost:7145/api/Producto');
  }*/
}


