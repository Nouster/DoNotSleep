// task.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { task } from 'src/app/interface/task-interface';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasksSource = new BehaviorSubject<task[]>([]);
  tasks$ = this.tasksSource.asObservable();

  constructor() {}

  getTasks(): task[] {
    return this.tasksSource.value;
  }

  addTask(newTask: task) {
    const currentTasks = this.tasksSource.value;
    currentTasks.push(newTask);
    this.tasksSource.next(currentTasks);
  }

  markTaskAsDone(task: task) {
    const currentTasks = this.tasksSource.value;
    const index = currentTasks.findIndex((t) => t === task);
    if (index !== -1) {
      currentTasks[index].done = true;
      this.tasksSource.next(currentTasks);
    }
  }

  deleteTask(task: task) {
    const currentTasks = this.tasksSource.value;
    const updatedTasks = currentTasks.filter((t) => t !== task);
    this.tasksSource.next(updatedTasks);
  }
}
