// comprimento: double;
// altura: double;

import { IFormatoDeElemento } from "./formatoElemento";


// classe - modelo de objeto / molde (atributos genéricos e métodos)
// classe abstrata - modelo de objeto / molde (atributos genéricos e métodos), quando queremos herdar um comportamento já implementado em uma classe anterior
// interface - atributos e assinaturaa de métodos - necessita da implementação dentro dos métodos;
// type - atributos e não pode ter assinatura de métodos - Utilizado para tipar opções, dtos (data transfer object);
// enums

export class Retangulo implements IFormatoDeElemento {
  constructor(public altura: number, public largura: number) { }

  desenhar(): void {
    const perimetro = 2 * (this.altura + this.largura);
    console.log(`Voce desenhou ${Retangulo.name} de perimetro: ${perimetro} cm`);
  }

  redimensionar(novaAltura: number, novaLargura: number): void {
    this.altura = novaAltura;
    this.largura = novaLargura;
    console.log(`redimensionado para altura =  ${this.altura} e largura = ${this.largura} :) `);
  }
}

