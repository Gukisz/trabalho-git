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
}