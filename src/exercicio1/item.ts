export interface ContratoItem {
  valor: number;
  nome: string;
  descricao: string;
}

export interface ContratoConsole {
  ligar(): void;
}
export class Pizza implements ContratoItem {
  constructor(public valor: number, public nome: string, public descricao: string) { }
}

type Console = ContratoConsole & ContratoItem;

export class PlayStation5 implements Console {
  constructor(public valor: number, public nome: string, public descricao: string) { }

  public ligar() {
    console.log("Ligando");
  }

  public ligarPelaAlexa() {
    console.log("usando a alexa para ligar");
  }
}

export class PlayStation2 implements Console {
  constructor(public valor: number, public nome: string, public descricao: string) { }

  public ligar() {
    console.log("Ligando");
  }
}

export class Computador implements ContratoItem {
  constructor(public valor: number, public nome: string, public descricao: string) { }
}
