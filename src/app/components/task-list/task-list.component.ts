import { Component, OnInit } from '@angular/core';
import { ITask, Levels } from '../models/interfaces/Task.interface';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {

  //TODO: Reformular como una lista de tareas

  task1:ITask = {
    title:"Task 1",
    description: "Task description one",
    completed:false,
    level:Levels.Info
  }

  task2:ITask = {
    title:"Task 2",
    description: "Task description Two",
    completed:true,
    level:Levels.Urgent,
  }

  constructor() { }

  ngOnInit():void{

  }

  deleteTask(task:ITask){
    // TODO: Sustituir por un Splice  para eliminar de la lista de tareas
    alert(`Se procede a eliminar la tarea ${task.title}`)
  }
}
