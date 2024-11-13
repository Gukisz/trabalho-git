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
    
    raizQuadrada(a: number): number {
        if (a < 0) throw new Error("Número negativo não possui raiz quadrada real.");
        return Math.sqrt(a);
    }
    
    potencia(a: number, b: number): number {
        return Math.pow(a, b);
    }
}  