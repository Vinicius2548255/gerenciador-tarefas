import { Component } from '@angular/core';
import { Tarefas } from './tarefas/tarefas';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Tarefas],
  templateUrl: './app.html'
})
export class App {
}