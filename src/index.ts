import { Pizza, PlayStation2, PlayStation5 } from "./exercicio1/item";
import { Pedido } from "./exercicio1/pedido";
import { Circulo } from "./exercicio2/circulo";
import { Retangulo } from "./exercicio2/retangulo";

const atividade1 = () => {

  const pizza = new Pizza(30, "Calabreza", "Muito bommm");
  const ps5 = new PlayStation5(4900, "Playstation 5", "Alguma desc");
  const ps2 = new PlayStation2(300, "Playstation 2", "Alguma desc");
//teste git
  const pedido = new Pedido([pizza, ps5]);

  // ps5.ligar();

  console.log(pedido.valorTotal);
  pedido.adicionarMaisUmItem(ps2);
  // console.log(pedido.items[1]);
}

// atividade1();

const atividade2 = () => {
  const retangulo = new Retangulo(1, 2);
  const circulo = new Circulo(8);

  retangulo.desenhar();
  retangulo.redimensionar(6, 7);
  circulo.desenhar();
  circulo.redimensionar(10);
}


atividade2();
