import { Component, OnInit } from '@angular/core';
import { TodoModel } from './model/todo-model';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  todoArray: TodoModel[];

  opened: boolean = false;

  constructor() {

  }
  ngOnInit(): void {
    this.checkLocalStorage();
  }

  public createTodo(userInput: string) {
    let createdTodo = new TodoModel();
    createdTodo.id = String(Math.floor(Math.random() * 1000) + 1);
    createdTodo.content = userInput;
    createdTodo.dateCreated = new Date();
    this.todoArray.push(createdTodo);
  }
  private checkLocalStorage() {
    if (localStorage.length > 0) {
      //read from localStorage
      this.readFromStorage();
    } else {
      this.todoArray = new Array();
    }
  }
  public saveToStorage() {
    this.todoArray.forEach(todo => {
      localStorage.setItem(String(todo.id), JSON.stringify(todo));
    });
    console.log('saved map of size: ' + localStorage.length);
  }
  private readFromStorage() {
    this.todoArray=new Array();
    for (let i = 0; i < localStorage.length; i++) {
      let todo = JSON.parse(localStorage.getItem(localStorage.key(i)));
      this.todoArray.push(todo);
    }
    console.log('read from storage map of size: ' + localStorage.length);
  }
  public clearStorage(){
    localStorage.clear();
    console.log('cleared local Storage');
  }
}
