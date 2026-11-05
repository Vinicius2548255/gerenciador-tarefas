import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tarefas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tarefas.html',
  styleUrl: './tarefas.css'
})
export class Tarefas {

  titulo = '';
  descricao = '';
  dataVencimento = '';

  tarefas: any[] = [];

  cadastrarTarefa() {
    if (!this.titulo.trim()) {
      alert('Digite o nome da tarefa!');
      return;
    }

    this.tarefas.push({
      titulo: this.titulo,
      descricao: this.descricao,
      dataVencimento: this.dataVencimento,
      concluida: false
    });

    this.titulo = '';
    this.descricao = '';
    this.dataVencimento = '';
  }

  excluirTarefa(index: number) {
    this.tarefas.splice(index, 1);
  }

  concluirTarefa(tarefa: any) {
    tarefa.concluida = !tarefa.concluida;
  }
}