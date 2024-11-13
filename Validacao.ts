export class Validacao {
    static validarEntradaNumero(input: any): number {
      const number = parseFloat(input);
      if (isNaN(number)) throw new Error("Entrada inválida: número esperado.");
      return number;
    }
  }
  