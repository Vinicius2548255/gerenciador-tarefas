
import { Injectable } from '@angular/core';
import { Tarefa } from '../models/tarefa.model';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  private tarefas: Tarefa[] = [];

  listar(): Tarefa[] {
    return this.tarefas;
  }

  adicionar(tarefa: Tarefa): void {
    this.tarefas.push(tarefa);
  }

  editar(tarefaAtualizada: Tarefa): void {

    this.tarefas = this.tarefas.map(tarefa =>
      tarefa.id === tarefaAtualizada.id
        ? tarefaAtualizada
        : tarefa
    );

  }

  excluir(id: number): void {

    this.tarefas = this.tarefas.filter(
      tarefa => tarefa.id !== id
    );

  }

  concluir(id: number): void {

    const tarefa = this.tarefas.find(
      tarefa => tarefa.id === id
    );

    if (tarefa) {
      tarefa.concluida = !tarefa.concluida;
    }

  }

}
