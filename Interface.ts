import * as readline from "readline-sync";
import { Calculadora } from "./Calculadora";
import { Historico } from "./historico";
import { Validacao } from "./Validacao";

export class InterfaceMenu {
  private calculadora = new Calculadora();
  private historico = new Historico();

  public iniciar(): void {
    let executando = true;
    while (executando) {
      console.log("Selecione uma operação:");
      console.log("1 - Adição");
      console.log("2 - Subtração");
      console.log("3 - Multiplicação");
      console.log("4 - Divisão");
      console.log("5 - Histórico");
      console.log("6 - Limpar Histórico");
      console.log("0 - Sair");

      const escolha = readline.question("Escolha uma opção: ");
      switch (escolha) {
        case "1":
          const a = Validacao.validarNumero(readline.question("Digite o primeiro número: "));
          const b = Validacao.validarNumero(readline.question("Digite o segundo número: "));
          const resultado = this.calculadora.adicionar(a, b);
          console.log(`Resultado: ${resultado}`);
          this.historico.adicionarEntrada(`Adição: ${a} + ${b} = ${resultado}`);
          break;
        case "5":
          console.log("Histórico de operações:");
          console.log(this.historico.getHistorico().join("\n"));
          break;
        case "6":
          this.historico.limparHistorico();
          console.log("Histórico limpo.");
          break;
        case "0":
          executando = false;
          console.log("Saindo...");
          break;
        default:
          console.log("Opção inválida.");
      }
    }
  }
}
