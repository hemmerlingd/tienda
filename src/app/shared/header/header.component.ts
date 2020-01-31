import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor ( public _infoPag: InfoPaginaService, 
  				private router: Router) { }


  ngOnInit() { }

  buscarProducto(text:string){

  	if (text.length<1){
  		return;
  	}

  	this.router.navigate(['/search', text]);
  }

}
