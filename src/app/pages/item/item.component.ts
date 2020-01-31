import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { infoProds } from '../../interfaces/prod.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
 	
  item: infoProds;
  param:string;
  constructor( private route: ActivatedRoute, 
  			   public items: ProductosService ) { }

  	ngOnInit() {
	  	this.route.params
	  	.subscribe( parametros => {
	  		this.param =parametros['id'];
	  			this.items.getProducto(parametros['id'])
	  				.subscribe( (producto: infoProds) => {
	  					this.item=producto;
	  				});
	  		});
		}
	
}

