import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../service/productos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  productos;
  loading:boolean=true;

  constructor(private productosService:ProductosService) {
    this.getProductos()
   }
  
   getProductos(){
     try{
      this.productos = this.productosService.getAll()
      this.loading=false;
     } catch(e){
       console.log(e)
     }
   }



  ngOnInit(): void {
  }

}
