import { Component, OnInit } from '@angular/core';

import { Levels, Task } from '../../models/interfaces/Task.interface';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit {
  task1: Task = {
    title: 'Title-1',
    description: 'Description-1',
    completed: true,
    level: Levels.info,
  };
  task2: Task = {
    title: 'Title-2',
    description: 'Description-2',
    completed: false,
    level: Levels.info,
  };

  constructor() {}

  ngOnInit(): void {}

  deleteTask(task: Task) {
    alert(`se procede a eliminar la tarea ${task.title}`);
  }
}
