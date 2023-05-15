import { ContratoItem } from "./item";

export interface ContratoPedido {
  valorTotal: number;
  items: ContratoItem[];

  adicionarMaisUmItem(novoItem: ContratoItem): void;
}


export class Pedido implements ContratoPedido {
  valorTotal: number;

  constructor(public items: ContratoItem[]) {
    this.valorTotal = items.reduce((soma, item) => soma += item.valor, 0);
  }

  public adicionarMaisUmItem(novoItem: ContratoItem) {
    this.items.push(novoItem);
    this.valorTotal += novoItem.valor;

    console.log(`O produto ${novoItem.nome} foi adiciona ao carrinho com sucesso! Agora o valor total é de R$ ${this.valorTotal.toFixed(2).replace(".", ",")}`);
  }
}

