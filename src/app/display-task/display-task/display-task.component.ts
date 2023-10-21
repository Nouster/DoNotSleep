import { Component, OnInit } from '@angular/core';
import { task } from 'src/app/interface/task-interface';
import { TaskService } from 'src/app/service/task.service';

@Component({
  selector: 'app-display-task',
  templateUrl: './display-task.component.html',
  styleUrls: ['./display-task.component.css'],
})
export class DisplayTaskComponent implements OnInit {
  tasks: task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.tasks$.subscribe((tasks) => {
      this.tasks = tasks;
    });
  }
}
