import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-item-todo',
  templateUrl: './item-todo.component.html',
  styleUrls: ['./item-todo.component.css']
})
export class ItemTodoComponent implements OnInit {

  @Input()
  todo!: Todo;
  @Input()
  i!: number;

  @Output() todoDelete:EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckBox:EventEmitter<Todo> = new EventEmitter();

  ngOnInit(): void {
  }
  onClick(todo: Todo){
    this.todoDelete.emit(todo)
    console.log("onClick triggered");
    
  }
  onCheckBoxClick(todo:Todo){
    
    
      this.todoCheckBox.emit(todo);
  }
}
