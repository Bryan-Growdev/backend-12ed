import { IFormatoDeElemento } from "./formatoElemento";

export class Circulo implements IFormatoDeElemento {
  constructor(public raio: number){

  }
  desenhar(): void {
      console.log(`O raio atual é ${this.raio}`)
  }
  redimensionar(novoRaio: number): void {
      this.raio = novoRaio;
      console.log(`O novo raio do circulo é: ${this.raio}`)
  }
}