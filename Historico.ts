export class Historico {
    private historico: string[] = [];
  
    adicionarEntrada(entry: string): void {
      this.historico.push(entry);
    }
  
    getHistorico(): string[] {
      return this.historico;
    }
}