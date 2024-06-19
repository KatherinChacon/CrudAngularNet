import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { appsettings } from '../Settings/appsettings';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  //Inyección de servicio
  private http = inject(HttpClient);
  //URL Base de la api
  private apiUrl:string = appsettings.apiUrl + "/Producto"
  constructor() { }

  //Peticiones a Web Api

  lista(){
    return this.http.get<Producto[]>(this.apiUrl);
  }

  obtener(id:number){
    return this.http.get<Producto>(`${this.apiUrl}/${id}`);
  }

  crear(objeto:Producto){
    return this.http.post<Response>(this.apiUrl,objeto);
  }

  editar(id:number ,objeto:Producto){
    return this.http.put<Response>(`${this.apiUrl}/${id}`,objeto);
  }

  eliminar(id:number){
    return this.http.delete<Response>(`${this.apiUrl}/${id}`);
  }
}
