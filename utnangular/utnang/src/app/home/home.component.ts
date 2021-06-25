import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../service/productos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //productos:any = [];
  productos;

  constructor(private productosService:ProductosService) {
    this.getProductos()
   }
  
   getProductos(){
     try{
      this.productos = this.productosService.getAll()
//      this.productos = await this.productosService.getAll()
     } catch(e){
       console.log(e)
     }
   }



  ngOnInit(): void {
  }

}
