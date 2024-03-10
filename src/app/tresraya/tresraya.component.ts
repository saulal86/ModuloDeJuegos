import { Component } from '@angular/core';

@Component({
  selector: 'app-tresraya',
  templateUrl: './tresraya.component.html',
  styleUrls: ['./tresraya.component.css']
})
export class TresrayaComponent {
  celdas: string[][] = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
  jugadorActual: string = 'X';
  finJuego: boolean = false;
  ganador: string | null = null;

  manejarClicCelda(fila: number, columna: number): void {
    if (this.celdas[fila][columna] === '' && !this.verificarGanador()) {
      this.celdas[fila][columna] = this.jugadorActual;

      if (this.verificarGanador()) {
        this.ganador = this.jugadorActual;
        this.finJuego = true;
      } else if (this.celdas.every(fila => fila.every(celda => celda !== ''))) {
        this.finJuego = true;
      } else {
        this.jugadorActual = this.jugadorActual === 'X' ? 'O' : 'X';
      }
    }
  }

  verificarGanador(): boolean {
    const patronesGanadores: number[][][] = [
      [[0, 0], [0, 1], [0, 2]], 
      [[1, 0], [1, 1], [1, 2]], 
      [[2, 0], [2, 1], [2, 2]], 
      [[0, 0], [1, 0], [2, 0]], 
      [[0, 1], [1, 1], [2, 1]], 
      [[0, 2], [1, 2], [2, 2]], 
      [[0, 0], [1, 1], [2, 2]], 
      [[0, 2], [1, 1], [2, 0]]  
    ];

    for (const patron of patronesGanadores) {
      const [a, b, c] = patron;
      if (
        this.celdas[a[0]][a[1]] !== '' &&
        this.celdas[a[0]][a[1]] === this.celdas[b[0]][b[1]] &&
        this.celdas[a[0]][a[1]] === this.celdas[c[0]][c[1]]
      ) {
        return true;
      }
    }

    return false;
  }
}
