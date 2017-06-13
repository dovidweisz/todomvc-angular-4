import { Component, OnInit, Input } from '@angular/core';

import {TodoDataService} from '../todo-data.service';

@Component({
  selector: 'todo-item',
  templateUrl: 'item.component.html',
  styleUrls: ['item.component.scss']
})

export class ItemComponent implements OnInit {
  @Input() item;
  constructor(private todoDataService: TodoDataService) { }

  ngOnInit() { }

  toggleComplete(item) {
    this.todoDataService.toggleTodoComplete(item);
  }

  remove(item) {
    this.todoDataService.deleteTodoById(item.id);
  }
}
