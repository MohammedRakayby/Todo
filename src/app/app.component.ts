import { Component, OnInit } from '@angular/core';
import { TodoModel } from './model/todo-model';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  todoArray: TodoModel[];
  constructor() {

  }
  ngOnInit(): void {
    this.todoArray=new Array();
  }

  public createTodo(userInput:string) {
    let createdTodo=new TodoModel();
    createdTodo.id=Math.floor(Math.random()*1000)+1;
    createdTodo.content=userInput;
    createdTodo.dateCreated=new Date();
    this.todoArray.push(createdTodo);
  }
}
