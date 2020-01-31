import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { infoProds } from '../interfaces/prod.interface';
//import { resolve } from '../../../node_modules/@types/q';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

	prod:any[] =[];
	cargando=true;
	item: infoProds;
	url: string= "https://angular-tienda-36db6.firebaseio.com/productos/";
	prodfiltrado:any[]=[];

  constructor( private http: HttpClient ) {
  	this.cargarProductos();
  	//this.getProducto('prod-2');
   }

	cargarProductos(){
		return new Promise(  ( resolve, reject ) => {
			
			this.http.get('https://angular-tienda-36db6.firebaseio.com/productos_idx.json')
		  	.subscribe((resp:any[])=>{
		  		this.prod = resp;
		  		this.cargando=false;
		  		resolve();
		  	});
		});
	}

	getProducto(id: string){
		
		return this.http.get('https://angular-tienda-36db6.firebaseio.com/productos/'+ id +'.json')

  	}

  	buscarProductos(text: string){
  		if(this.prod.length === 0){
  			this.cargarProductos().then( () => {
  				this.filtrarProductos(text);
  			});
  		}else{
  			this.filtrarProductos(text);
  		}
	}

	private filtrarProductos( text:string ){
		this.prodfiltrado=[];

		text = text.toLowerCase();

		this.prod.forEach( prods => {

			const tituloLower = prods.titulo.toLowerCase();
			if(prods.categoria.indexOf (text)>=0 || tituloLower.indexOf (text)>=0 ){
				this.prodfiltrado.push (prods);
			}
		});
	}
}