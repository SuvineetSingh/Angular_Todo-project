import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos-item',
  templateUrl: './todos-item.component.html',
  styleUrls: ['./todos-item.component.css']
})
export class TodosItemComponent implements OnInit {
  // helps in accepting todo from the todo component to the todo-item component
  // helps in accepting todo from the todo component to the todo-item component
  @Input()
  todo: Todo = new Todo; 

  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter(); //event emitter
  @Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter(); //event emitter
  constructor() { }

  ngOnInit(): void {
  }

  OnClick(todo: Todo): void {
    this.todoDelete.emit(todo); //pass the control to parent component
    console.log("onClick has been triggered")
  }

  onCheckboxClick(todo:Todo):void{
    this.todoCheckbox.emit(todo); 
  }
}
