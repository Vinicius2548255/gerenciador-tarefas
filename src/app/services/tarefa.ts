
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  tarefas: any[] = [];

  adicionarTarefa(tarefa: any) {
    this.tarefas.push(tarefa);
  }

  listarTarefas() {
    return this.tarefas;
  }

  excluirTarefa(index: number) {
    this.tarefas.splice(index, 1);
  }
}
