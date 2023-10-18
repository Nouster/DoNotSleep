import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { task } from 'src/app/interface/task-interface';

@Component({
  selector: 'app-create-task-form',
  templateUrl: './create-task-form.component.html',
  styleUrls: ['./create-task-form.component.css'],
})
export class CreateTaskFormComponent {
  createTask: FormGroup;
  tasks: task[] = [];

  constructor(private fb: FormBuilder) {
    this.createTask = this.fb.group({
      newTask: ['', Validators.required],
    });
  }

  addTask() {
    if (this.createTask.invalid) {
      console.error('Missing field');
    }

    if (this.createTask.valid) {
      const newTaskControl = this.createTask.get('newTask');

      if (newTaskControl) {
        const newTaskName = newTaskControl.value;
        this.tasks.push({ name: newTaskName, done: false });
        this.createTask.reset();
      } else {
        // Gestion d'erreur ?
        console.error('object is null');
      }
    }
    console.log('success', this.tasks);
  }

  markAsDone(task: task) {
    task.done = true;
  }

  deleteTask(task: task) {
    this.tasks = this.tasks.filter((t) => t !== task);
  }
}
