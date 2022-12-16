import { Component,EventEmitter,Input,OnInit, Output } from '@angular/core';
import { ITask } from '../models/interfaces/Task.interface';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {

  @Input() Task: ITask | undefined;
  @Output() delete :EventEmitter<ITask> = new EventEmitter<ITask>();

  constructor() { }

  ngOnInit(): void {

  }

  deleteTask(){
    //Notificamos al componente superior la tarea a eliminar
    this.delete.emit(this.Task);

  }
}
