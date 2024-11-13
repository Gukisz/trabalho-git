export class Calculadora {
    constructor() {
      console.log("Classe Calculadora configurada.");
    }
    
    adicionar(a: number, b: number): number {
      return a + b;
    }

    subtrair(a: number, b: number): number {
      return a - b;
    }
    
    multiplicar(a: number, b: number): number {
        return a * b;
    }

    dividir(a: number, b: number): number {
    if (b === 0) throw new Error("Divisão por zero não permitida.");
        return a / b;
    }
}