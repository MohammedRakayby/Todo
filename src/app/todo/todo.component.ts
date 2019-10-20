import { Component, OnInit, Input } from '@angular/core';
import { TodoModel } from '../model/todo-model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input() todoModel:TodoModel;
  details:string;
  constructor() { }

  ngOnInit() {
    this.details=this.todoModel.content;
  }

}
