import { Component, Input, OnInit, inject } from '@angular/core';
import {AbstractControl,FormBuilder,FormGroup,ReactiveFormsModule} from '@angular/forms';
import { ProductoService } from '../../Services/producto.service';
import { Router } from '@angular/router';
import { Producto } from '../../models/producto';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [MatFormFieldModule,MatInputModule,MatButtonModule,ReactiveFormsModule],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent implements OnInit{
  @Input('id')id!:number;
  private productoServicio = inject(ProductoService);
  public formBuild = inject(FormBuilder);

  public formProducto:FormGroup = this.formBuild.group({
    nombre: [''],
    descripcion: [''],
    precio: [0],
    stock: [0],
  })

  constructor(private router:Router){}
  //Metodo para cuando inicia 
  ngOnInit():void{
    //Validación si es edición o creación
    if(this.id != 0){
      this.productoServicio.obtener(this.id).subscribe({
        next:(data)=>{
          this.formProducto.patchValue({
            nombre: data.nombre,
            descripcion: data.descripcion,
            precio: data.precio,
            stock: data.stock,
          })
        },
        error:(err)=>{
          console.log(err.message)
        }
      })
    }
  }

  // Metodo para cuando termina
  guardar(){
    const objeto:Producto={
      id: this.id,
      nombre: this.formProducto.value.nombre,
      descripcion: this.formProducto.value.descripcion,
      precio: this.formProducto.value.precio,
      stock: this.formProducto.value.stock,
    }
    //Validación si es edición o creación
    if(this.id == 0){
      this.productoServicio.crear(objeto).subscribe({
        next:(data)=>{         
          if(Object.keys(data).length > 0){
            this.router.navigate(["/"])
          }else{
            alert("Error al crear")
          }
        },
        error:(err)=>{
          console.log(err.message)
        }
      })
    }else{
      this.productoServicio.editar(this.id,objeto).subscribe({
        next:(data)=>{
          if(this.id > 0){
            this.router.navigate(["/"])
          }else{
            alert("Error al editar")
          }
        },
        error:(err)=>{
          console.log(err.message,'error155')
        }
      })
    }
  }

  volver(){
    this.router.navigate(["/"])
  }

}
