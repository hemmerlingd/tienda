import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.servece';
import { infoTeam } from '../interfaces/team.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

	info: InfoPagina = {};
	equipo:infoTeam =[];
	cargada = false;

  constructor( private http: HttpClient) { 
  	this.cargarInfo();
  	this.cargarEquipo();
  }

  private cargarInfo(){
	  	this.http.get('assets/data/data-pagina.json')
	  	.subscribe(resp=>{
  		
	  		this.info = resp;
	  	});
  }

  private cargarEquipo(){
  		this.http.get('https://angular-tienda-36db6.firebaseio.com/equipo.json')
	  	.subscribe((resp: infoTeam)=>{

	  		this.equipo = resp;
	  		console.log(this.equipo);
	  	});
  }
}
