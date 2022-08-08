import { Component, OnInit } from '@angular/core';
import {Todo} from '../../Todo';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  localItem: string;
  todos: Todo[];
  constructor() { 
    this.localItem = JSON.parse(localStorage.getItem("todos") || "[]");
    if(this.localItem == null){
      this.todos = [];
    }
    else{
      this.todos = JSON.parse(JSON.stringify(this.localItem)); 
      //use this instead because this.location will return JSON, but JSON.parse parses only strings. So have to use stringify.
    }
    
  }

  ngOnInit(): void {
  }

  deleteTodo(todo:Todo): void{
    console.log(todo)
    const index = this.todos.indexOf(todo)
    this.todos.splice(index,1)
    localStorage.setItem("todos", JSON.stringify(this.todos))
  }
  addTodo(todo:Todo): void{
    this.todos.push(todo)
    localStorage.setItem("todos", JSON.stringify(this.todos))
  }

  toggleTodo(todo:Todo): void{
    const index = this.todos.indexOf(todo)
    this.todos[index].active = !this.todos[index].active;
    localStorage.setItem("todos", JSON.stringify(this.todos))
  }

}
