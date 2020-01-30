import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

	prod:any[] =[];
	cargando=true;

  constructor( private http: HttpClient ) {
  	this.cargarProductos();
   }

	cargarProductos(){
		this.http.get('https://angular-tienda-36db6.firebaseio.com/productos_idx.json')
	  	.subscribe((resp:any[])=>{
			
	  		this.prod = resp;
	  		this.cargando=false;


	  	});
	}

}
