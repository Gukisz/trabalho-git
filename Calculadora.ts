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

    percentage(a: number, b: number): number {
        return (a * b) / 100;
    }
    
    logaritmo(a: number): number {
        if (a <= 0) throw new Error("Logaritmo definido apenas para números positivos.");
        return Math.log(a);
      }
      
    seno(angle: number): number {
        return Math.sin((angle * Math.PI) / 180);
      } 
      
    cosseno(angle: number): number {
        return Math.cos((angle * Math.PI) / 180);
      }

}  