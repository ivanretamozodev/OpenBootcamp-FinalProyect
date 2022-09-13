import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../../models/interfaces/Task.interface';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  @Input() task: Task | undefined;
  @Output() delete: EventEmitter<Task> = new EventEmitter<Task>();

  constructor() {}

  ngOnInit(): void {}

  deleteTask() {
    this.delete.emit(this.task);
  }
}
