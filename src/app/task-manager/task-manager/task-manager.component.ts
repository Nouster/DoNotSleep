import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { task } from 'src/app/interface/task-interface';
import { TaskService } from 'src/app/service/task.service';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.css'],
})
export class TaskManagerComponent implements OnInit {
  tasks: task[] = [];
  constructor(private taskService: TaskService, private toast: ToastrService) {}

  ngOnInit(): void {
    this.taskService.tasks$.subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  markAsDone(task: task): void {
    this.taskService.markTaskAsDone(task);
    this.toast.success(`"${task.name}" completed`);
  }

  deleteTask(task: task): void {
    this.taskService.deleteTask(task);
    this.toast.error(`"${task.name}" deleted`);
  }
}
