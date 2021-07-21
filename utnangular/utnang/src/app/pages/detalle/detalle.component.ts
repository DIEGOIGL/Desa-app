import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../service/productos.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})

export class DetalleComponent implements OnInit {
  producto;
  loading:boolean=true;

  constructor(
    private activatedRoute:ActivatedRoute,
    private productosService:ProductosService
  ) {}

  async ngOnInit() {
    try{
      const id = this.activatedRoute.snapshot.paramMap.get("id")

      const productoAux = await this.productosService.getById(id)
      this.producto=productoAux[0]

      this.loading=false;
    } catch(e){

    }

  }

}
