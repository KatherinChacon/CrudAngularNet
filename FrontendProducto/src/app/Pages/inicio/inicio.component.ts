import { Component, inject } from '@angular/core';
import { ProductoService } from '../../Services/producto.service';
import { Producto } from '../../models/producto';
import { Router } from '@angular/router';

import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [MatCardModule,MatTableModule,MatIconModule,MatButtonModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  
  private productoServicio = inject(ProductoService);
  public listaProducto:Producto[] = [];
  public displayedColumns:string[] = ['nombre','descripcion','precio','stock','accion'];

  obtenerProductos(){
    this.productoServicio.lista().subscribe({
      next:(data)=>{
        if(data.length > 0){
          this.listaProducto = data;
        }
      },
      error:(err)=>{
        console.log(err.message)
      }
    })
  }

  /*constructor(private router:Router){}*/

  constructor(private router:Router){
    this.obtenerProductos();
  }

  ngOnInit(){
    this.obtenerProductos();
  }

  //Crear metodo para redirigir a pagina de productos
  nuevo(){
    this.router.navigate(['/producto',0]);
  }

  editar(objeto:Producto){
    this.router.navigate(['/producto',objeto.id]);
  }

  eliminar(objeto:Producto){
    if(confirm("Desea eliminar el producto" + " " + objeto.nombre )){
      this.productoServicio.eliminar(objeto.id).subscribe({
        next:(data)=>{
          if(objeto.id > 0){
            this.obtenerProductos();
          }else{
            alert("No se puede eliminar")
          }
        },
        error:(err)=>{
          console.log(err.message)
        }

      })
    }
  }
}
