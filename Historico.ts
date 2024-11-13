export class Historico {
    private history: string[] = [];
  
    adicionarEntrada(entry: string): void {
      this.history.push(entry);
    }
  
    getHistorico(): string[] {
      return this.history;
    }

    limparHistorico(): void {
        this.history = [];
      }
}