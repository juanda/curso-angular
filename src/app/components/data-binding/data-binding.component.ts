import { Component, OnInit } from '@angular/core';


type MiModelo = {
  numero: number,
  cadena: string,
  propiedad: string,
  estilo: string,
  clase: string,
  atributo: string,
  tecla: string,
  localidad: string,
  localidades: string[]
}


@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  modelo: MiModelo = {
    numero: 56,
    cadena: "Hola que tal",
    propiedad: "Un valor cualquiera",
    estilo: "red",
    clase: "btn btn-lg btn-primary",
    atributo: "help",
    tecla: "",
    localidad: "",
    localidades: []
  }
  
  cambiaCadena(event?){  
    this.modelo.cadena = (event == undefined)? "Cadena cambiada" : event.target.value    
  }

  muestraTecla(event){        
    this.modelo.tecla = event.key
  }

  showLocalidad(event){
    this.modelo.localidad = event.target.value
  }

  addLocalidad(event){
    if(event.key == "Enter"){
      this.modelo.localidades.push(event.target.value)   
      this.modelo.localidad = "" // no funciona ¿Porqué?
      event.target.value = ""   
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
