import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ppt',
  templateUrl: './ppt.component.html',
  styleUrls: ['./ppt.component.css']
})
export class PptComponent implements OnInit{
  
  texto:String="";
  texto2:String="";
  texto3:String="";
  nombre:string=""

  elecciones:string[]=["piedra", "papel", "tijeras"]

  constructor(private route:ActivatedRoute){

  }

  ngOnInit(): void {
    this.route.params.subscribe(
      params => {
        this.nombre = params['nick']
      }
    )
    this.texto="Hola, bienvenido/a "+ this.nombre+" a piedra, papel o tijera realiza tu elección."
  }

  elegir(eleccion:String){
      this.texto="Elegiste: " + eleccion;  
    
      var eleccionMaquina=Math.floor(Math.random()*3);
      this.texto2="La maquina ha elegido: "+this.elecciones[eleccionMaquina];
  
      if(eleccion=="tijeras" && this.elecciones[eleccionMaquina]=="papel" ||
      eleccion=="papel" && this.elecciones[eleccionMaquina]=="piedra" ||
      eleccion=="piedra" && this.elecciones[eleccionMaquina]=="tijeras"){
        this.texto3="Ganaste";
      }
      if(eleccion=="tijeras" && this.elecciones[eleccionMaquina]=="piedra" ||
      eleccion=="papel" && this.elecciones[eleccionMaquina]=="tijeras" ||
      eleccion=="piedra" && this.elecciones[eleccionMaquina]=="papel"){
        this.texto3="Perdiste";
      }if(eleccion=="tijeras" && this.elecciones[eleccionMaquina]=="tijeras" ||
      eleccion=="papel" && this.elecciones[eleccionMaquina]=="papel" ||
      eleccion=="piedra" && this.elecciones[eleccionMaquina]=="piedra"){
        this.texto3="Ganaste";
      }
    }

}
