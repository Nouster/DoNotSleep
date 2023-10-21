import { Component, OnInit } from '@angular/core';
import { task } from 'src/app/interface/task-interface';
import { TaskService } from 'src/app/service/task.service';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.css'],
})
export class TaskManagerComponent implements OnInit {
  tasks: task[] = [];
  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.tasks$.subscribe((tasks) => {
      this.tasks = tasks;

      console.log('tasks :', this.tasks);
    });
  }
}
