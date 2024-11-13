export class Validacao {
    public static validarNumero(input: string): number {
        const numero = Number(input);
        if (isNaN(numero)) {
            throw new Error("Entrada inválida. Por favor, digite um número válido.");
        }
        return numero;
    }
}
  