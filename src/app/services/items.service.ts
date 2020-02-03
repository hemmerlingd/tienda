import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { infoProds } from '../interfaces/prod.interface';


@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  	item: infoProds;
	cargando=true;


  constructor( private http: HttpClient ) {
  
   }

	getProducto(id: string){
		return this.http.get(`https://angular-tienda-36db6.firebaseio.com/productos/${ id }.json`)
	  	.subscribe((resp:infoProds)=>{
	  		this.item = resp;
	  		this.cargando=false;
	  	});
	}
}
