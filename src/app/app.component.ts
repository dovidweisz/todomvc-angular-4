import {Component} from '@angular/core';
import {Todo} from './todo';
import {TodoDataService} from './todo-data.service';

@Component({
  selector: 'todo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  newTodo: Todo = new Todo();

  constructor(private todoDataService: TodoDataService) {
  }

  addTodo() {
    this.todoDataService.addTodo(this.newTodo);
    this.newTodo = new Todo();
  }

  get todos() {
    return this.todoDataService.getAllTodos();
  }

}
