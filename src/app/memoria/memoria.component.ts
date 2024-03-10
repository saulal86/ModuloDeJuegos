import { Component } from '@angular/core';

@Component({
  selector: 'app-memoria',
  templateUrl: './memoria.component.html',
  styleUrls: ['./memoria.component.css']
})
export class MemoriaComponent {
  cartas: string[] = ['A', 'B', 'C', 'D'];
  tablero: any[] = [];
  cartasSeleccionadas: number[] = [];
  paresEncontrados: number = 0;

  ngOnInit() {
    this.iniciarJuego();
  }

  iniciarJuego() {
    this.tablero = this.cartas.flatMap(letra => [{ letra, descubierta: false }, { letra, descubierta: false }]);
    this.tablero = this.ArrayMezcla(this.tablero);
    this.cartasSeleccionadas = [];
    this.paresEncontrados = 0;
  }

  seleccionarCarta(index: number) {
    const cartaSeleccionada = this.tablero[index];
  
    if (!cartaSeleccionada.descubierta && this.cartasSeleccionadas.length < 2) {
      cartaSeleccionada.descubierta = true;
      this.cartasSeleccionadas.push(cartaSeleccionada);
  
      if (this.cartasSeleccionadas.length === 2) {
        this.verificarPareja();
      }
    }
  }

  verificarPareja() {
    const [carta1, carta2] = this.cartasSeleccionadas as any[];
  
    if (carta1.letra === carta2.letra) {
      this.paresEncontrados++;
  
      carta1.descubierta = true;
      carta2.descubierta = true;
  
      this.cartasSeleccionadas = [];
  
      if (this.paresEncontrados === this.cartas.length) {
        setTimeout(() => {
          alert('¡Has ganado!');
          this.iniciarJuego();
        }, 1000);
      }
    } else {
      setTimeout(() => {
        carta1.descubierta = false;
        carta2.descubierta = false;
        this.cartasSeleccionadas = [];
      }, 1000);
    }
  }

  ArrayMezcla(array: any[]): any[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
      array[i].descubierta = false; 
    }
    return array;
  }
}
