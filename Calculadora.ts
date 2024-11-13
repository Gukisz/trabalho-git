export class Calculadora {
    adicionar(a: number, b: number): number { return a + b; }
    subtrair(a: number, b: number): number { return a - b; }
    multiplicar(a: number, b: number): number { return a * b; }
    dividir(a: number, b: number): number {
      if (b === 0) throw new Error("Divisão por zero.");
      return a / b;
    }
  
    raizQuadrada(n: number): number { return Math.sqrt(n); }
    potencia(base: number, exponent: number): number { return Math.pow(base, exponent); }
    percentagem(n: number, percentage: number): number { return (n * percentage) / 100; }
    logaritmo(n: number): number { return Math.log(n); }
    seno(degrees: number): number { return Math.sin((degrees * Math.PI) / 180); }
    cosseno(degrees: number): number { return Math.cos((degrees * Math.PI) / 180); }
    tangente(degrees: number): number { return Math.tan((degrees * Math.PI) / 180); }
  }
  